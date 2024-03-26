import React, { useReducer } from 'react';
import { ItemsNotShippable } from './pages/ItemsNotShippable';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button, Text, View } from 'react-native';
import { Item } from './pages/Item/Item';
import { ThemeProvider } from 'styled-components';
import { CustomTheme } from './theme/Theme';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { RootState, store } from './redux/store';
import { increment } from './redux/counterSlice';

const Stack = createNativeStackNavigator();
export const InfoContext = React.createContext<string | null>(null);

export default function App() {
  return (
    // Também é possível ser passado com useContext
    <ThemeProvider theme={CustomTheme}>
      <Provider store={store}>
        <InfoContext.Provider value={'Passando informações em camadas'}>
          <NavigationContainer>
            <Stack.Navigator initialRouteName="Cases">
              <Stack.Screen name="Cases" component={Inicial} />
              <Stack.Screen
                name="ItemsNotShippable"
                component={ItemsNotShippable}
              />
              <Stack.Screen name="Item" component={Item} />
            </Stack.Navigator>
          </NavigationContainer>
        </InfoContext.Provider>
      </Provider>
    </ThemeProvider>
  );
}

const Inicial = () => {
  const navigation = useNavigation();
  const counter = useSelector((state: RootState) => state.counter);
  const dispatch = useDispatch();

  return (
    <View>
      <Text>Redux: {counter.value}</Text>
      <Button title="Go to Item" onPress={() => navigation.navigate('Item')} />
      <Button title="Incrementar" onPress={() => dispatch(increment())} />
    </View>
  );
};
