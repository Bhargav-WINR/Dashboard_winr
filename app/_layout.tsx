import { Drawer } from 'expo-router/drawer';
import CustomDrawer from "../components/CustomDrawer";

export default function RootLayout() {
  return (
    <Drawer
      drawerContent={(props) => (
        <CustomDrawer {...props} />
      )}
      screenOptions={{
        drawerStyle: {
          backgroundColor: '#0b1f3a',
          width: 250,
        },
        drawerActiveTintColor: '#ffffff',
        drawerInactiveTintColor: '#94a3b8',

        drawerLabelStyle: {
          fontWeight: '500',
          fontSize: 16,
        },

        headerStyle: {
          backgroundColor: '#0b1f3a',
        },
        headerTintColor: '#ffffff',
      }}
    >

      <Drawer.Screen
        name="index"
        options={{
          title: 'Admin Dashboard',
          drawerLabel: 'Admin Dashboard',
        }}
      />

      <Drawer.Screen
        name="attendance"
        options={{
          title: 'Attendance',
          drawerLabel: 'Attendance',
 
        }}
      />
      <Drawer.Screen
        name="employees"
        options={{
          title: 'Employees',
          drawerLabel: 'Employees',
  
        }}
      />
      <Drawer.Screen
        name="biodata"
        options={{
          title: 'Bio-Data Form',
          drawerLabel: 'Bio-Data Form',
 
        }}
      />

      <Drawer.Screen
        name="shifts-holidays"
        options={{
          title: 'Shifts & Holidays',
          drawerLabel: 'Shifts & Holidays',
        }}
      />

      <Drawer.Screen
        name="biometric-sync"
        options={{
          title: 'Biometric-Sync',
          drawerLabel: 'Biometric-Sync',
 
        }}
      />
    </Drawer>
  );
} 