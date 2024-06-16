import { TouchableOpacity, View } from "react-native"
import { ThemeContext } from "../utils/lib/Colours/colours";
import { useContext } from "react";
import { AppText } from "../components/Display/AppText";
import Home1 from "../assets/icons/home_active.svg"
import Community2 from "../assets/icons/community_inactive.svg"
import Forum2 from "../assets/icons/forum_inactive.svg"
import Settings2 from "../assets/icons/settings_inactive.svg"
import Community1 from "../assets/icons/community_active.svg"
import Home2 from "../assets/icons/home_inactive.svg"
import Forum1 from "../assets/icons/forum_active.svg"
import Settings1 from "../assets/icons/settings_active.svg"
import Post1 from "../assets/icons/adder.svg"
import { moderateScale, verticalScale } from "../utils/lib/screenUtils";
type TabBarProps = {
    state: any;
    descriptors: any;
    navigation: any;
};



function MyTabBar({ state, descriptors, navigation }: TabBarProps) {
    const { theme, toggleTheme } = useContext<ThemeContextValue>(ThemeContext);
    return (
        <View
            style={{
                flexDirection: 'row',
                backgroundColor: theme.backgroundColor,
                alignItems: 'center',
                justifyContent: "center",
                paddingBottom: 30,
                height: 80,
            }}
        >
            {state.routes.map((route: any, index: number) => {
                const { options } = descriptors[route.key];

                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                            ? options.title
                            : route.name;

                const isFocused = state.index === index;
                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name);
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };

                const size = 22
                const width = moderateScale(24)
                const height = verticalScale(24)
                const renderIcon = (focused: any) => {
                    switch (route.name) {
                        case "DashBoardScreen":
                            return (
                                <View>
                                    {focused ?
                                        <Home1 width={width} height={height} />
                                        :
                                        <Home2 width={width} height={height} />
                                    }


                                </View>
                            )
                        case "Community":
                            return (
                                <View>
                                    {
                                        focused ?
                                            <Community1 width={width} height={height} /> :
                                            <Community2 width={width} height={height} />
                                    }


                                </View>
                            )
                        case "Post":
                            return (
                                <View>
                                    <View style={{
                                        marginBottom: 40
                                    }}>
                                        <Post1 width={moderateScale(90)} height={verticalScale(90)} />
                                    </View>


                                </View>
                            )
                        case "Forum":
                            return (
                                <View>
                                    {focused ?
                                        <Forum1 width={width} height={height} /> :
                                        <Forum2 width={width} height={height} />
                                    }


                                </View>
                            )
                        case "Settings":
                            return (
                                <View>

                                    {focused ?
                                        <Settings1 width={width} height={height} /> :
                                        <Settings2 width={width} height={height} />
                                    }




                                </View>
                            )

                    }

                }


                return (
                    <TouchableOpacity
                        accessibilityRole="button"
                        accessibilityState={{ selected: isFocused }}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        style={{ flex: 1, alignItems: 'center' }}
                        key={route.key}
                    >


                        {renderIcon(isFocused)}
                        {/* <View>
                            <AppText>
                                {label}
                            </AppText>
                        </View> */}


                    </TouchableOpacity>
                )


            })}


        </View>
    )
}

export default MyTabBar