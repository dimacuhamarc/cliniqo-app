import React from 'react';
import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerShown: true,
        contentStyle: { backgroundColor: '#fff' },
      }}
    >
      <Stack.Screen 
        name="index" 
        options={{
          title: 'Cliniqo'
        }}
      />
      <Stack.Screen 
        name="onboarding/index"
        options={{
          title: 'Onboarding'
        }}
      />
    </Stack>
  );
}