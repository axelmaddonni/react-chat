import React from 'react';
import { connect } from 'react-redux';
import { loginActions } from "../redux/actions/index";

class LoginPage extends React.Component {
    constructor(props) {
        super(props);

        // reset login status
        this.props.dispatch(loginActions.logout());

        this.state = {
            user: {
                nick: '',
                age: '',
                city: ''
            },
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const { name, value } = event.target;
        const { user } = this.state;
        this.setState({
            user: {
                ...user,
                [name]: value
            }
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        this.setState({ submitted: true });
        const { user } = this.state;
        const { dispatch } = this.props;
        if (user.nick && user.age && user.city) {
            dispatch(loginActions.login(user));
        }
    }

    render() {
        const { loggingIn } = this.props;
        const { user, submitted } = this.state;
        return (
            <div class="col-md-6 col-md-offset-3">
                <h2 class="form-title"><i className="fa fa-user-circle" aria-hidden="true"></i> Login</h2>
                <form name="form" onSubmit={this.handleSubmit}>
                    <div class={'form-group' + (submitted && !user.nick ? ' has-error' : '')}>
                        <i className="fa fa-angle-double-right" aria-hidden="true"></i> <label htmlFor="nick" class="form-text">Nick</label>
                        <input type="text" class="form-control" name="nick" value={user.nick} onChange={this.handleChange} />
                        {submitted && !user.nick &&
                        <div class="help-block">Nick is required</div>
                        }
                    </div>
                    <div class={'form-group' + (submitted && !user.age ? ' has-error' : '')}>
                        <i className="fa fa-calendar" aria-hidden="true"></i> <label htmlFor="age" class="form-text">Age</label>
                        <input type="text" class="form-control" name="age" value={user.age} onChange={this.handleChange} />
                        {submitted && !user.age &&
                        <div class="help-block">Age is required</div>
                        }
                    </div>
                    <div class={'form-group' + (submitted && !user.city ? ' has-error' : '')}>
                        <i className="fa fa-building" aria-hidden="true"></i> <label htmlFor="city" class="form-text" >City</label>
                        <input type="text" class="form-control" name="city" value={user.city} onChange={this.handleChange} />
                        {submitted && !user.city &&
                        <div class="help-block">City is required</div>
                        }
                    </div>
                    <div class="form-group">
                        <button class="form-button">Login</button>
                        {loggingIn &&
                        <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                        }
                    </div>
                </form>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { loggingIn } = state.authentication;
    return {
        loggingIn
    };
}

const connectedLoginPage = connect(mapStateToProps)(LoginPage);
export { connectedLoginPage as LoginPage };