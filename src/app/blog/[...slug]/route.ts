// app/blog/[...slug]/route.ts
import { NextRequest } from 'next/server';

export async function GET(req: NextRequest, { params }: { params: Promise<{ slug: string[] }> }) {
  const paramsAwaited = await params;
  const pathname = '/blog/' + (paramsAwaited.slug?.join('/') || '');
  const proxiedUrl = `https://clevercards.com${pathname}`;

  const res = await fetch(proxiedUrl, {
    headers: {
      'User-Agent': req.headers.get('user-agent') || '',
    },
  });

  let html = await res.text();

  // Fix broken relative paths:
  html = html
    .replace(/(href|src)="\.{1,2}\/([^"]+)"/g, '$1="https://clevercards.com/$2"')
    .replace(/(href|src)="\/([^"]+)"/g, '$1="https://clevercards.com/$2"');

  return new Response(html, {
    status: res.status,
    headers: {
      'Content-Type': 'text/html',
    },
  });
}
