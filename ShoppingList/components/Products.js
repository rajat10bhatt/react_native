import React from 'react';
import { Button, View } from 'react-native';

const Products = (props) => {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center"
            }}>
            {props.products.map((item, index) => {
                return (
                    <View key={index} style={{ paddingRight: 20 }}>
                        <Button title={item.name + " - " + item.price} onPress={ () => props.onPress(item)} />
                    </View>
                )
            })}
        </View>
    )
}
export default Products;