import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProductList from './components/ProductList';
import ProductSearch from './components/ProductSearch';
import ProductAdd from './components/ProductAdd';
import ProductDetail from './components/ProductDetail';

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Products" component={ProductList} />
        <Tab.Screen name="Add" component={ProductAdd} />
        <Tab.Screen name="Search" component={ProductSearch} />
        <Tab.Screen name="Detail" component={ProductDetail} />

      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
