import { createStackNavigator, createAppContainer } from "react-navigation";
import Home from "../screens/Home";
import Profile from "../screens/Profile";
import Videos from "../screens/Videos/Videos";
import Login from "../screens/Auth/Login";
import Welcome from "../screens/Welcome";
import GymPackages from "../screens/GymPackages";

const AppStackNavigator = createStackNavigator(
  {
    Welcome: Welcome,
    Login: Login,
    Home: Home,
    Profile: Profile,
    Videos: Videos,
    GymPackages:GymPackages
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "orange"
      }
    }
  }
);
const AppContainer = createAppContainer(AppStackNavigator);

export default AppContainer;
