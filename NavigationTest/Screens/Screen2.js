import React, { useEffect } from 'react'
import { View, Button, Alert } from 'react-native'
import styles from '../styles'

export default function Screen2({ navigation }) {
    useEffect(
        () =>
            navigation.addListener('beforeRemove', (e) => {
                // Prevent default behavior of leaving the screen
                e.preventDefault();

                // Prompt the user before leaving the screen
                Alert.alert(
                    'Discard changes?',
                    'You have unsaved changes. Are you sure to discard them and leave the screen?',
                    [
                        { text: "Don't leave", style: 'cancel', onPress: () => { } },
                        {
                            text: 'Discard',
                            style: 'destructive',
                            // If the user confirmed, then we dispatch the action we blocked earlier
                            // This will continue the action that had triggered the removal of the screen
                            onPress: () => navigation.dispatch(e.data.action),
                        },
                    ]
                );
            }),
        [navigation]
    );
    return (
        <View style={styles.containerView}>
            <Button style={styles.buttonBlackBorder} title='Go to Dashboard' onPress={() => navigation.navigate('Drawer')} />
        </View>
    )
}