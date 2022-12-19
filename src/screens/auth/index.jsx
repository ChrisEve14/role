import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { View, Text, KeyboardAvoidingView, TextInput, Button, TouchableOpacity } from 'react-native';
import { isAndroid } from '../../utils/functions/index';
import { COLORS } from '../../constants/themes/colors';
import { styles } from './styles';
import { signUp, signIn } from '../../store/actions/auth.action';

const Auth = ({ navigation }) => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [ isLogin, setIsLogin ] = useState(true);
    const title =  isLogin ? 'Login' : 'Register';
    const message = isLogin ? "Don't you have an account?" : 'Do you already have an account?';
    const messageAction = isLogin ? 'Login' : 'Register';


    const onHandlerSubmit = () => {
        dispatch(isLogin ? signIn(email, password) : signUp(email, password));
    };

    return (
        <KeyboardAvoidingView style={styles.keyboardContainer} behavior={isAndroid ? 'height' : 'padding'} enabled >
            <View style={styles.container}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.label}>Email</Text>
                <TextInput 
                style={styles.input} 
                placeholder="Enter your email"
                placeholderTextColor={COLORS.gray}
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                value={email}
                onChangeText={(text) => setEmail(text)}
                />
                <Text style={styles.label}>Password</Text>
                <TextInput 
                style={styles.input} 
                placeholder="Enter your password"
                placeholderTextColor={COLORS.gray}
                secureTextEntry={true}
                autoCapitalize="none"
                autoCorrect={false}
                value={password}
                onChangeText={(text) => setPassword(text)}
                />
                <Button 
                color={COLORS.icons} 
                title={messageAction} 
                onPress={onHandlerSubmit}
                disabled={!email ||!password}
                />
                <View style={styles.prompt}>
                    <TouchableOpacity style={styles.promptButton} onPress={() => setIsLogin (!isLogin)} >
                        <Text style={styles.promptText}>{message}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </KeyboardAvoidingView>
    );
};

export default Auth;