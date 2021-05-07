import React from 'react';
import { View } from 'react-native';
import Products from '../components/Products'
import { books } from '../Data'
import { connect } from 'react-redux'
import { addToCart } from '../ActionCreators'

const BooksScreen = (props) => {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center"
            }}>
            <Products products={books} onPress={props.addToCart} />
        </View>
    )
}

const mapDispatchToProps = dispatch => ({
    addToCart: item => dispatch(addToCart(item))
})

export default connect(null, mapDispatchToProps)(BooksScreen);
