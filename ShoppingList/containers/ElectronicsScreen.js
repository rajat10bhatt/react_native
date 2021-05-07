import React from 'react';
import { View } from 'react-native';
import { electronics } from '../Data'
import Products from '../components/Products'
import { connect } from 'react-redux'
import { addToCart } from '../ActionCreators'

const ElectronicsScreen = (props) => {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center"
            }}>
            <Products products={electronics} onPress={props.addToCart} />
        </View>
    )
}

const mapDispatchToProps = dispatch => ({
    addToCart: item => dispatch(addToCart(item))
})

export default connect(null, mapDispatchToProps)(ElectronicsScreen);