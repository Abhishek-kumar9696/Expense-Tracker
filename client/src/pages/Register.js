// import React, { useState ,useEffect} from 'react';
// import { Form, Input, message } from 'antd';
// import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import Spinner from '../components/Spinner';

// const Register = () => {
//     const navigate = useNavigate();
//     const [loading, setLoading] = useState(false);

//     // Define submitHandler as an async function
//     const submitHandler = async (values) => {
//         try {
//             setLoading(true);
//             await axios.post('/users/register', values);
//             message.success('Registration Successful');
//             setLoading(false);
//             navigate('/login');
//         } catch (error) {
//             setLoading(false);
//             message.error('Something went wrong');
//         }
//     };
// //prevent
// useEffect(() =>{
//     if(localStorage.getItem('user')){
//         navigate('/')
//     }
// },[navigate]);
//     return (
//         <>
//             <div className="register-page">
//                 {loading && <Spinner />}
//                 <Form layout="vertical" onFinish={submitHandler}>
//                     <h1>Register form </h1>
//                     <Form.Item label="Name" name="name">
//                         <Input type="input" />
//                     </Form.Item>
//                     <Form.Item label="Email" name="email">
//                         <Input type="email" />
//                     </Form.Item>
//                     <Form.Item label="Password" name="password">
//                         <Input type="password" />
//                     </Form.Item>
//                     <div className="d-flex justify-content-between">
//                         <Link to="/login">Already Register? Check here to login</Link>
//                         <button className="btn btn-primary" type="submit">Register</button>
//                     </div>
//                 </Form>
//             </div>
//         </>
//     );
// };

// export default Register;


// src/pages/Register.js
import React, { useState, useEffect } from 'react';
import { Form, Input, message } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Spinner from '../components/Spinner';

const Register = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const submitHandler = async (values) => {
        try {
            setLoading(true);
            await axios.post('/api/v1/users/register', values);
            message.success('Registration Successful');
            setLoading(false);
            navigate('/login');
        } catch (error) {
            setLoading(false);
            message.error('Something went wrong');
        }
    };

    useEffect(() => {
        if (localStorage.getItem('user')) {
            navigate('/');
        }
    }, [navigate]);

    return (
        <>
            <div className="register-page">
                {loading && <Spinner />}
                <Form layout="vertical" onFinish={submitHandler}>
                    <h1>Register Form</h1>
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
                        <Link to="/login">Already Registered? Click here to login</Link>
                        <button className="btn btn-primary" type="submit">Register</button>
                    </div>
                </Form>
            </div>
        </>
    );
};

export default Register;
