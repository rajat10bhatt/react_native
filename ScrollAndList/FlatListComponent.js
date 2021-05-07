import React from 'react'
import { FlatList } from 'react-native'
import Row from './Row'

// const renderItem = obj => <Row {...obj.item}/>
// The same thing can be written as
const renderItem = ({ item }) => <Row name={item.name} phone={item.phone} />

const FlatListComponent = props => (
    <FlatList renderItem={renderItem} data={props.list} />
)

export default FlatListComponent;