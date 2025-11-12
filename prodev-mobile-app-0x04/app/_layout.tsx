import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
        contentStyle: { backgroundColor: 'white' }
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: 'Welcome'
        }}
      />
      <Stack.Screen
        name="join"
        options={{
          title: 'Join',
          presentation: 'card'
        }}
      />
      <Stack.Screen
        name="signin"
        options={{
          title: 'Sign In',
          presentation: 'card'
        }}
      />
    </Stack>
  );
}