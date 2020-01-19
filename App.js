import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from './src/screens/HomeScreen';
import AddCustomerScreen from './src/screens/AddCustomerScreen';
import KeepSerialScreen from './src/screens/KeepSerialScreen';

const HomeStack = createStackNavigator({
    Home: {
        screen: HomeScreen
    },
    AddCustomer: {
        screen: AddCustomerScreen
    },
    KeepSerial: {
        screen: KeepSerialScreen
    }
});

export default createAppContainer(HomeStack)