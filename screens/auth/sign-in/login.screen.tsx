import { View, Text, ScrollView, Image, TextInput, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import React, { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { signInSchema } from '@/schemas/signIn.schema';
import Button from '@/components/button/button';
import { Formik } from 'formik';
import { Fontisto, Ionicons, SimpleLineIcons } from "@expo/vector-icons";
import { Raleway_700Bold, useFonts } from '@expo-google-fonts/raleway';
import { Nunito_400Regular } from '@expo-google-fonts/nunito';
import { router } from 'expo-router';
import useSignIn from '@/services/auth/useSignIn';

const { width } = Dimensions.get('window');

const LoginScreen = () => {
    const [isPasswordVisible, setPasswordVisible] = useState(false);
    const { mutate: signIn, isPending: isSignInPending } = useSignIn();

    const [fontsLoaded, fontError] = useFonts({
        Raleway_700Bold,
        Nunito_400Regular
    });

    if (!fontsLoaded && !fontError) {
        return null;
    }

    const handleFormSubmit = (values: any) => {
        console.log(values);
        // router.push("/(tabs)")
        signIn(values, {
            onSuccess: () => {
                router.push("/(tabs)")
            }
        })
    }

    return (
        <LinearGradient
            colors={["#d7ebfc", "#fafcfc"]}
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
            <ScrollView contentContainerStyle={{ alignItems: 'center' }}>
                <View className='mt-6 justify-center items-center'>
                    <Image
                        source={require("@/assets/images/auth/sign_in.png")}
                        style={{
                            width: 250,
                            height: 300,
                            resizeMode: 'contain',
                            marginBottom: 10,
                        }}
                    />
                </View>
                <View>
                    <Text style={[styles.titleTxt, { fontFamily: "Raleway_700Bold" }]}>Welcome Back</Text>
                    <Text style={[{ fontFamily: 'Nunito_400Regular' }]} className='text-center mb-4 text-lg'>
                        Sign in to access your account
                    </Text>
                </View>
                <Formik
                    initialValues={{ email: '', password: '' }}
                    validationSchema={signInSchema}
                    onSubmit={(values) => {
                        handleFormSubmit(values)
                    }}
                >
                    {({
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        values,
                        errors,
                        touched,
                    }) => (
                        <View>
                            {/* Email field section */}
                            <View style={{ position: 'relative', justifyContent: 'center', width: width * 0.85 }}>
                                <TextInput
                                    placeholder='john@becodemy.com'
                                    style={styles.input}
                                    value={values.email}
                                    placeholderTextColor={'#d1d1d1'}
                                    onChangeText={handleChange('email')}
                                />
                                <Fontisto name='email' size={20} style={styles.iconStyle} />
                                {touched.email && errors.email && (
                                    <Text style={styles.errorText}>{errors.email}</Text>
                                )}
                            </View>

                            {/* Password field section */}
                            <View style={{ position: 'relative', justifyContent: 'center', width: width * 0.85, marginTop: 20 }}>
                                <TextInput
                                    placeholder='******'
                                    secureTextEntry={!isPasswordVisible}
                                    placeholderTextColor={'#d1d1d1'}
                                    style={styles.input}
                                    value={values.password}
                                    onChangeText={handleChange('password')}
                                />
                                <SimpleLineIcons name='lock' size={20} style={styles.iconStyle} />
                                <TouchableOpacity
                                    style={styles.eyeIconStyle}
                                    onPress={() => setPasswordVisible(!isPasswordVisible)}
                                >
                                    {isPasswordVisible ? (
                                        <Ionicons name="eye-off-outline" size={23} color={"#747474"} />
                                    ) : (
                                        <Ionicons name="eye-outline" size={23} color={"#747474"} />
                                    )}
                                </TouchableOpacity>
                                {touched.password && errors.password && (
                                    <Text style={styles.errorText}>{errors.password}</Text>
                                )}
                            </View>

                            <TouchableOpacity
                                onPress={() => { router.push("/(routes)/forgot-password") }}
                            >
                                <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
                            </TouchableOpacity>

                            {/* Button */}
                            <View className='mt-6 justify-center items-center'>
                                <Button title='Login' onPress={handleSubmit} isPending={isSignInPending} />
                            </View>

                            {/* Sign up link */}
                            <View style={styles.signUpContainer}>
                                <Text>Don't have an account?</Text>
                                <TouchableOpacity onPress={() => { router.push("/(routes)/sign-up") }}>
                                    <Text style={styles.signUpText}>Sign Up</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    )}
                </Formik>
            </ScrollView>
        </LinearGradient>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({
    titleTxt: {
        fontSize: 34,
        color: '#000000',
        textAlign: 'center'
    },
    input: {
        paddingVertical: 12,
        paddingLeft: 40,
        paddingHorizontal: 10,
        borderRadius: 10,
        backgroundColor: '#ffffff',
        fontSize: 18,
        borderWidth: 1,
        borderColor: '#999'
    },
    iconStyle: {
        position: 'absolute',
        left: 10,
        top: 16,
    },
    eyeIconStyle: {
        position: 'absolute',
        right: 10,
        top: 12,
    },
    errorText: {
        color: 'red',
        marginTop: 5,
        textAlign: 'left'
    },
    forgotPasswordText: {
        color: '#999999',
        marginTop: 5
    },
    signUpContainer: {
        flexDirection: 'row',
        gap: 5,
        marginTop: 15,
        alignSelf: 'center'
    },
    signUpText: {
        color: '#2d98fc',
        fontWeight: 'bold'
    }
});
