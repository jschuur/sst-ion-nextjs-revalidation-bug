import { revalidatePath } from 'next/cache';
import { NextResponse } from 'next/server';

import { invalidateCloudFrontPaths } from '@/cloudfront';

export const dynamic = 'force-dynamic';

export const GET = async (request: Request) => {
  try {
    console.log('revalidatePath /');

    revalidatePath('/');
    await invalidateCloudFrontPaths(['/*']);
  } catch (err: unknown) {
    const errorMessage = (err as Error).message;

    console.error('Error revalidating /: ', errorMessage);

    return NextResponse.json({ status: 'error', message: errorMessage }, { status: 500 });
  }

  return NextResponse.json({ status: 'success', message: '/ revalidated' });
};
