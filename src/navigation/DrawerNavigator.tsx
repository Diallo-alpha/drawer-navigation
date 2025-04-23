import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';
import DrawerContent from '../components/DrawerContent';
import { RootDrawerParamList } from '../types/navigation';

// Création du Drawer Navigator avec le typage correct
const Drawer = createDrawerNavigator<RootDrawerParamList>();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator 
      initialRouteName="Home"
      drawerContent={(props) => <DrawerContent {...props} />}
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Drawer.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{ title: 'Accueil' }}
      />
      <Drawer.Screen 
        name="Details" 
        component={DetailsScreen} 
        options={{ title: 'Détails' }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;