import { TouchableOpacity, View } from "react-native"
import { palette, ThemeContext } from "../../utils/lib/Colours/colours"
import { horizontalScale, moderateScale, verticalScale } from "../../utils/lib/screenUtils"
import { Calendar, WeekCalendar, WeekCalendarProps, CalendarProvider } from "react-native-calendars"
import { AppText } from "../../components/Display/AppText"
import { useContext } from "react"
import { PressText } from "../../components/Display/PressText"
import { getDaysInMonth } from "../../utils/lib/calendar/calendarFunc"
import { currentDay, currentMonth, currentWeekDay, daysInMonth, firstDayOfMonth, TodayDate, weekDays } from "../../utils/lib/calendar/calendarData"
import MoreButton from "../../components/Display/MoreButton"

const FamilyCalendar = () => {
    const { theme, toggleTheme } = useContext<ThemeContextValue>(ThemeContext);


    const Data = [
        { title: "Ann’s Birthday", date: "10th Nov 2023" },
        { title: "Lily’s Vaccine", date: "24th Nov 2023" },
        { title: "John’s Dentist Appointment", date: "19th Nov 2023" },
    ]
    return (
        <View>
            <View
                style={{
                    alignSelf: "center",
                    // justifyContent: "center",
                    backgroundColor: palette.whiteBg,
                    width: moderateScale(329),
                    height: verticalScale(264),
                    borderRadius: 8,
                    paddingHorizontal: 10,
                    paddingBottom: verticalScale(10),
                    gap: verticalScale(20), 
                    paddingTop: verticalScale(20)

                }}
            >

                <View style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center"
                }}>

                    <View>
                        <AppText style={{
                            color: palette.darkGreen,
                            fontSize: 14, fontWeight: "600"
                        }}>

                            Family <AppText style={{ color: palette.primary }}>Calendar </AppText>
                        </AppText>

                        <AppText style={{
                            color: theme.textColor2,
                            fontSize: 9,
                            fontWeight: "400"
                        }}>
                            Monitor your child's progress
                        </AppText>

                    </View>


                    <View>
                        <MoreButton />
                    </View>
                </View>


                {/* <View style={{
                    // flex: 1,
                    height: verticalScale(75),
                            backgroundColor: "green"
                }}>
                    <CalendarProvider date={new Date().toISOString().split('T')[0]}
                        style={{
                            height: verticalScale(75),
                            backgroundColor: "green"
                        }}
                    
                    >
                        <WeekCalendar
                            calendarWidth={moderateScale(254)}
                            firstDay={1}
                            contentContainerStyle={{
                                backgroundColor: "green"
                            }}

                            calendarHeight={verticalScale(75)}
                            pastScrollRange={(new Date().getFullYear() - 1900) * 12}
                            futureScrollRange={(2099 - new Date().getFullYear()) * 12}
                            style={[{ paddingBottom: 20, paddingLeft: 0, paddingRight: 0, }]}
                        />
                    </CalendarProvider>

                </View> */}

                <View style={{
                    backgroundColor: "#D8EDDB",
                    width: moderateScale(306),
                    height: verticalScale(79),
                    borderRadius: 8,
                    // justifyContent:"center"
                }}>

                    <View style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        marginVertical: 10,
                        // backgroundColor: "red", 
                        width: moderateScale(289),
                        height: verticalScale(60),
                        alignSelf: "center"
                    }}>

                        {weekDays.map((item, index) => {
                            const isCurrentDay = index === currentWeekDay;
                            const dayNumber = currentDay - currentWeekDay + index;
                            return (
                                <View key={index} style={{
                                    flexDirection: "column",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    width: moderateScale(30),
                                }}>
                                    <AppText style={{
                                        color: theme.textColor2,
                                        fontSize: 12,
                                        fontWeight: "400",
                                    }}>
                                        {item}
                                    </AppText>


                                    <TouchableOpacity
                                        style={{
                                            backgroundColor: isCurrentDay ? theme.primary : theme.whiteColor,
                                            width: moderateScale(30),
                                            height: verticalScale(30),
                                            justifyContent: "center",
                                            alignContent: "center",
                                            alignItems: "center",
                                            borderRadius: 30,
                                            marginTop: 5,
                                        }}
                                    >
                                        <AppText style={{
                                            color: isCurrentDay ? theme.textColor : theme.textColor2,
                                            fontSize: 12,
                                            fontWeight: "400"
                                        }}>
                                            {/* {isCurrentDay ? currentDay : ''} */}
                                            {dayNumber}
                                        </AppText>
                                    </TouchableOpacity>
                                </View>
                            );
                        })}

                    </View>

                </View>


                <View style={{
                    paddingHorizontal: horizontalScale(10)
                }}>
                    <AppText style={{
                        color: theme.primary,
                        fontSize: 10,
                        fontWeight: "400", 
                        paddingBottom: verticalScale(20)
                    }}>
                        Upcoming  Events !
                    </AppText>

                    {Data.map((item, index) => {
                        return (
                            <View style={{
                                flexDirection: "row",
                                justifyContent: "space-between",
                                paddingBottom: verticalScale(10)
                            }}>
                                <View>
                                    {/* icon */}
                                    <AppText style={{
                                        color: theme.lightPrimary,
                                        fontSize: 9,
                                        fontWeight: "400"
                                    }}>
                                        {item.title}
                                    </AppText>

                                </View>

                                <View>
                                    <AppText style={{
                                        color: theme.lightPrimary,
                                        fontSize: 9,
                                        fontWeight: "400"
                                    }}>
                                        {item.date}
                                    </AppText>
                                </View>

                            </View>
                        )
                    })}
                    <View>

                    </View>
                </View>

            </View>
        </View>
    )
}

export default FamilyCalendar