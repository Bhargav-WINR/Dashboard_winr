import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import { useRouter } from "expo-router";
import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function CustomDrawer(props: any) {
    const router = useRouter();

    const [attendanceOpen, setAttendanceOpen] = useState(false);
    const [shiftsOpen, setShiftsOpen] = useState(false);

    return (
        <DrawerContentScrollView {...props} style={styles.container}>
            <TouchableOpacity
                style={styles.item}
                onPress={() => router.push("/")}
            >
                <MaterialCommunityIcons
                    name="view-dashboard"
                    size={22}
                    color={"#ffffff"}
                />

                <Text style={styles.label}>Admin Dashboard</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.item}
                onPress={() => setAttendanceOpen(!attendanceOpen)}
            >
                <MaterialCommunityIcons
                    name="calendar-check"
                    size={22}
                    color={"#ffffff"}
                />

                <Text style={styles.label}>Attendance</Text>
            </TouchableOpacity>

            {attendanceOpen && (
                <View style={styles.subMenu}>
                    <TouchableOpacity
                        style={styles.subItem}
                        onPress={() => router.push("/attendance/daily")}
                    >
                        <Text style={styles.subname}>Daily</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.subItem}
                        onPress={() => router.push("/attendance/monthly")}
                    >
                        <Text style={styles.subname} >Monthly</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.subItem}
                        onPress={() => router.push("/attendance/history")}
                    >
                        <Text style={styles.subname} >History</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.subItem}
                        onPress={() => router.push("/attendance/correction")}
                    >
                        <Text style={styles.subname}>Correction</Text>
                    </TouchableOpacity>
                </View>
            )}

            <TouchableOpacity
                style={styles.item}
                onPress={() => router.push("/employees")}
            >
                <MaterialCommunityIcons
                    name="account-group"
                    size={22}
                    color={"#ffffff"}
                />

                <Text style={styles.label}>Employees</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.item}
                onPress={() => router.push("/biodata")}
            >
                <MaterialCommunityIcons
                    name="file-account"
                    size={22}
                    color={"#ffffff"}
                />

                <Text style={styles.label}>Bio-Data Form</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.item}
                onPress={() => setShiftsOpen(!shiftsOpen)}
            >
                <MaterialCommunityIcons
                    name="calendar-clock"
                    size={22}
                    color={"#ffffff"}
                />

                <Text style={styles.label}>Shifts & Holidays</Text>
            </TouchableOpacity>

            {shiftsOpen && (
                <View style={styles.subMenu}>
                    <TouchableOpacity
                        style={styles.subItem}
                        onPress={() => router.push("/shifts-holidays/Shifts")}
                    >
                        <Text style={styles.subname}>Shifts</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.subItem}
                        onPress={() => router.push("/shifts-holidays/Holidays")}
                    >
                        <Text style={styles.subname} >Holidays</Text>
                    </TouchableOpacity>
                </View>
            )}

            <TouchableOpacity
                style={styles.item}
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

    item: {
        flexDirection: "row",
        alignItems: "center",
        padding: 16,
        gap: 12,
    },

    label: {
        fontSize: 16,
        color: "#ffffff"
    },

    subMenu: {
        paddingLeft: 52,

    },

    subItem: {
        paddingVertical: 10,

    },

    subname: {
        color: "#ffffff"
    }

});