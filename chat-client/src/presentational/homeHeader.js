import React from 'react'
import PropTypes from 'prop-types'
import GoTo from "./goTo";

class HomeHeader extends React.Component {
    render() {
        return <div>
            CHAT
            <GoTo />
            <GoTo />
        </div>
    }
}

HomeHeader.propTypes = {
    nick: PropTypes.string.isRequired
}

export default HomeHeader