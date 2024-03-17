import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ThemeProvider } from '@shopify/restyle';
import { theme } from './theme';
import { LoginScreen } from './screens/login';

const stack = createNativeStackNavigator();

export function Routes() {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <stack.Navigator>
          <stack.Screen
            name="Login"
            component={LoginScreen}
            options={{
              headerShown: false,
            }}
          />
        </stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}
