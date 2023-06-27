import { View, Linking, ImageBackground, Keyboard, Text, StyleSheet, TextInput, KeyboardAvoidingView, Platform, Pressable, TouchableWithoutFeedback, Dimensions } from "react-native";
import { useState, useEffect } from "react";
import { AntDesign } from '@expo/vector-icons';
import cover from '../../data/Photo_BG.png';

export default function RegistrationScreen() {
    const [isKeyboardVisible, setKeyboardVisible] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const moveIosForm = { marginBottom: isKeyboardVisible ? 170 : 0 };
    const moveAndroidForm = { height: isKeyboardVisible ? 370 : 549 };
    const moveAndroidAvatar = { marginVertical: isKeyboardVisible ? -25 : 0 };

    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () =>
            setKeyboardVisible(true)
        );
        const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () =>
            setKeyboardVisible(false)
        );
        return () => {
            keyboardDidShowListener.remove();
            keyboardDidHideListener.remove();
        };
    }, []);

    return (
        <View style={s.container}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <ImageBackground style={s.bkgroundImg} source={cover}>
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                        <View
                            style={Platform.OS === 'ios' ? [s.registerFrom, moveIosForm] : [s.registerFrom, moveAndroidForm]}>
                            <View style={Platform.OS === 'ios' ? [s.photoContainer] : [s.photoContainer, moveAndroidAvatar]}>
                                <View style={s.addPhotoSprite}>
                                    <AntDesign name="pluscircleo" size={24} color="#FF6C00" />
                                </View>
                                {/* <Image/> */}
                            </View>
                            <View style={s.topTextContainer}>
                                <Text style={s.headerText}>Реєстрація</Text>
                            </View>
                            <KeyboardAvoidingView behavior={Platform.OS == "ios" ? 'padding' : 'height'} keyboardVerticalOffset={-200}>
                                <TextInput placeholder="Логін" type="text" name='login' style={s.input} />
                                <TextInput placeholder="Адреса електронної пошти" type="email" name='email' style={s.input} />
                                <TextInput placeholder="Пароль" type="text" name='password' style={s.input} />
                            </KeyboardAvoidingView>
                            <Pressable style={s.button}>
                                <Text style={s.buttonText}>Зареєструватися</Text>
                            </Pressable>
                            <View style={s.bottomTextContainer}>
                                <Text>Вже є аккаунт? <Text style={{
                                    textDecorationLine: "underline",
                                    textDecorationStyle: "solid",
                                    textDecorationColor: "#000"
                                }} onPress={() => Linking.openURL('')}>Увійти</Text></Text>
                            </View>
                        </View>
                    </TouchableWithoutFeedback>
                </ImageBackground>
            </TouchableWithoutFeedback>
        </View>
    );
}

const s = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative',
    },
    bkgroundImg: {
        flex: 1,
        resizeMode: 'cover',
    },
    photoContainer: {
        position: 'absolute',
        marginHorizontal: 0,
        marginVertical: 0,
        top: '-12.5%',
        width: 132,
        height: 132,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        borderBottomLeftRadius: 16,
        borderBottomRightRadius: 16,
        backgroundColor: '#F6F6F6',
    },
    addPhotoSprite: {
        width: 25,
        height: 25,
        position: 'absolute',
        top: '70%',
        right: -12.5,
        borderColor:'#FF6C00',
        backgroundColor: 'transparent',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
    },
    registerFrom: {
        flex: 1,
        backgroundColor: "#FFFFFF",
        width: '100%',
        height: 549,
        alignItems: 'center',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        marginTop: 283,
        position: 'absolute',
        zIndex: 1,
        bottom: 0,
    },
    topTextContainer: {
        width: 343,
        height: 36,
        marginTop: 100,
        marginBottom: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#000000',
        textAlign: 'center',
    },
    input: {
        backgroundColor: '#ececec',
        width: 343,
        height: 50,
        padding: 10,
        marginBottom: 20
    }, 
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 343,
        height: 51,
        backgroundColor: '#FF6C00',
        gap: 12,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
        marginBottom: 20,
        marginTop: 20
    },
    buttonText: {
        fontSize: 16,
        fontFamily: 'Roboto',
        fontWeight: 400,
        lineHeight: 19,
        textAlign: 'center',
        color: '#FFFFFF'
    },
    bottomTextContainer: {
        width: 343,
        height: 36,
        marginBottom: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    bottomText: {
        fontSize: 16,
        fontFamily: 'Roboto',
        fontWeight: 400,
        lineHeight: 19,
        textAlign: 'center',
    },
    // keyboard: {
    //     flex: 1,
    //     justifyContent: 'center',
    //     alignItems: 'center',
    // },
})
    