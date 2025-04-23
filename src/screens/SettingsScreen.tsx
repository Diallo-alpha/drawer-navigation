import React from 'react';
import { View, StyleSheet } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { Text } from 'react-native';

function DrawerContent(props: any) {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.drawerContent}>
        <View style={styles.userInfoSection}>
          <Text style={styles.title}>Mon Application</Text>
        </View>
        
        <DrawerItem
          label="Accueil"
          onPress={() => props.navigation.navigate('Home')}
        />
        <DrawerItem
          label="Détails"
          onPress={() => props.navigation.navigate('Details', { itemId: 1 })}
        />
      </View>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
    marginBottom: 25,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
  },
});

export default DrawerContent;