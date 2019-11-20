import React, {useState, useEffect} from 'react';
import {withFormik, Form, Field} from 'formik';
import {Link} from 'react-router-dom';
import * as Yup from 'yup';
import axios from 'axios';
// import { makeStyles } from '@material-ui/styles';
import styled from 'styled-components';

const Button = styled.button`
    // display: inline-block;
    color: white;
    font-size: 1em;
    margin: 1em;
    padding: 0.5em 1em;
    border: 2px solid #717171;
    border-radius: 5px;
    background: #11A2FC;
    width: 200px;
`;
const LoginStyles = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    padding: 20px 0;
    width: 100%;
`;
const StyledTitle = styled.h2`
    font-size: 2rem;
    margin-top: 5%;
`;


const LoginForms = ({values, errors, touched, status})=> {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        status && setUsers(users => 
            [...users, status]);
    }, [status]);

    return (
        
        <div className="login-form">
            <StyledTitle>Login</StyledTitle>
            <LoginStyles>
                <Form>
                    <Field 
                        type="text"
                        name="username"
                        placeholder="UserName" />
                    {touched.username && errors.username && (
                        <p className="errors">{errors.username}</p>
                       )} 
                    <Field
                        type="password"
                        name="password"
                        placeholder="Password" />
                    {touched.password && errors.password && (
                        <p className="errors">
                            {errors.password}</p>
                    )}
                        <Button type="submit">Submit</Button>
                            <p className="signup">Not yet a member? 
                    <Link to="/register"> Signup Now!</Link></p>
                        
                </Form>
                </LoginStyles>
                {users.map(user => (
                    <ul key={user.id}>
                        <li>Username: {user.username}</li>
                        <li>Password: {user.password}</li>
                    </ul>
                ))}
        </div>
       
    )
}
    const FormikLoginForms = withFormik({
        mapPropsToValues({username, password}) {
            return {
                username: username || "",
                password: password || ""
            };
        },
        validationSchema: Yup.object().shape({
            username: Yup.string().required('Required Field'),
            password: Yup.string().required('Required Field')
        }),
        handleSubmit(values, {setStatus}) {
            axios
                .post('', values)
                .then(res => {
                    setStatus(res.data);
                    console.log(res);
                })
                .catch(err => console.log(err.response));
        }
    })(LoginForms);

export default FormikLoginForms;