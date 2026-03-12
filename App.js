import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { AppContext, AppProvider } from './AppContext';

import AuthStack from './AuthStack';
import MainStack from './MainStack';

const RootNavigator = () => {
  const { isLoggedIn } = useContext(AppContext);

  return (
    <NavigationContainer>
      {isLoggedIn ? <MainStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default function App() {
  return (
    <AppProvider>
      <RootNavigator />
    </AppProvider>
  );
}

