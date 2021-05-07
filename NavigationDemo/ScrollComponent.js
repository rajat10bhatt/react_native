import React from 'react'
import { ScrollView } from 'react-native'
import Row from './Row'

const ScrollViewComponent = props => (
    <ScrollView>
        {props.list.map(listItem => (
            <Row {...listItem} />
        ))}
    </ScrollView>
)

export default ScrollViewComponent;