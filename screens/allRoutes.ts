import { NavigatorScreenParams } from "@react-navigation/native";


export type RootStackParamList = {
    HomeNavigation: NavigatorScreenParams<HomeStackParamList>
    AuthNavigator: NavigatorScreenParams<AuthStackParamList>;
    // WebViewScreen: { title: any, url: any },
}



export type AuthStackParamList = {
    SignIn: undefined
    SignUp: undefined
    ForgotPassword: undefined
    WelcomeScreen: undefined

}



export type HomeStackParamList = {
    DashBoard: undefined
    Forum: undefined, 
    Settings: undefined, 
    Post: undefined, 
    Community: undefined

}