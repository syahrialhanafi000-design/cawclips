import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest, { params }: { params: Promise<{ name: string }> }) {
  const railwayApiUrl = process.env.RAILWAY_API_URL;
  const railwayApiKey = process.env.RAILWAY_SECRET_KEY;

  if (!railwayApiUrl || !railwayApiKey) {
    return new NextResponse('Server configuration missing', { status: 500 });
  }

  const { name } = await params;

  try {
    const response = await fetch(`${railwayApiUrl}/file/${name}`, {
      method: 'GET',
      headers: {
        'x-api-key': railwayApiKey,
      },
    });

    if (!response.ok) {
      return new NextResponse('File not found', { status: response.status });
    }

    // Forward the content type and other relevant headers
    const contentType = response.headers.get('content-type') || 'application/octet-stream';
    const contentDisposition = response.headers.get('content-disposition');

    const headers = new Headers();
    headers.set('Content-Type', contentType);
    if (contentDisposition) {
      headers.set('Content-Disposition', contentDisposition);
    }

    // Use pipeThrough to stream the response naturally
    return new NextResponse(response.body, {
      status: 200,
      headers,
    });
  } catch (error) {
    console.error('Proxy Error (File):', error);
    return new NextResponse('Failed to proxy request to backend', { status: 500 });
  }
}
