import { revalidatePath } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    // Verify the request is from Contentful using a secret token
    const authHeader = request.headers.get('authorization');
    if (authHeader !== `Bearer ${process.env.REVALIDATION_TOKEN}`) {
      return NextResponse.json({ message: 'Invalid token' }, { status: 401 });
    }

    // Get the slug from the request body
    const body = await request.json();
    const slug = body.slug;

    // Revalidate the specific blog post and the blog listing page
    if (slug) {
      revalidatePath(`/blog/${slug}`);
    }
    revalidatePath('/blog');

    return NextResponse.json({ revalidated: true, now: Date.now() });
  } catch (err) {
    return NextResponse.json({ message: 'Error revalidating' }, { status: 500 });
  }
} 