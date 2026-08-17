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
    const isdaily = pathname === "/attendance/daily"
    const ismonthly = pathname === "/attendance/monthly"
    const ishistory = pathname === "/attendance/history"
    const iscorrection = pathname === "/attendance/correction"
    const isemployees = pathname === "/employees"
    const isbiodata = pathname === "/biodata"
    const isshiftsholidays = pathname.startsWith("/shifts-holidays")
    const isshifts = pathname === "/shifts-holidays/Shifts"
    const isholidays = pathname === "/shifts-holidays/Holidays"
    const isbiometricSync = pathname === "/biometric-sync";


    return (
        <DrawerContentScrollView {...props} style={styles.container}>
            {/* Header with App Logo */}
            <View style={styles.headerContainer}>

                <Image style={styles.logoImage}
                    source={require("../assets/images/adaptive-icon.png")}

                />

                <View style={styles.headerTextContainer}  >
                    <Text style={styles.headerTitle}>WINR</Text>
                    <Text style={styles.headerSubtitle}>Dashboard System</Text>
                </View>

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
                        style={[styles.item, isdaily && styles.activeItem]}
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
                        style={[styles.item, ismonthly && styles.activeItem]}
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
                        style={[styles.item, ishistory && styles.activeItem]}
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
                        style={[styles.item, iscorrection && styles.activeItem]}
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
                        style={[styles.item, isshifts && styles.activeItem]}
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
                        style={[styles.item, isholidays && styles.activeItem]}
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
        justifyContent: "space-between",
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: "rgba(255, 255, 255, 0.15)",
        marginBottom: 10,
    },

    headerTextContainer: {
        flex: 1,
        marginLeft: -10,


    },

    logoImage: {
        width: 200,
        height: 200,
        resizeMode: "contain",
        marginBottom: -70,
        marginLeft: -45,
        marginTop: -55,
        marginRight: -45
    },

    headerTitle: {
        color: "#ffffff",
        fontSize: 18,
        fontWeight: "bold",
        letterSpacing: 0.05,
        marginTop: 15,
    },

    headerSubtitle: {
        color: "#94a3b8",
        fontSize: 9,
        marginTop: 2,
        paddingBottom: 15,
    },

    item: {
        flexDirection: "row",
        alignItems: "center",
        padding: 15,
        gap: 8,
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