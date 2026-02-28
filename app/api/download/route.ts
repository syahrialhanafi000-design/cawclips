import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const railwayApiUrl = process.env.RAILWAY_API_URL;
  const railwayApiKey = process.env.RAILWAY_SECRET_KEY;

  if (!railwayApiUrl || !railwayApiKey) {
    return NextResponse.json({ error: 'Server configuration missing' }, { status: 500 });
  }

  try {
    const formData = await request.formData();

    const response = await fetch(`${railwayApiUrl}/download`, {
      method: 'POST',
      headers: {
        'x-api-key': railwayApiKey,
      },
      body: formData,
    });

    const data = await response.json();
    return NextResponse.json(data, { status: response.status });
  } catch (error) {
    console.error('Proxy Error (Download):', error);
    return NextResponse.json({ error: 'Failed to proxy request to backend' }, { status: 500 });
  }
}
