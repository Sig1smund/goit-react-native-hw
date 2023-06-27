import { Platform, View, StyleSheet, Text } from "react-native"

export default function PostsScreen() {

    const moveIosHeader = { marginTop: 20 };

    return (
        <View style={s.container}>
            <View style={Platform.OS === 'ios' ? [s.header, moveIosHeader] : [s.header]}>
                <Text style={s.headerText}>Публікації</Text>
            </View>
        </View>
    );
}

const s = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flex: 1,
        position: 'absolute',
        height: 88,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderBottomColor: '#ececec',
        borderBottomWidth: 1,
    },
    headerText: {
        fontSize: 17,
        fontWeight: 500,
        textAlign: 'center',
        color: '#212121',
    },
})