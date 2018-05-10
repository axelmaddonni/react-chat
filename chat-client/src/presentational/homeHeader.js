import React from 'react'
import PropTypes from 'prop-types'
import GoToHome from "./goToHome";
import GoToAgenda from "./goToAgenda";

class HomeHeader extends React.Component {
    render() {
        return <p>
            CHAT
            <GoToHome />
            <GoToAgenda />
        </p>
    }
}

HomeHeader.propTypes = {
    nick: PropTypes.string.isRequired
}

export default HomeHeader