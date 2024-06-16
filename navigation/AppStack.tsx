import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeStackParamList } from "../screens/allRoutes";
import DashboardScreen from "../screens/DashBoard/DashBoardScreen";
import Tabs from "./Tabs";

const Stack = createNativeStackNavigator<HomeStackParamList>();


const AppStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                headerTitle: "",
                headerStyle: {
                    backgroundColor: "transparent"
                },
                headerShadowVisible: false
            }}
            initialRouteName='DashBoard'
        >
            <Stack.Screen
                name="DashBoard"
                component={Tabs}
            />

        </Stack.Navigator>
        )
}

export default AppStack