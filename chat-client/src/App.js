import React from 'react';
import { Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { history } from './helpers';
import { PrivateRoute } from './smart/privateRoute';
import { HomePage } from './presentational/homePageTest';
import { LoginPage } from './smart/loginPage';
import { alertActions} from "./redux/actions";

class App extends React.Component {
    constructor(props) {
        super(props);

        const { dispatch } = this.props;
        history.listen((location, action) => {
            // clear alert on location change
            dispatch(alertActions.clear());
        });
    }

    render() {
        const { alert } = this.props;
        return (
                        <Router history={history}>
                            <div>
                                <PrivateRoute exact path="/" component={HomePage} />
                                <Route path="/login" component={LoginPage} />
                            </div>
                        </Router>
        );
    }
}

function mapStateToProps(state) {
    const { alert, authentication } = state;
    return {
        alert,
        authentication
    };
}

const connectedApp = connect(mapStateToProps)(App);
export { connectedApp as App };