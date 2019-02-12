import { createStackNavigator, createAppContainer } from "react-navigation";
import Login from "../screens/Login";
import Home from "../screens/Home";
import Profile from "../screens/Profile";

const AppStackNavigator = createStackNavigator({
  Login:Login,
  Home:Home,
  Profile: Profile
},
{
    defaultNavigationOptions:{
        headerStyle:{
            backgroundColor:'orange'
        }
    }
});
const AppContainer = createAppContainer(AppStackNavigator)

export default AppContainer;
