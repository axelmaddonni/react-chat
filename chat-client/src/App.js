import React from 'react';
import { Switch, Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { history } from './helpers';
import { PrivateRoute } from './smart/privateRoute';
import HomePage from './presentational/homePage';
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
            <div>
                { alert.message &&
                    <div className={`alert ${alert.type}`}> {alert.message} </div>
                }
                <Router history={history}>
                    <div>
                        <Switch>
                            <Route path="/login" component={LoginPage} />
                            <PrivateRoute path="/" component={HomePage} />
                        </Switch>
                    </div>
                </Router>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { alert } = state;
    return {
        alert
    };
}

const connectedApp = connect(mapStateToProps)(App);
export { connectedApp as App };