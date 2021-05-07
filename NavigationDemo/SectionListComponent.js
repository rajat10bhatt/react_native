import React from 'react'
import { SectionList, StyleSheet, Text } from 'react-native'
import Row from './Row'
import PropTypes from 'prop-types'

const renderItem = ({ item }) => <Row {...item} />
renderSectionHeader = ({ section }) => <Text style={styles.title}>{section.title}</Text>

const SectionListComponent = props => {
    const contactByLetter = props.list.reduce((obj, contact) => {
        const firstLetter = contact.name[0].toUpperCase()
        return {
            ...obj,
            [firstLetter]: [...(obj[firstLetter] || []), contact] // obj[firstLetter] || []   way to say if the obj[firstLetter] is empty take empty array
        }
    }, {}) // last empty bracket is initial value of the object

    const sections = Object.keys(contactByLetter).sort().map(key => ({
        title: key,
        data: contactByLetter[key],
    }))

    return (
        <SectionList
            renderItem={renderItem}
            renderSectionHeader={renderSectionHeader}
            sections={sections}
        />
    )
}

export default SectionListComponent;

const styles = StyleSheet.create({
    title: {
        padding: 10,
    }
})

SectionListComponent.propTypes = {
    list: PropTypes.array,
}