import React, {Component} from 'react';
import "./login.css"

class Login extends Component {
    render() {
        const {loginUser, registerUser} = this.props;
        return (

            <div className={"login"}>
                <input type="text" className={"loginName"} placeholder={"NAME"}/>
                <input type="text" className={"loginPass"} placeholder={"PASSWORD"}/>

                <div className={"loginButtons"}>
                    <input type="button" value={"register"} onClick={registerUser}/>
                    <input type="button" value={"login"}  onClick={loginUser}/>
                </div>


            </div>
        );
    }
}

export default Login;