import React from 'react';
import { Link } from "react-router-dom";
import SignUp from '../SignUp/index';

function LoginForm(props) {
    return (
        <div className="outerSign">
            <form className="signForm" onSubmit={props.handleSubmit}>
                <div className="innerSign">
                    <h3>Log In</h3>
                    <input
                        onChange={props.handleChange}
                        value={props.username}
                        name="username"
                        type="text"
                        placeholder="Username" />
                    <br />
                    <input
                        onChange={props.handleChange}
                        value={props.password}
                        name="password"
                        type="password"
                        placeholder="Password" />
                    <br />
                    <br />
                    <button type="submit">Submit</button>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <Link to="/signup">Sign Up</Link>
                </div>
            </form>
        </div>
    )
}

export default LoginForm;