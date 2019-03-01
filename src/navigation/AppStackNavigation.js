import { createStackNavigator, createAppContainer } from "react-navigation";
import Home from "../screens/Home";
import Profile from "../screens/Profile";
import Videos from "../screens/Videos/Videos";
import Login from "../screens/Auth/Login";
import Welcome from "../screens/Welcome";

const AppStackNavigator = createStackNavigator(
  {
    Welcome: Welcome,
    Login: Login,
    Home: Home,
    Profile: Profile,
    Videos: Videos
  },
  {
    initialRouteName: "Welcome",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "orange"
      }
    }
  }
);
const AppContainer = createAppContainer(AppStackNavigator);

export default AppContainer;
