import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Touchable } from 'react-native'
import { connect } from 'react-redux'

const CounterApp = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.contentView}>
                <TouchableOpacity onPress={() => props.increaseCount()}>
                    <Text style={styles.textFont}>Increase</Text>
                </TouchableOpacity>
                <Text style={styles.textFont}>{props.count}</Text>
                <TouchableOpacity onPress={() => props.decreaseCount()}>
                    <Text style={styles.textFont}>Decrease</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const mapStateToProps = (state) => {
    return {
        count: state.count
    }
}

const mapDispatchToProps = (dispatch) => {
     return {
         increaseCount: () => dispatch({type: 'INCREASE_COUNT'}),
         decreaseCount: () => dispatch({type: 'DECREASE_COUNT'}),
     }
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterApp)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    contentView: {
        flexDirection: 'row',
        width: 200,
        justifyContent: 'space-around',
    },
    textFont: {
        fontSize: 20,
    },
})


