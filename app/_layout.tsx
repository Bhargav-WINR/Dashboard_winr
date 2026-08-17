import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
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
          width: 280,
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
          drawerIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="view-dashboard"
              size={size || 22}
              color={color}
            />
          ),

        }}
      />

      <Drawer.Screen
        name="attendance"
        options={{
          title: 'Attendance',
          drawerLabel: 'Attendance',

          drawerIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="calendar-check"
              size={size || 22}
              color={color}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="employees"
        options={{
          title: 'Employees',
          drawerLabel: 'Employees',

          drawerIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="account-group"
              size={size || 22}
              color={color}
            />
          ),

        }}
      />
      <Drawer.Screen
        name="biodata"
        options={{
          title: 'Bio-Data Form',
          drawerLabel: 'Bio-Data Form',

          drawerIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="file-account"
              size={size || 22}
              color={color}
            />
          ),
        }}
      />

      <Drawer.Screen
        name="shifts-holidays"
        options={{
          title: 'Shifts & Holidays',
          drawerLabel: 'Shifts & Holidays',

          drawerIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="calendar-clock"
              size={size || 22}
              color={color}
            />
          ),
        }}
      />

      <Drawer.Screen
        name="biometric-sync"
        options={{
          title: 'Biometric-Sync',
          drawerLabel: 'Biometric-Sync',

          drawerIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="fingerprint"
              size={size || 22}
              color={color}
            />
          ),
        }}
      />
    </Drawer>
  );
}