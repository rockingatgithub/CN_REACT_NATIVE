import { useState } from 'react'
import { View, Text, StyleSheet, TextInput, Pressable } from 'react-native'

const UserForm = props => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const setNameHandler = value => {
        setName(value)
    }

    const setEmailHandler = value => {
        setEmail(value)
    }

    const setPasswordHandler = value => {
        setPassword(value)
    }

    const signupHandler = async () => {
        const response = await fetch('http://localhost:8000', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name,
                email,
                password
            })
        })

        const parsedResponse = await response.json()
        console.log("The response", parsedResponse)
    }

    return (
        <View style={styles.userform} >
            <Text> Signup Form </Text>
            <View style={styles.inputBox} >

                <TextInput style={styles.input} placeholder='Enter your name' value={name} onChangeText={setNameHandler} />
                <TextInput style={styles.input} placeholder='Enter your email' value={email} onChangeText={setEmailHandler} />
                <TextInput style={styles.input} placeholder='Enter your password' value={password} onChangeText={setPasswordHandler} />

                <Pressable style={styles.button} onPress={signupHandler}  >
                    <Text  >
                        Sign up
                    </Text>
                </Pressable>


            </View>
        </View>
    )

}

const styles = StyleSheet.create({

    userform: {

        width: '50%',
        backgroundColor: '#dae3eb',
        height: '90vh',
        borderRadius: 16

    },

    inputBox: {
        alignItems: 'center'
    },

    input: {

        height: 40,
        border: '1px solid grey',
        borderRadius: 8

    },

    button: {

        height: 40,
        margin: 8,
        width: 100,
        backgroundColor: 'whitesmoke',
        borderRadius: 8,
        textAlign: 'center',

    }

})

export default UserForm