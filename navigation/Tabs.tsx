import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeStackParamList } from "../screens/allRoutes";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import DashboardScreen from "../screens/DashBoard/DashBoardScreen";
import CommunityScreen from "../screens/Community/CommunityScreen";
import PostsScreen from "../screens/Post/PostScreen";
import ForumScreen from "../screens/Forum/ForumScreen";
import SettignsScreen from "../screens/Settings/SettingsScreen";
import MyTabBar from "./CustomTabBar";



const Tab = createBottomTabNavigator();




const Tabs = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                headerShadowVisible: false,
            }}
            tabBar={props => <MyTabBar {...props} />}
        >
            <Tab.Screen
                name="DashBoardScreen"
                children={DashboardScreen}
            />


            <Tab.Screen
                name="Community"
                children={CommunityScreen}
            />


            <Tab.Screen
                name="Post"
                children={PostsScreen}
            />



            <Tab.Screen
                name="Forum"
                children={ForumScreen}
            />


            <Tab.Screen
                name="Settings"
                children={SettignsScreen}
            />
        </Tab.Navigator>
    )
}

export default Tabs