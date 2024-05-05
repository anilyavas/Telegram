import { Tabs } from 'expo-router';
import { Entypo } from '@expo/vector-icons';

export default function TabsNavigator() {
  return (
    <Tabs>
      <Tabs.Screen
        name='index'
        options={{
          title: 'Chats',
          tabBarIcon: ({ size, color }) => (
            <Entypo name='home' size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name='profile'
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <Entypo name='user' color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  );
}
