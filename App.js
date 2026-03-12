import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';

// Import Trạm biến áp
import { AppContext, AppProvider } from './AppContext';

// Import 2 hệ thống cửa
import AuthStack from './AuthStack';
import MainStack from './MainStack';

// --- BỘ ĐIỀU PHỐI (Chỉ chạy khi đã được bọc điện) ---
const RootNavigator = () => {
  // Rút dây điện từ Trạm Biến Áp ra xem có điện (true) hay không (false)?
  const { isLoggedIn } = useContext(AppContext);

  return (
    <NavigationContainer>
      {/* Cú pháp ma thuật: CÓ điện thì mở MainStack, MẤT điện thì mở AuthStack */}
      {isLoggedIn ? <MainStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

// --- MÓNG NHÀ CHÍNH ---
export default function App() {
  return (
    // Bọc AppProvider ở ngoài cùng để truyền điện đi toàn App
    <AppProvider>
      <RootNavigator />
    </AppProvider>
  );
}

