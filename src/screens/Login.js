import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import swal from 'sweetalert';
import {
    Container,
    Col, Form,
    FormGroup, Label, Input,
    Button,
} from 'reactstrap';
import { login } from '../publics/redux/action/user';
import Background from '../assets/image/background.png';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: [],
        };
    }


    render() {
        const Log = () => {
            this.state.user.push({
                email: this.state.email,
                password: this.state.password
            });
            add()
            this.setState((prevState) => ({
                modal: !prevState.modal
            }))
        }
        let add = async () => {
            await this.props.dispatch(login(this.state.user[0]))
                .then(() => {
                    swal({
                        title: "Login",
                        text: "Login Success",
                        icon: "success",
                        button: "OK"
                    }).then(() => {
                        window.location.href = '/menu';
                    })
                })
                .catch(() => {
                    swal({
                        title: "Login Failed",
                        text: "Email Or Password Wrong !!!",
                        icon: "warning",
                        buttons: "OK"
                    })
                })
        }

        return (
            <div style={{ height: '630px', width: '100%', backgroundImage: `url(https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/W7f7SYo/small-trendy-coffee-shop_nvoowznpx__F0000.png)` }}>
                <div style={{ marginLeft: '500px' }}>
                    <h2 style={{ marginLeft: '150px', color: 'white' }}>Login</h2>
                    <Form style={{ marginTop: '20px' }}>
                        <Col>
                            <FormGroup>
                                <Label style={{ marginLeft: '150px', color: 'white' }}>Email</Label>
                                <Input
                                    type="email"
                                    name="email"
                                    style={{ width: '350px' }}
                                    onChange={(e) => this.setState({ email: e.target.value })}
                                    id="exampleEmail"
                                    placeholder="myemail@email.com"
                                />
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup>
                                <Label style={{ marginLeft: '150px', color: 'white' }}>Password</Label>
                                <Input
                                    type="password"
                                    name="password"
                                    style={{ width: '350px' }}
                                    onChange={(e) => this.setState({ password: e.target.value })}
                                    id="examplePassword"
                                    placeholder="*******"
                                />
                            </FormGroup>
                        </Col>
                        <Button class="buttonSave" onClick={Log.bind(this)} style={{ backgroundColor: 'black', marginLeft: "16px", width: '350px' }}>Sign In</Button>
                    </Form>
                </div>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        book: state.book
    };
};
export default connect(mapStateToProps)(Login);
