import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthStackParamList } from "../screens/allRoutes";
import WelcomeScreen from "../screens/Welcome/WelcomeScren";
import SignInScreen from "../screens/SignIn/SignInPage";
import SignUpScreen from "../screens/SignUp/SignUpScreen";
import ForgotPasswordScreen from "../screens/ForgotPassword/ForgotPasswordScren";





const Stack = createNativeStackNavigator<AuthStackParamList>();

const AuthStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                headerTitle: "",
                headerStyle: {
                    // backgroundColor: "transparent"
                },
                headerShadowVisible: false
            }}
            initialRouteName='WelcomeScreen'
            // initialRouteName='ForgotPassword'
        >
            <Stack.Screen
                name="WelcomeScreen"
                component={WelcomeScreen}
            />

            <Stack.Screen
                name="SignIn"
                component={SignInScreen}
            />
            <Stack.Screen
                name="SignUp"
                component={SignUpScreen}
            />


            <Stack.Screen
                name="ForgotPassword"
                component={ForgotPasswordScreen}
            />



        </Stack.Navigator>
    )
}

export default AuthStack