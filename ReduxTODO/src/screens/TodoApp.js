import React from 'react'
import { View, StyleSheet } from 'react-native'
import AddTodo from '../containers/AddTodo'
import VisibleTodos from '../containers/VisibleTodos'

const TodoApp = () => {
    return (
        <View style={styles.container}>
            <AddTodo />
            <View style={styles.listView}> 
                <VisibleTodos />
            </View>
        </View>
    )
}

export default TodoApp

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }, 
    listView: {
        flex: 1,
        marginHorizontal: 20,
    }
})