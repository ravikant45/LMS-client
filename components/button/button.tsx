import { ActivityIndicator, Dimensions, StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
type Props = {
    title: string;
    isPending?: boolean,
    onPress: () => void;
}

const Button = (props: Props) => {
    const { width } = Dimensions.get('window');
    return <TouchableOpacity
        activeOpacity={0.7}
        style={{
            width: width * 1 - 100,
            justifyContent: 'center',
            alignItems: 'center',
            height: 45
        }}
        onPress={props.onPress}
        className='bg-blue-500 rounded-md'
    >
        {
            props.isPending ? (
                <ActivityIndicator size={20} color={'#fff'} />
            ) : (
                <Text className='text-white' style={{ fontSize: 18 }}>{props.title}</Text>
            )
        }
    </TouchableOpacity >
}

export default Button;

const styles = StyleSheet.create({})