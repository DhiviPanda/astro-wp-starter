interface WPPost {
  id: number;
  title: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  date: string;
  link: string;
  _embedded?: {
    'wp:featuredmedia'?: Array<{
      source_url: string;
      alt_text: string;
      media_details: {
        width: number;
        height: number;
      };
    }>;
  };
}

const WP_API_URL = 'https://cms.darumaproducciones.es/wp-json/wp/v2';

export async function getPosts(): Promise<WPPost[]> {
  try {
    // Importante: ?_embed para obtener imágenes destacadas
    const response = await fetch(`${WP_API_URL}/posts?_embed`);
    
    if (!response.ok) {
      console.error(`WordPress API error: ${response.status}`);
      return [];
    }
    
    const posts: WPPost[] = await response.json();
    return posts;
  } catch (error) {
    console.error('Error fetching WordPress posts:', error);
    return [];
  }
}

// Helper para obtener imagen destacada
export function getFeaturedImage(post: WPPost) {
  const media = post._embedded?.['wp:featuredmedia']?.[0];
  
  if (!media) return null;
  
  return {
    url: media.source_url,
    alt: media.alt_text || post.title.rendered,
    width: media.media_details.width,
    height: media.media_details.height
  };
}