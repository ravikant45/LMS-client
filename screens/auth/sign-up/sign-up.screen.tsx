import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, Dimensions } from 'react-native';
import React, { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { Formik } from 'formik';
import Button from '@/components/button/button';
import { AntDesign, Fontisto, Ionicons, SimpleLineIcons } from "@expo/vector-icons";
import { Raleway_700Bold, useFonts } from '@expo-google-fonts/raleway';
import { Nunito_400Regular } from '@expo-google-fonts/nunito';
import { router } from 'expo-router';
import { signUpSchema } from '@/schemas/signUp.schema';
import useSignUp from '@/services/auth/useSignUp';

const { width } = Dimensions.get('window');


const getResponsiveIconSize = (size: number) => {
    return Math.min(size, size * (width / 375));
};

const SignUpScreen = () => {
    const { signUp, isSignUpPending } = useSignUp();
    const [isPasswordVisible, setPasswordVisible] = useState(false);

    const [fontsLoaded, fontError] = useFonts({
        Raleway_700Bold,
        Nunito_400Regular
    });

    if (!fontsLoaded && !fontError) {
        return null;
    }


    const handleSubmit = (values: { name: string, email: string, password: string }, { resetForm }: { resetForm: () => void }) => {
        signUp(values, {
            onSuccess: () => {
                resetForm();
                router.push("/(routes)/verify-account")
            }
        })
    }

    return (
        <LinearGradient
            colors={["#d7ebfc", "#fafcfc"]}
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
            <ScrollView>
                <View style={styles.imageContainer}>
                    <Image
                        source={require("@/assets/images/auth/sign_in.png")}
                        style={styles.image}
                    />
                </View>
                <View style={styles.textContainer}>
                    <Text style={[styles.titleTxt, { fontFamily: "Raleway_700Bold" }]}>Let's get started!</Text>
                    <Text style={[styles.subTitle, { fontFamily: 'Nunito_400Regular' }]}>Create an account to Becodemy to get all features</Text>
                </View>

                <Formik
                    initialValues={{ name: '', email: '', password: '' }}
                    validationSchema={signUpSchema}
                    onSubmit={(values, { resetForm }) => handleSubmit(values, { resetForm })}

                >
                    {({
                        handleChange,
                        handleSubmit,
                        values,
                        errors,
                        touched,
                    }) => (
                        <View>
                            {/* Name Field */}
                            <View style={styles.inputContainer}>
                                <TextInput
                                    style={styles.input}
                                    placeholder='David Malan'
                                    placeholderTextColor='#d1d1d1'
                                    value={values.name}
                                    onChangeText={handleChange('name')}
                                />
                                <AntDesign
                                    name='user'
                                    size={getResponsiveIconSize(20)}
                                    style={styles.icon}
                                />
                                {touched.name && errors.name && <Text style={styles.errorText}>{errors.name}</Text>}
                            </View>

                            {/* Email Field */}
                            <View style={[styles.inputContainer, { marginTop: 16 }]}>
                                <TextInput
                                    style={styles.input}
                                    placeholder='john@becodemy.com'
                                    placeholderTextColor='#d1d1d1'
                                    value={values.email}
                                    onChangeText={handleChange('email')}
                                />
                                <Fontisto
                                    name='email'
                                    size={getResponsiveIconSize(20)}
                                    style={styles.icon}
                                />
                                {touched.email && errors.email && <Text style={styles.errorText}>{errors.email}</Text>}
                            </View>

                            {/* Password Field */}
                            <View style={[styles.inputContainer, { marginTop: 16 }]}>
                                <TextInput
                                    style={styles.input}
                                    placeholder='******'
                                    placeholderTextColor='#d1d1d1'
                                    secureTextEntry={!isPasswordVisible}
                                    value={values.password}
                                    onChangeText={handleChange('password')}
                                />
                                <SimpleLineIcons
                                    name='lock'
                                    size={getResponsiveIconSize(20)}
                                    style={styles.icon}
                                />
                                <TouchableOpacity
                                    style={styles.eyeIcon}
                                    onPress={() => setPasswordVisible(!isPasswordVisible)}
                                >
                                    {isPasswordVisible ? (
                                        <Ionicons
                                            name="eye-off-outline"
                                            size={getResponsiveIconSize(23)}
                                            color={"#747474"}
                                        />
                                    ) : (
                                        <Ionicons
                                            name="eye-outline"
                                            size={getResponsiveIconSize(23)}
                                            color={"#747474"}
                                        />
                                    )}
                                </TouchableOpacity>
                                {touched.password && errors.password && <Text style={styles.errorText}>{errors.password}</Text>}
                            </View>

                            {/* Sign Up Button */}
                            <View style={styles.buttonContainer}>
                                <Button title='Sign Up' isPending={isSignUpPending} onPress={handleSubmit} />
                            </View>

                            {/* Already have an account? */}
                            <View style={styles.signInContainer}>
                                <Text>Already have an account?</Text>
                                <TouchableOpacity onPress={() => router.push("/(routes)/sign-in")}>
                                    <Text style={styles.signInText}>Sign In</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    )}
                </Formik>
            </ScrollView>
        </LinearGradient >
    );
};

export default SignUpScreen;

const styles = StyleSheet.create({
    imageContainer: {
        marginTop: 24,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 250,
        height: 300,
        resizeMode: 'contain',
        marginBottom: 10,
    },
    textContainer: {
        paddingHorizontal: 16,
    },
    titleTxt: {
        fontSize: 34,
        color: '#000000',
        textAlign: 'center',
    },
    subTitle: {
        textAlign: 'center',
        marginBottom: 16,
        fontSize: 18,
    },
    inputContainer: {
        position: 'relative',
        justifyContent: 'center',
        width: '85%',
        alignSelf: 'center',
    },
    input: {
        paddingVertical: 12,
        paddingLeft: 40,
        borderRadius: 10,
        backgroundColor: '#ffffff',
        fontSize: 18,
        borderWidth: 1,
        borderColor: '#999',
    },
    icon: {
        position: 'absolute',
        left: 8,
        top: 16,
    },
    eyeIcon: {
        position: 'absolute',
        right: 14,
        top: 14,
    },
    errorText: {
        color: 'red',
        fontSize: 14,
        marginTop: 4,
        marginLeft: 8,
    },
    buttonContainer: {
        marginTop: 24,
        justifyContent: 'center',
        alignItems: 'center',
    },
    signInContainer: {
        flexDirection: 'row',
        marginTop: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },
    signInText: {
        color: '#2d98fc',
        fontWeight: 'bold',
        marginLeft: 4,
    },
});
