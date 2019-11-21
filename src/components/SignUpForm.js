import React, {useState, useEffect} from 'react';
import {withFormik, Form, Field} from 'formik';
import {Link} from 'react-router-dom';
import * as Yup from 'yup';
import axios from 'axios';
import styled from 'styled-components';
import Button from "@material-ui/core/Button";


const SignUpStyles = styled.div`
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


const SignupForms = ({values, errors, touched, status, history}) => {
    const [newUsers, setNewUsers] = useState([]);

    useEffect(() => {
        if( status === true){
            history.push("/");
        }
    }, [status]);

    return (
        <div className="signup-form">
            <StyledTitle>Sign Up Today!</StyledTitle>
            <SignUpStyles>
                <Form>
                    <Field 
                        type="text"
                        name="username"
                        placeholder="Username" />
                    {touched.username && errors.username && (
                        <p className="errors">
                            {errors.username}</p>
                        )}
                    <Field 
                        type="text"
                        name="email"
                        placeholder="Email" />
                    {touched.email && errors.email && (
                        <p className="errors">
                            {errors.email}</p>
                    )}
                    <Field 
                        type="password"
                        name="password"
                        placeholder="Password" />
                    {touched.password && errors.password && (
                        <p className="errors">
                            {errors.password}</p>
                    )} 
                        <Button variant="outlined" type="submit">Sign Up</Button>
                        <p className="login">Already a Member?
                    <Link to="/"> Login Here!</Link></p>
                </Form>
                </SignUpStyles>
                {newUsers.map(user => (
                    <ul key={user.id}>
                        <li>Username: {user.username}</li>
                        <li>Email: {user.email}</li>
                        <li>Password: {user.password}</li>
                    </ul>
                ))}
            </div>
        )
    }

    const FormikSignupForms = withFormik({
        mapPropsToValues({username, email, password}){
            return {
                username: username || "",
                email: email || "",
                password: password || ""
            };
        },
        validationSchema: Yup.object().shape({
            username: Yup.string().required('Required Field'),
            email: Yup.string().required('Required Field'),
            password: Yup.string().required('Required Field')
        }),
        handleSubmit(values, {setStatus}) {
            const newUser = {
                username: values.username,
                primaryemail: values.email,
                password: values.password
            }
            axios
                .post('https://lambdaschool-onelineaday.herokuapp.com/createnewuser', newUser)
                .then(res => {
                    setStatus(true);
                })
                .catch(err => console.log(err.response));
            }
        })(SignupForms);

export default FormikSignupForms;