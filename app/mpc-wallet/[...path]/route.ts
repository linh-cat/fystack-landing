import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  request: NextRequest,
  { params }: { params: { path: string[] } }
) {
  const ghostUrl = process.env.GHOST_URL || 'https://ghost.fystack.io';
  const imagePath = params.path.join('/');
  const imageUrl = `${ghostUrl}/content/images/${imagePath}`;

  try {
    // Fetch image from Ghost with authentication if needed
    const headers: HeadersInit = {};

    // If Ghost is password protected, you might need to add auth here
    // For now, we'll try fetching directly
    const response = await fetch(imageUrl, {
      headers,
      next: { revalidate: 86400 } // Cache for 24 hours
    });

    if (!response.ok) {
      console.error(`Failed to fetch image: ${imageUrl}, status: ${response.status}`);
      return new NextResponse('Image not found', { status: 404 });
    }

    const imageBuffer = await response.arrayBuffer();
    const contentType = response.headers.get('content-type') || 'image/jpeg';

    return new NextResponse(imageBuffer, {
      headers: {
        'Content-Type': contentType,
        'Cache-Control': 'public, max-age=31536000, immutable',
        'CDN-Cache-Control': 'public, max-age=31536000',
      },
    });
  } catch (error) {
    console.error('Error proxying image:', error);
    return new NextResponse('Error loading image', { status: 500 });
  }
}
