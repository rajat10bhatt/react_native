import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import PropTypes from 'prop-types';

const Row = props => (
    <View style={styles.row}>
      <Text>{props.name}</Text>
      <Text>{props .phone}</Text>
    </View>
  )

const styles = StyleSheet.create({
    row: {
        padding: 10,
    },
})

export default Row;

Row.propTypes = {
    name: PropTypes.string,
    phone: PropTypes.string, 
}