import React from 'react'
import { SafeAreaView, TextInput, StyleSheet, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux'
import { addTodo } from '../actions'

const TodoApp = (props) => {
    const [text, setText] = React.useState('')

    const add = (text) => {
        props.dispatch(addTodo(text))
        setText('')
    }
    return (
        <SafeAreaView style={styles.container}>
            <TextInput placeholder='Eg: Create New Video'
                onChangeText={(text) => (setText(text))}
                value={text}
                style={{
                    borderWidth: 1,
                    borderColor: '#f2f2e1',
                    backgroundColor: '#eaeaea',
                    height: 50,
                    flex: 1,
                    padding: 5,
                }} />
            <TouchableOpacity onPress={() => add(text)}>
                <View style={{
                    height: 50,
                    backgroundColor: '#eaeaea',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <Icon size={24} color="red" name="ios-add" />
                </View>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default connect()(TodoApp)

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginHorizontal: 20,
    }
})