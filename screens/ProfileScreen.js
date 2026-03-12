import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { AppContext } from '../AppContext';
import React, { useContext } from 'react';


export default function ProfileScreen() {
    const { setIsLoggedIn } = useContext(AppContext);
    return (
        <SafeAreaView style={styles.container}>
            
            <View style={styles.blueHeader}></View>

            <View style={styles.contentArea}>
                
                <Text style={styles.nameText}>Chien Duong</Text>
                
                <Text style={styles.roleText}>Backend Intern</Text>
                
                <Text style={styles.bioText}>
                    I'm just an intern with no experience yet, but I will try as hard as I can to improve my career
                </Text>
                
                <TouchableOpacity style={styles.buttonStyle} onPress={() => setIsLoggedIn(false)}>
                    <Text style={styles.buttonText}>Sign Out</Text>
                </TouchableOpacity>

            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f6fa', 
    },
    blueHeader: {
        height: 200, 
        backgroundColor: '#2cb9f0', 
    },
    contentArea: {
        flex: 1,
        alignItems: 'center', 
        paddingTop: 50, 
        paddingHorizontal: 40, 
    },
    nameText: {
        fontSize: 28, 
        color: '#555', 
        marginBottom: 10, 
    },
    roleText: {
        fontSize: 16,
        color: '#2cb9f0', 
        marginBottom: 20,
    },
    bioText: {
        fontSize: 14,
        color: '#777', 
        textAlign: 'center', 
        lineHeight: 22, 
        marginBottom: 40, 
    },
    buttonStyle: {
        backgroundColor: '#f39c12', 
        paddingVertical: 12, 
        paddingHorizontal: 30, 
        borderRadius: 8,
    },
    buttonText: {
        color: '#fff', 
        fontWeight: 'bold', 
        fontSize: 16,
    }
});
