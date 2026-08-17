import Feather from '@expo/vector-icons/Feather';
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import { usePathname, useRouter } from "expo-router";
import { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
export default function CustomDrawer(props: any) {
    const router = useRouter();
    const pathname = usePathname();

    const [attendanceOpen, setAttendanceOpen] = useState(false);
    const [shiftsOpen, setShiftsOpen] = useState(false);

    const isDashboard = pathname === "/Dashboard"
    const isattendance = pathname.startsWith("/attendance")
    // const isdaily = pathname === "/attendance/daily"
    // const ismonthly = pathname === "/attendance/monthly"
    // const ishistory = pathname === "/attendance/history"
    // const iscorrection = pathname === "/attendance/correction"
    const isemployees = pathname === "/employees"
    const isbiodata = pathname === "/biodata"
    const isshiftsholidays = pathname.startsWith("/shifts-holidays")
    // const isshifts = pathname === "/shifts-holidays/Shifts"
    // const isholidays = pathname === "/shifts-holidays/Holidays"
    const isbiometricSync = pathname === "/biometric-sync";


    return (
        <DrawerContentScrollView {...props} style={styles.container}>
            {/* Header with App Logo */}
            <View style={styles.headerContainer}>
                <View style={styles.logoContainer}>

                    <Image style={styles.logoImage}
                        source={require("../assets/images/android-chrome-192x192.png")}


                    />
                    <Text style={styles.logoTitle}>WINR</Text>
                </View>

                <View style={styles.headerTextContainer}  >

                    <Text style={styles.headerSubtitle}>HRMS</Text>

                </View>

            </View>

            <View style={styles.userContainer}>
                <Text style={styles.userText}>
                    <Feather
                        name="user"
                        size={14}
                        color={"#ffffff"}

                    />
                    name
                </Text>
            </View>

            <TouchableOpacity
                style={[styles.item, isDashboard && styles.activeItem]}
                onPress={() => router.push("/Dashboard")}
            >
                <MaterialCommunityIcons
                    name="view-dashboard-outline"
                    size={22}
                    color={"#ffffff"}
                />

                <Text style={styles.label}>Admin Dashboard</Text>
            </TouchableOpacity>

            {/* attendance */}

            <TouchableOpacity
                style={[styles.item, isattendance && styles.activeItem]}
                onPress={() => setAttendanceOpen(!attendanceOpen)}
            >
                <MaterialCommunityIcons
                    name="calendar-check-outline"
                    size={22}
                    color={"#ffffff"}
                />

                <Text style={styles.label}>Attendance</Text>

                <MaterialCommunityIcons style={{ marginLeft: "auto" }}
                    name={attendanceOpen ? "menu-down-outline" : "menu-right-outline"}
                    size={22}
                    color={"#ffffff"}
                />
            </TouchableOpacity>

            {attendanceOpen && (
                <View style={styles.subMenu}>

                    <TouchableOpacity
                        style={[styles.item,]}
                        onPress={() => router.push("/attendance/daily")}
                    >
                        <View style={styles.subrow}>
                            <MaterialCommunityIcons
                                name="checkbox-marked-circle-outline"
                                size={22}
                                color={"#ffffff"}
                            />
                            <Text style={styles.subname}>Daily</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[styles.item,]}
                        onPress={() => router.push("/attendance/monthly")}
                    >
                        <View style={styles.subrow}>
                            <MaterialCommunityIcons
                                name="calendar-month"
                                size={22}
                                color={"#ffffff"}
                            />
                            <Text style={styles.subname} >Monthly</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[styles.item,]}
                        onPress={() => router.push("/attendance/history")}
                    >
                        <View style={styles.subrow}>
                            <MaterialCommunityIcons
                                name="history"
                                size={22}
                                color={"#ffffff"}
                            />
                            <Text style={styles.subname} >History</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[styles.item,]}
                        onPress={() => router.push("/attendance/correction")}
                    >
                        <View style={styles.subrow}>
                            <MaterialCommunityIcons
                                name="checkbox-multiple-marked-outline"
                                size={22}
                                color={"#ffffff"}
                            />
                            <Text style={styles.subname}>Correction</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            )}

            <TouchableOpacity
                style={[styles.item, isemployees && styles.activeItem]}
                onPress={() => router.push("/employees")}
            >
                <MaterialCommunityIcons
                    name="account-group-outline"
                    size={22}
                    color={"#ffffff"}
                />

                <Text style={styles.label}>Employees</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={[styles.item, isbiodata && styles.activeItem]}
                onPress={() => router.push("/biodata")}
            >
                <MaterialCommunityIcons
                    name="file-account-outline"
                    size={22}
                    color={"#ffffff"}
                />

                <Text style={styles.label}>Bio-Data Form</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={[styles.item, isshiftsholidays && styles.activeItem]}
                onPress={() => setShiftsOpen(!shiftsOpen)}
            >
                <MaterialCommunityIcons
                    name="calendar-clock-outline"
                    size={22}
                    color={"#ffffff"}
                />

                <Text style={styles.label}>Shifts & Holidays</Text>

                <MaterialCommunityIcons style={{ marginLeft: "auto" }}
                    name={shiftsOpen ? "menu-down-outline" : "menu-right-outline"}
                    size={22}
                    color={"#ffffff"}
                />
            </TouchableOpacity>

            {shiftsOpen && (
                <View style={styles.subMenu}>
                    <TouchableOpacity
                        style={[styles.item,]}
                        onPress={() => router.push("/shifts-holidays/Shifts")}
                    >
                        <View style={styles.subrow}>
                            <MaterialCommunityIcons
                                name="calendar-sync-outline"
                                size={22}
                                color={"#ffffff"}
                            />
                            <Text style={styles.subname}>Shifts</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[styles.item,]}
                        onPress={() => router.push("/shifts-holidays/Holidays")}
                    >
                        <View style={styles.subrow}>
                            <MaterialCommunityIcons
                                name="calendar-star-outline"
                                size={22}
                                color={"#ffffff"}
                            />
                            <Text style={styles.subname} >Holidays</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            )}

            <TouchableOpacity
                style={[styles.item, isbiometricSync && styles.activeItem]}
                onPress={() => router.push("/biometric-sync")}
            >
                <MaterialCommunityIcons
                    name="fingerprint"
                    size={22}
                    color={"#ffffff"}
                />

                <Text style={styles.label}>Biometric Sync</Text>
            </TouchableOpacity>
        </DrawerContentScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#0b1f3a",
    },

    headerContainer: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 10,
        marginBottom: 0,
        paddingTop: 12,
        paddingBottom: 12,
    },

    headerTextContainer: {
        flex: 1,
        marginLeft: -10,
        justifyContent: "center"

    },
    logoContainer: {
        alignItems: "center"
    },

    logoImage: {
        width: 200,
        height: 200,
        resizeMode: "contain",
        marginBottom: -70,
        marginLeft: -55,
        marginTop: -55,
        marginRight: -45
    },

    logoTitle: {
        color: "#ffffff",
        fontSize: 16,
        fontWeight: "bold",
        letterSpacing: 0.05,
        marginTop: -5,
    },

    headerSubtitle: {
        color: "#94a3b8",
        fontSize: 16,
        textAlign: "left"
    },

    item: {
        flexDirection: "row",
        alignItems: "center",
        padding: 15,
        gap: 8,
    },

    userContainer: {
         paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: "#334155",
        borderTopWidth: 1,
        borderTopColor: "#334155",
        alignItems: "center",
         gap: 8,

    },

    userText: {
        color: "#ffffff",
        fontSize: 12,
        fontWeight: "500",
        padding: 8,
        borderWidth: 1.5,
        borderRadius: 50,
        borderColor: "#ffffff",


    },

    label: {
        fontSize: 16,
        color: "#ffffff"
    },

    subMenu: {
        paddingLeft: 43,

    },

    subItem: {
        paddingVertical: 10,

    },
    subrow: {
        flexDirection: "row",
        alignItems: "center",
        gap: 8
    },

    subname: {
        color: "#ffffff"
    },

    activeItem: {
        backgroundColor: "#60789793",
        borderWidth: 1,
        borderColor: "#ffffff",
        borderRadius: 40,
        color: "#0b1f3a"
    }
})