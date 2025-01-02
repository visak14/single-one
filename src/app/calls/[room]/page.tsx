'use client';

import { FC } from 'react';

import { NavigationBar } from '@/components/navigation-bar';
import { MeetingRoom } from '@/components/meeting-room';

const Room: FC<{ params: Promise<{ room: string }> }> = async ({ params }) => {
  const resolvedParams = await params; // Resolve the promise
  const { room } = resolvedParams;

  return (
    <>
      <NavigationBar trigger={null} />
      <MeetingRoom chatId={room} />
    </>
  );
};

export default Room;
