import { StyleSheet, Text, View } from 'react-native';

export default function biometric () {
    return(
        <View style = { style.container}>
            <Text style = { style.title } > Biometric-Sync </Text>
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