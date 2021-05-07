import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import { connect } from 'react-redux'

const ShoppingCartIcon = (props) => {
  return (
    <View style={{ padding: 5 }}>
      <View style={{
        position: 'absolute',
        height: 30,
        width: 30,
        borderRadius: 15,
        backgroundColor: 'rgba(95,197,123,0.8)',
        right: 15,
        bottom: 15,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 2000,
      }}>
        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20 }}>{props.cartItems.length}</Text>
      </View>
      <Icon onPress={() => props.navigation.navigate('Cart')} name='ios-cart' size={30} />
    </View>
  )
}

const mapStateToProps = state => ({
  cartItems: state
})

export default connect(mapStateToProps)(ShoppingCartIcon);