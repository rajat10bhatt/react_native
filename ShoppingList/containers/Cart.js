import React from 'react';
import { Text, View } from 'react-native';
import Products from '../components/Products';
import { connect } from 'react-redux'
import { removeFromCart } from '../ActionCreators'

const Cart = (props) => {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center"
            }}>
            {(props.cartItems.length > 0) ?
                <Products products={props.cartItems} onPress={props.removeItemFromCart} /> :
                <Text>No items in cart!</Text>
            }
        </View>
    )
}

const mapStateToProps = state => ({
    cartItems: state
})

const mapDispatchToProps = dispatch => ({
    removeItemFromCart: item => dispatch(removeFromCart(item))
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart);