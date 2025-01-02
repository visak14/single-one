import pusher from '@/lib/pusher';
import { NextResponse } from 'next/server';

export const POST = async (
  req: Request,
  context: { params:  Promise<Record<string, string>>}
) => {
  const { channel, event, data } = await req.json();
 // Example usage of dynamic route params

  try {
    await pusher.trigger(channel, event, data);
  } catch (error) {
    console.error('Error sending pusher event', error);
    return NextResponse.json({ success: false, error: 'Failed to trigger event' }, { status: 500 });
  }

  return NextResponse.json({ success: true }, { status: 200 });
};
