import { View, Text, TextInput, Button, StyleSheet } from 'react-native'
import React, { isValidElement, useEffect, useState } from 'react'
import { useRouter } from 'expo-router';

export default function Login() {

    const router = useRouter();

    const getRandomId = () => Math.floor(Math.random() * 1000);

    const [username, setUsername] = useState('Lucas');
    const [password, setPassword] = useState('Lu032013812321!@##@#!');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [passwordIsValid, setPasswordIsValid] = useState(false);

    useEffect(() => {
      const passwordMeetsCriteria = (pwd: string) => {
        const minLength = pwd.length >= 6;
        const hasLetter = /[a-zA-Z]/.test(pwd);
        const hasNumber = /[0-9]/.test(pwd);
        const hasSpecialChar = /[^a-zA-Z0-9]/.test(pwd);
        return minLength && hasLetter && hasNumber && hasSpecialChar;
      };

      const isValid = passwordMeetsCriteria(password) ; //&& password === confirmPassword
      setPasswordIsValid(isValid);
      
    }, [password, confirmPassword]);

    const handleLogin = () => {
        console.log("Username", username);
        console.log("Password", password);
        console.log("Password", confirmPassword);
        console.log("isValid", passwordIsValid);

        if (passwordIsValid) {
          const randomId: number = getRandomId(); // Gerar um ID aleatório
          router.push(`/tabs/feed?id=${randomId}`);
      }

        setUsername('');
        setPassword('');
        setConfirmPassword('');
    } 

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput style={styles.input} placeholder='Username' value={username} onChangeText={setUsername} />
      <TextInput style={styles.input} placeholder='Password' value={password} onChangeText={setPassword} secureTextEntry />
      {/* <TextInput style={styles.input} placeholder='Confirm Password' value={confirmPassword} onChangeText={setConfirmPassword} secureTextEntry /> */}
        <Button title='Login'  disabled={!passwordIsValid}   onPress={handleLogin} />
    </View>
  );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    input: {
        height: 40,
        width: 300,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 12,
        paddingHorizontal: 8,
        borderRadius: 4,
    },
});