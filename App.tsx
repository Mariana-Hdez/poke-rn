import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { MainStack } from './src/navigation';
import { FavoritesProvider } from './src/store/favorites';

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaProvider>
        <FavoritesProvider>
          <NavigationContainer>
            <MainStack />
          </NavigationContainer>
        </FavoritesProvider>
      </SafeAreaProvider>
    </QueryClientProvider>
  );
}
