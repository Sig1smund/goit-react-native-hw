import { View, Linking, ImageBackground, Keyboard, Text, StyleSheet, TextInput, KeyboardAvoidingView, Platform, Pressable, TouchableWithoutFeedback, Dimensions } from "react-native";
import { useState, useEffect } from "react";
import cover from '../../data/Photo_BG.png';


export default function LoginScreen({login}) {
    const [isKeyboardVisible, setKeyboardVisible] = useState(false);
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const moveIosForm = { marginTop: isKeyboardVisible ? '80%' : '100%' };
    const moveAndroidForm = { marginTop: isKeyboardVisible ? '37%' : '75%' };
    
    const onSubmit = () => {
        const loggedUser = { name: name, password: password }
        login(loggedUser);
        setName('');
        setPassword('');
    }

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

// imageStyle={[s.bkgroundImg, screenHeight, screenWidth]}

    return (
        <View style={s.container}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <ImageBackground style={s.bkgroundImg} source={cover}>
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                        <View
                            style={Platform.OS === 'ios' ? [s.registerFrom, moveIosForm] : [s.registerFrom, moveAndroidForm]}>
                            <View style={s.topTextContainer}>
                                <Text style={s.headerText}>Увійти</Text>
                            </View>
                            {/* <KeyboardAvoidingView behavior={Platform.OS == "ios" ? 'padding' : 'height'}> */}
                            <TextInput placeholder="Адреса електронної пошти" type="email" name='email' style={s.input} value={name} onChangeText={value => setName(value)}/>
                                <TextInput placeholder="Пароль" type="text" name='password' style={s.input} value={password} onChangeText={value => setPassword(value)}/>
                            {/* </KeyboardAvoidingView> */}
                            <Pressable style={s.button} onPress={onSubmit}>
                                <Text style={s.buttonText}>Увійти</Text>
                            </Pressable>
                            <View style={s.bottomTextContainer}>
                                <Text>Немає акаунту? <Text style={{
                                    textDecorationLine: "underline",
                                    textDecorationStyle: "solid",
                                    textDecorationColor: "#000"
                                }} onPress={() => Linking.openURL('')}>Зареєструватися</Text></Text>
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
    },
    bkgroundImg: {
        // position: "absolute",
        resizeMode: 'cover',
        flex: 1,
    },
    registerFrom: {
        flex: 1,
        backgroundColor: "#FFFFFF",
        alignItems: 'center',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingBottom: 0,
    },
    topTextContainer: {
        width: 343,
        height: 36,
        marginTop: 40,
        marginBottom: 35,
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
        marginBottom: 15
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 343,
        height: 51,
        backgroundColor: '#FF6C00',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
        marginBottom: 10,
        marginTop: 30
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
});