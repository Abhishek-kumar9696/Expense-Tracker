import React, { useState ,useEffect} from 'react';
import { Form, Input, message } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Spinner from '../components/Spinner';

const Login = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    // Define submitHandler as an async function
    const submitHandler = async (values) => {
        try {
            setLoading(true);
            const { data } = await axios.post('api/v1/users/login', values);
            setLoading(false);
            message.success('Login success');
            localStorage.setItem('user', JSON.stringify({ ...data.user, password: '' }));
            navigate('/');
        } catch (error) {
            setLoading(false);
            message.error('Something went wrong');
        }
    };
    //prevent
useEffect(() =>{
    if(localStorage.getItem('user')){
        navigate('/')
    }
},[navigate]);

    return (
        <>
            <div className="register-page">
                {loading && <Spinner />}
                <Form layout="vertical" onFinish={submitHandler}>
                    <h1>Login form </h1>
                    <Form.Item label="Name" name="name">
                        <Input type="input" />
                    </Form.Item>
                    <Form.Item label="Email" name="email">
                        <Input type="email" />
                    </Form.Item>
                    <Form.Item label="Password" name="password">
                        <Input type="password" />
                    </Form.Item>
                    <div className="d-flex justify-content-between">
                        <Link to="/register">Not a user ? Check here to login</Link>
                        <button className="btn btn-primary" type="submit">Login</button>
                    </div>
                </Form>
            </div>
        </>
    );
};

export default Login;
