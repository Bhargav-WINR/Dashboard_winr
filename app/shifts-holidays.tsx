import { StyleSheet, Text, View } from 'react-native';

export default function shiftholidays () {
    return(
        <View style = { style.container}>
            <Text style = { style.title } > Employees  </Text>
        </View>
    );
}

const style = StyleSheet.create ({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: '200',
    },
});