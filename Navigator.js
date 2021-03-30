import { NavigationContainer} from '@react-navigation/native';
import createStackNavigator from '@react-navigation/stack';

import AddUser from './AddUser';
import IndividualUser from './IndividualUser';
import Home from './Home';

const AuthStack = createStackNavigator();

export default () => {
    <NavigationContainer>
        <AuthStack.Screen name="Home" component={Home} />
        <AuthStack.Screen name="IndividualUser" component={IndividualUser} />
        <AuthStack.Screen name="Users" component={Users} />
        <AuthStack.Screen name="AddUser" component={AddUser} />
    </NavigationContainer>
};

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;