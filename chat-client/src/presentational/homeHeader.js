import React from 'react'
import PropTypes from 'prop-types'
import GoTo from "./goTo";

class HomeHeader extends React.Component {
    render() {
        return <p>
            CHAT
            <GoTo />
            <GoTo />
        </p>
    }
}

HomeHeader.propTypes = {
    nick: PropTypes.string.isRequired
}

export default HomeHeader