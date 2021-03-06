import React from 'react';
import { View, Text} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';

//import screens
import InitDesign from './screens/InitDesign';
import DesignScreen from './screens/DesignScreen';
import Marketplace from './screens/marketplace/Display';
import Furniture from './screens/marketplace/Furniture';
import Checkout from './screens/Checkout';

class Details extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Details Screen</Text>
        </View>
      );
    }
}

const DesignStack = createStackNavigator(
  {
    Design: {
      screen: DesignScreen,
      navigationOptions: {
        title: "Design your room"
      }
    },
    Marketplace : {
      screen: Marketplace,
      navigationOptions: {
        title: "For the Bedroom"
      }
    },
    Furniture : {
      screen: Furniture,
      navigationOptions: {
        title: 'My furniture'
      }
    },
    Checkout : {
      screen: Checkout,
      navigationOptions: {
        title: 'Checkout'
      }
    }
  },
  {
    initialRouteName: 'Design'
  }
);

export default createAppContainer(DesignStack);