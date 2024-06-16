import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "../screens/allRoutes";
import AuthStack from "./AuthStack";
import AppStack from "./AppStack";
import { useEffect, useState } from "react";
import { SecureStorage } from "../utils/storage/secureStorage";
import PulseLoadingModal from "../components/Display/PulseLoading";




const Stack = createNativeStackNavigator<RootStackParamList>();


const RootNavigator = () => {
    const [userAuthenticated, setUserAuthenticated] = useState(false);

    const [isLoading, setLoading] = useState(true)


    const checker = async () => {
        await SecureStorage.getInst().getValueFor("userAuthenticated").then((res: any) => {
            // console.log(res)

            if (res === "true") {
                setUserAuthenticated(true)
                // RefreshAccess()
            } else {
                setUserAuthenticated(false)
            }
        })
    }

    useEffect(() => {
        const intervalId = setInterval(checker, 1000);

        // Cleanup interval on component unmount
        return () => clearInterval(intervalId);
    }, []);

    useEffect(() => {
        const loadData = async () => {
            // Simulate async operations

            console.log("loading")
            await new Promise(resolve => setTimeout(resolve, 2000)); // Wait for 2 seconds
            setLoading(false); // Set loading to false after simulated loading
        };

        loadData();
    }, []);


    if (isLoading) {
        return (
           <PulseLoadingModal/>
        );
    }


    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}>


            {userAuthenticated === true ?
                (
                    <Stack.Screen name="HomeNavigation" component={AppStack} />

                )
                :
                (

                    <Stack.Screen name="AuthNavigator" component={AuthStack} />
                )

            }
        </Stack.Navigator>
    )
}

export default RootNavigator