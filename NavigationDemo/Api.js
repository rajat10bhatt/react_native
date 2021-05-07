const processUser = contact => {
    return ({
        name: `${contact.name.first} ${contact.name.last}`,
        phone: contact.phone
    })
}

const fetchUsers = async () => {
    try {
        const response = await fetch('https://randomuser.me/api/?results=50&nat=us')
        const { results } = await response.json()
        return results.map(processUser)
    } catch (err) {
        console.log(err)
    }
}

export default fetchUsers