import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AppContext } from '../AppContext';
import React, { useContext } from 'react';

import { FontAwesome5, AntDesign } from '@expo/vector-icons';

export default function SignInScreen() {
    const { setIsLoggedIn } = useContext(AppContext);
    return (
        <SafeAreaView style={styles.container}>
            
            <Text style={styles.mainTitle}>Sign In</Text>

            <View style={styles.formContainer}>
                
                <Text style={styles.label}>Email ID</Text>
                <TextInput 
                    style={styles.input} 
                    placeholder="Enter your email here!" 
                    placeholderTextColor="#aaa"
                />

                <Text style={styles.label}>Password</Text>
                <TextInput 
                    style={styles.input} 
                    placeholder="Enter your password here!" 
                    placeholderTextColor="#aaa"
                    secureTextEntry={true} // Biến chữ thành dấu chấm đen
                />

                <TouchableOpacity style={styles.forgotBtn}>
                    <Text style={styles.forgotText}>Forgot password?</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.signInBtn} onPress={() => setIsLoggedIn(true)}>
                    <Text style={styles.signInBtnText}>Sign In</Text>
                </TouchableOpacity>

                <Text style={styles.orText}>Or sign in with</Text>

                <View style={styles.socialContainer}>
                    <TouchableOpacity style={[styles.socialBtn, styles.googleBtn]}>
                        <AntDesign name="google" size={20} color="#EA4335" />
                        <Text style={styles.googleText}>Google</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.socialBtn, styles.facebookBtn]}>
                        <FontAwesome5 name="facebook-f" size={20} color="#fff" />
                        <Text style={styles.facebookText}>Facebook</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.footerContainer}>
                    <Text style={styles.footerText}>Not yet a member? </Text>
                    <TouchableOpacity>
                        <Text style={styles.signUpText}>Sign Up</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f9fa', 
    },
    mainTitle: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#222',
        textAlign: 'center',
        marginTop: 60,
        marginBottom: 30,
    },
    formContainer: {
        paddingHorizontal: 25,
    },
    label: {
        fontSize: 14,
        fontWeight: '600',
        color: '#444',
        marginBottom: 8,
        marginTop: 15,
    },
    input: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        height: 50,
        paddingHorizontal: 15,
        fontSize: 15,
    },
    forgotBtn: {
        alignItems: 'flex-end',
        marginTop: 10,
        marginBottom: 20,
    },
    forgotText: {
        color: '#f39c12',
        fontWeight: 'bold',
    },
    signInBtn: {
        backgroundColor: '#f39c12',
        height: 50,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 25,
    },
    signInBtnText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    orText: {
        textAlign: 'center',
        color: '#555',
        fontWeight: '600',
        marginBottom: 20,
    },
    socialContainer: {
        flexDirection: 'row', 
        justifyContent: 'space-between',
    },
    socialBtn: {
        flex: 1, 
        flexDirection: 'row', 
        height: 50,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
    },
    googleBtn: {
        backgroundColor: '#fff',
        borderColor: '#ccc',
        marginRight: 10, 
    },
    googleText: {
        color: '#333',
        fontWeight: 'bold',
        marginLeft: 10,
    },
    facebookBtn: {
        backgroundColor: '#4267B2', 
        borderColor: '#4267B2',
        marginLeft: 10,
    },
    facebookText: {
        color: '#fff',
        fontWeight: 'bold',
        marginLeft: 10,
    },
    footerContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 40,
    },
    footerText: {
        color: '#555',
        fontSize: 14,
    },
    signUpText: {
        color: '#f39c12',
        fontWeight: 'bold',
        fontSize: 14,
    }
});