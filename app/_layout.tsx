import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Stack } from "expo-router";
import { ToastProvider } from "react-native-toast-notifications";

export default function RootLayout() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <ToastProvider>
        <Stack
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="index" />
          <Stack.Screen name="(routes)/onboarding/index" />
          <Stack.Screen name="(routes)/welcome-intro/index" />
          <Stack.Screen name="(routes)/sign-in/index" />
          <Stack.Screen name="(routes)/sign-up/index" />
          <Stack.Screen name="(routes)/forgot-password/index" />
          <Stack.Screen name="(routes)/verify-account/index" />
        </Stack>
      </ToastProvider>
    </QueryClientProvider>
  );
}
