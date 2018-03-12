import React, { Component } from 'react';
import {form, Input, Button} from 'mdbreact';


class Login extends Component{

    constructor(props){
        super(props);

    }

    render(){
        return(

            <div>
                <form>
                    <p className="h5 text-center mb-4">Sign up</p>
                    <Input label="Your name" icon="user" group type="email" validate error="wrong" success="right"/>
                    <Input label="Your email" icon="envelope" group type="email" validate error="wrong" success="right"/>
                    <Input label="Your password" icon="lock" group type="password" validate/>
                    <div className="text-center">
                        <Button rounded gradient="aqua">sign up</Button>
                    </div>
                </form>
            </div>

        );
    }

}

export default Login;

                