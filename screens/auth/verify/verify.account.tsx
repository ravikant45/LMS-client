import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useRef, useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { Raleway_700Bold, useFonts } from '@expo-google-fonts/raleway'
import { Nunito_400Regular } from '@expo-google-fonts/nunito'
import Button from '@/components/button/button'
import useVerifyAccount from '@/services/auth/useVerifyOTP'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { router } from 'expo-router'
type Props = {}

const VerifyAccount = (props: Props) => {
    const { verifyAccount, isVerficationPending } = useVerifyAccount();
    const [code, setCode] = useState(new Array(4).fill(""))
    const inputs = useRef<any>([...Array(4)].map(() => React.createRef()));
    const [fontsLoaded, fontError] = useFonts({
        Raleway_700Bold,
        Nunito_400Regular
    });

    if (!fontsLoaded && !fontError) {
        return null;
    }

    const handleInput = (text: any, index: any) => {
        const newCode = [...code];
        newCode[index] = text;
        setCode(newCode);

        if (text && index < 3) {
            inputs.current[index + 1].current.focus();
        }

        if (text === "" && index > 0) {
            inputs.current[index - 1].current.focus();
        }
    }

    const handleSubmit = async () => {
        const otp = code.join("");
        const activation_token = await AsyncStorage.getItem('activation_token');
        const data = {
            activation_code: otp,
            activation_token
        }
        verifyAccount(data, {
            onSuccess: () => {
                setCode(new Array(4).fill(""))
                router.push('/(routes)/sign-in');
            }
        })
    }

    return <LinearGradient
        colors={["#d7ebfc", "#fafcfc"]}
        style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
    >
        <View className='m-4'>
            <Text style={[styles.titleTxt, { fontFamily: 'Raleway_700Bold' }]}>
                Verify your account!!
            </Text>
            <Text style={[styles.subTxt, { fontFamily: 'Nunito_400Regular' }]}>
                Enter the 4-digit verification code sent to your email address.
                {' '}
            </Text>
        </View>

        {/* Verification code */}
        <View style={styles.inputContainer}>
            {
                code.map((_, index: number) => (
                    <TextInput
                        ref={inputs.current[index]}
                        key={index}
                        keyboardType='number-pad'
                        maxLength={1}
                        autoFocus={index === 0}
                        value={code[index]}
                        onChangeText={text => handleInput(text, index)}
                        style={styles.inputBox}
                    />
                ))
            }
        </View>
        <View className='mt-6 justify-center items-center'>
            <Button title='Verify' onPress={() => handleSubmit()} isPending={isVerficationPending} />
        </View>
    </LinearGradient>
}

export default VerifyAccount;

const styles = StyleSheet.create({
    titleTxt: {
        fontSize: 34,
        color: '#000000',
        textAlign: 'center',
        textTransform: 'capitalize'
    },
    subTxt: {
        fontSize: 18,
        color: '#000000',
        marginVertical: 16,
        textAlign: 'center'
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    inputBox: {
        height: 70,
        width: 70,
        borderWidth: 1,
        borderColor: '#333333',
        borderRadius: 10,
        textAlign: 'center',
        marginHorizontal: 8,
        fontSize: 24,
        backgroundColor: '#ffffff',
        color: '#000000'
    }
})