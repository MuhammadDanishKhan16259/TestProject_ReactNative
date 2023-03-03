import {NavigationContainer} from '@react-navigation/native';
import StackNavigation from './navigation/StackNavigation';
// import StackNavigation from './navigation/Stacknavigation';

// component

// import TabNavigation from './navigation/TabNavigation';
// import DrawerNavigation from './navigation/DrawerNavigation';

function MyApp() {
  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  );
}

export default MyApp;
