import { View } from "react-native"
import Layout from "../../components/Layout/MainLayout"
import { useContext } from "react";
import { ThemeContext } from "../../utils/lib/Colours/colours";
import { AppText } from "../../components/Display/AppText";
import ListMessages from "./ListMessages";


const ForumScreen = () => {
    const { theme, toggleTheme } = useContext<ThemeContextValue>(ThemeContext);
    return (
        <Layout backgroundColour={theme.backgroundAlt} appBar={<HeaderStuff />}>
            <View>


                <ListMessages />

            </View>
        </Layout>
    )
}


const HeaderStuff = () => {
    const { theme, toggleTheme } = useContext<ThemeContextValue>(ThemeContext);
    return (
        <View>
            <AppText style={{
                color: theme.textColor,
                fontSize: 36,
                fontWeight: "500"
            }}>
                Messages
            </AppText>
        </View>
    )
}


export default ForumScreen