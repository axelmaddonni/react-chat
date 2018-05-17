import React from 'react';
import { connect } from 'react-redux';
import { Switch, Router, Route } from 'react-router-dom';
import HomePage from '../presentational/homePage';
import { history } from '../../../helpers/index';
import { LoginPage } from './loginPage';
import { alertActions} from "../../../redux/actions/index";
import { PrivateRoute } from './privateRoute';

class App extends React.Component {
    constructor(props) {
        super(props);
        const { dispatch } = this.props;
        history.listen((location, action) => {
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