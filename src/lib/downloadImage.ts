import fs from 'fs';
import path from 'path';
import https from 'https';
import sharp from 'sharp';

export async function downloadAndOptimizeImage(
  url: string,
  filename: string
): Promise<string> {
  const cacheDir = path.join(process.cwd(), 'public', 'cached-images');
  
  if (!fs.existsSync(cacheDir)) {
    fs.mkdirSync(cacheDir, { recursive: true });
  }

  const webpPath = path.join(cacheDir, `${filename}.webp`);
  const publicWebpUrl = `/cached-images/${filename}.webp`;

  // Si ya existe optimizado, retornar
  if (fs.existsSync(webpPath)) {
    console.log(`✓ Image already cached: ${filename}.webp`);
    return publicWebpUrl;
  }

  console.log(`↓ Downloading: ${filename}`);

  // Descargar a buffer en memoria
  const imageBuffer = await new Promise<Buffer>((resolve, reject) => {
    https.get(url, (response) => {
      if (response.statusCode === 301 || response.statusCode === 302) {
        const redirectUrl = response.headers.location;
        if (redirectUrl) {
          https.get(redirectUrl, (redirectResponse) => {
            const chunks: Buffer[] = [];
            redirectResponse.on('data', (chunk) => chunks.push(chunk));
            redirectResponse.on('end', () => resolve(Buffer.concat(chunks)));
            redirectResponse.on('error', reject);
          }).on('error', reject);
          return;
        }
      }

      if (response.statusCode !== 200) {
        reject(new Error(`HTTP ${response.statusCode}`));
        return;
      }

      const chunks: Buffer[] = [];
      response.on('data', (chunk) => chunks.push(chunk));
      response.on('end', () => resolve(Buffer.concat(chunks)));
      response.on('error', reject);
    }).on('error', reject);
  });

  console.log(`✓ Downloaded: ${(imageBuffer.length / 1024).toFixed(2)} KB`);

  // Optimizar con Sharp
  try {
    console.log(`⚙ Processing with Sharp...`);
    
    await sharp(imageBuffer)
      .resize(1200, null, {
        withoutEnlargement: true,
        fit: 'inside'
      })
      .webp({
        quality: 85,
        effort: 6
      })
      .toFile(webpPath);

    const stats = fs.statSync(webpPath);
    const sizeKB = (stats.size / 1024).toFixed(2);
    const reduction = (((imageBuffer.length - stats.size) / imageBuffer.length) * 100).toFixed(1);
    
    console.log(`✓ Optimized: ${sizeKB} KB (-${reduction}%)`);
    
    return publicWebpUrl;

  } catch (error) {
    console.error(`✗ Sharp failed:`, error);
    
    // Fallback: guardar JPG original
    const jpgPath = path.join(cacheDir, `${filename}.jpg`);
    fs.writeFileSync(jpgPath, imageBuffer);
    console.log(`⚠ Fallback: saved original JPG`);
    
    return `/cached-images/${filename}.jpg`;
  }
}