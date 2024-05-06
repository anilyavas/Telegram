import { useState } from 'react';
import { ChannelList } from 'stream-chat-expo';
import { Channel as ChannelType } from 'stream-chat';
import { router } from 'expo-router';

export default function MainTabScreen() {
  const [channel, setChannel] = useState<ChannelType>();

  return (
    <ChannelList
      onSelect={(channel) => router.push(`/channel/${channel.cid}`)}
    />
  );
}
