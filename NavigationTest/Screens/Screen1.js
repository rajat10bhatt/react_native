import React from 'react'
import { View, Button } from 'react-native'
import styles from '../styles'
import { Icon } from 'react-native-vector-icons'

export default function Screen1({ navigation }) {
    return (
        <View style={styles.containerView}>
            <Button style={styles.buttonBlackBorder} title='Go To Screen 2' onPress={() => navigation.navigate('Screen2')} />
            <Icon name='rowing' />
        </View>
    )
}