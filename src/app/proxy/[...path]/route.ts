// app/proxy/[...path]/route.ts
import { NextRequest } from 'next/server';

export async function GET(req: NextRequest, { params }: { params: Promise<{ path: string[] }> }) {
  const paramsAwaited = await params;
  const assetPath = '/' + paramsAwaited.path.join('/');
  const proxiedUrl = `https://clevercards.com${assetPath}`;

  const res = await fetch(proxiedUrl, {
    headers: {
      'User-Agent': req.headers.get('user-agent') || '',
    },
  });

  const contentType = res.headers.get('content-type') || 'application/octet-stream';
  const body = await res.arrayBuffer(); // for binary compatibility

  return new Response(body, {
    status: res.status,
    headers: {
      'Content-Type': contentType,
    },
  });
}
