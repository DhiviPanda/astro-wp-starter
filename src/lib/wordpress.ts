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
}

const WP_API_URL = 'https://cms.darumaproducciones.es/wp-json/wp/v2';

export async function getPosts(): Promise<WPPost[]> {
  try {
    const response = await fetch(`${WP_API_URL}/posts`);
    
    if (!response.ok) {
      throw new Error(`Error fetching posts: ${response.status}`);
    }
    
    const posts: WPPost[] = await response.json();
    return posts;
  } catch (error) {
    console.error('Error fetching WordPress posts:', error);
    return [];
  }
}

export async function getPost(id: number): Promise<WPPost | null> {
  try {
    const response = await fetch(`${WP_API_URL}/posts/${id}`);
    
    if (!response.ok) {
      throw new Error(`Error fetching post: ${response.status}`);
    }
    
    const post: WPPost = await response.json();
    return post;
  } catch (error) {
    console.error(`Error fetching WordPress post ${id}:`, error);
    return null;
  }
}