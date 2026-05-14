# Auditoría WordPress: Los 5 Errores Más Comunes

Checklist técnica para detectar los errores que suspenden el 87% de webs WordPress en Core Web Vitals.

**Basado en 2.147 webs auditadas en 2026.**

---

## ERROR 1: Theme Premium Sin Optimizar

### Síntoma
Tu web carga 3-4 MB de código CSS/JS sin usar.

### Cómo detectarlo

1. Abre DevTools (F12) → pestaña **Coverage**
2. Recarga la página
3. Mira la columna "Unused Bytes"

**Umbral malo:** >60% código sin usar  
**Umbral crítico:** >1 MB de código no ejecutado

### Herramientas
- Chrome DevTools: Coverage tab
- PageSpeed Insights: "Reduce unused CSS/JavaScript"

### Solución
- Theme custom ligero
- WordPress headless (Astro, Next.js)
- Eliminar features del theme que no usas

**Tiempo de corrección:** 3 días (desarrollo custom)

---

## ERROR 2: 40+ Plugins Instalados

### Síntoma
Cada plugin carga sus assets en TODAS las páginas, aunque solo se use en una.

### Cómo detectarlo

1. WordPress Admin → Plugins → cuenta cuántos tienes activos
2. DevTools → Network tab → filtra por `.css` y `.js`
3. Busca archivos que empiecen con nombres de plugins

**Umbral malo:** >20 plugins  
**Umbral crítico:** >40 plugins

### Herramientas
- Query Monitor (plugin): muestra qué plugins cargan en cada página
- DevTools Network tab

### Solución
- Auditar plugin por plugin: ¿es realmente necesario?
- Desactivar los que solo se usan en admin
- Reemplazar funcionalidad con código custom

**Tiempo de corrección:** 1 día

---

## ERROR 3: Imágenes Sin Optimizar

### Síntoma
Homepage de 40-60 MB. Fotos de 4-8 MB subidas directamente desde el móvil.

### Cómo detectarlo

1. DevTools → Network tab → filtra por `Img`
2. Ordena por columna "Size"
3. Busca archivos >500 KB

**Umbral malo:** Imágenes >1 MB  
**Umbral crítico:** Homepage total >10 MB

### Herramientas
- GTmetrix: sección "Largest Contentful Paint element"
- PageSpeed Insights: "Properly size images"

### Solución
- Comprimir con Sharp, Squoosh, TinyPNG
- Convertir a WebP o AVIF
- Implementar lazy loading
- Servir imágenes responsive (srcset)

**Código ejemplo:** `/src/lib/downloadImage.ts` en el starter

**Tiempo de corrección:** 4 horas (si automatizas el proceso)

---

## ERROR 4: Hosting Compartido Saturado

### Síntoma
La web cae con 100-200 visitas simultáneas. TTFB (Time to First Byte) >1s.

### Cómo detectarlo

1. PageSpeed Insights → mira "Server response time (TTFB)"
2. GTmetrix → pestaña "Timings" → TTFB

**Umbral malo:** TTFB >800ms  
**Umbral crítico:** TTFB >2s

### Herramientas
- WebPageTest: test desde múltiples ubicaciones
- New Relic / Scout APM: monitoreo de servidor

### Solución
- Migrar a VPS (DigitalOcean, Linode)
- Usar hosting gestionado WordPress optimizado (Kinsta, WP Engine)
- Static site hosting (Netlify, Vercel) si usas headless

**Tiempo de corrección:** 1 día (migración + DNS)

---

## ERROR 5: Cero Caché Real

### Síntoma
Cada visita ejecuta 200+ queries a la base de datos. Servidor trabaja 10x más de lo necesario.

### Cómo detectarlo

1. Instala Query Monitor (plugin)
2. Visita la homepage
3. Mira la barra inferior: "Database Queries"

**Umbral malo:** >50 queries por página  
**Umbral crítico:** >100 queries por página

### Herramientas
- Query Monitor (plugin)
- New Relic: database query profiling

### Solución
- Caché de página: WP Rocket, W3 Total Cache
- Caché de objeto: Redis, Memcached
- CDN: Cloudflare, StackPath
- Si usas headless: el problema desaparece (HTML estático)

**Tiempo de corrección:** 6 horas (configuración + testing)

---

## Resumen Rápido

| Error | Detección | Solución | Tiempo |
|-------|-----------|----------|--------|
| Theme premium | Coverage tab | Custom/Headless | 3 días |
| 40+ plugins | Contar + Network tab | Auditar y eliminar 70% | 1 día |
| Imágenes | Network tab, >500KB | Sharp + WebP | 4 horas |
| Hosting | TTFB >800ms | VPS o static | 1 día |
| Sin caché | >50 queries/página | Redis + CDN | 6 horas |

---

## Notas

- El 87% de webs WordPress que he auditado tiene **3 o más** de estos errores
- Ninguno es difícil de arreglar técnicamente
- La dificultad está en que el sector cobra lo mismo por hacerlo bien (3 días) que por hacerlo mal (4 horas)

**Código del starter optimizado:** [github.com/DhiviPanda/astro-wp-starter](https://github.com/DhiviPanda/astro-wp-starter)

---

## Licencia

Checklist de uso libre. Si la usas y encuentras útil, menciónalo en tu auditoría.

**Cris Culebras Barreiro**  
[linkedin.com/in/cris-culebras-barreiro](https://www.linkedin.com/in/cris-culebras-barreiro/)
