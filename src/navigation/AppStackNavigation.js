import { createStackNavigator, createAppContainer } from "react-navigation";
import Login from "../screens/Login";
import Home from "../screens/Home";
import Profile from "../screens/Profile";
import Videos from "../screens/Videos";

const AppStackNavigator = createStackNavigator(
  {
    Login: Login,
    Home: Home,
    Profile: Profile,
    Videos:Videos
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "orange"
      }
    }
  }
);
const AppContainer = createAppContainer(AppStackNavigator);

export default AppContainer;
