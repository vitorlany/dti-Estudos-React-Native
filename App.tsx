import React from 'react';
import { ItemsNotShippable } from './pages/ItemsNotShippable';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button, Text, View } from 'react-native';
import { Item } from './pages/Item/Item';
import { ThemeProvider } from 'styled-components';
import { CustomTheme } from './theme/Theme';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    // Também é possível ser passado com useContext
    <ThemeProvider theme={CustomTheme}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Item">
          <Stack.Screen name="Cases" component={Inicial} />
          <Stack.Screen
            name="ItemsNotShippable"
            component={ItemsNotShippable}
          />
          <Stack.Screen name="Item" component={Item} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}

const Inicial = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Text>Teste</Text>
      <Button
        title="Go to Item"
        onPress={() => navigation.navigate('ItemsNotShippable')}
      />
    </View>
  );
};
