import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest, { params }: { params: Promise<{ job_id: string }> }) {
  const railwayApiUrl = process.env.RAILWAY_API_URL;
  const railwayApiKey = process.env.RAILWAY_SECRET_KEY;

  if (!railwayApiUrl || !railwayApiKey) {
    return NextResponse.json({ error: 'Server configuration missing' }, { status: 500 });
  }

  const { job_id } = await params;

  try {
    const response = await fetch(`${railwayApiUrl}/status/${job_id}`, {
      method: 'GET',
      headers: {
        'x-api-key': railwayApiKey,
      },
    });

    const data = await response.json();
    return NextResponse.json(data, { status: response.status });
  } catch (error) {
    console.error('Proxy Error (Status):', error);
    return NextResponse.json({ error: 'Failed to proxy request to backend' }, { status: 500 });
  }
}
