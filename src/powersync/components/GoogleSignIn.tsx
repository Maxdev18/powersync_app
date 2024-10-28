import React from 'react';
import { GoogleSignin, GoogleSigninButton } from '@react-native-google-signin/google-signin';
import { View, Text } from 'react-native';
import { StyleSheet } from "react-native"

const GoogleSignIn = () => {
    const signIn = async () => {
        GoogleSignin.configure({
            scopes: [],
            webClientId: '309319798725-1a09u36fq3gq5nkff6nopusrl6mhrad9.apps.googleusercontent.com',
            offlineAccess: true
        });

        try {
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            console.log("userinfo", userInfo)
        } catch (error) {
            console.log(error)
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.text}> Sign in With Google Account</Text>
                <GoogleSigninButton
                    style={styles.googlebtn}
                    size={GoogleSigninButton.Size.Wide}
                    color={GoogleSigninButton.Color.Dark}
                    onPress={() => signIn()}
                />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
text: {
        fontWeight: 'bold',
        marginBottom: 20,
        fontSize: 17
    },
googlebtn: {
        width: 192,
        height: 48
    }
})

export default GoogleSignIn;