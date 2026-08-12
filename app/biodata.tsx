import { StyleSheet, Text, View } from 'react-native';

export default function biodata () {
    return(
        <View style = { style.container}>
            <Text style = { style.title } > Bio data </Text>
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