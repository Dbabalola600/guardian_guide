import { View } from "react-native"
import Layout from "../../components/Layout/MainLayout"
import { useContext } from "react";
import { ThemeContext } from "../../utils/lib/Colours/colours";


const PostsScreen =()=>{
    const { theme, toggleTheme } = useContext<ThemeContextValue>(ThemeContext);
    return(
        <Layout backgroundColour={theme.backgroundAlt}>
            <View>

            </View>
        </Layout>
    )
}


export default PostsScreen