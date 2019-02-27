import { createStackNavigator, createAppContainer } from "react-navigation";
import Home from "../screens/Home";
import Profile from "../screens/Profile";
import Videos from "../screens/Videos/Videos";
import Login from "../screens/Auth/Login";

const AppStackNavigator = createStackNavigator(
  {
    Login: Login,
    Home: Home,
    Profile: Profile,
    Videos:Videos
  },
  {
    initialRouteName:'Login',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "orange"
      }
    }
  }
);
const AppContainer = createAppContainer(AppStackNavigator);

export default AppContainer;
