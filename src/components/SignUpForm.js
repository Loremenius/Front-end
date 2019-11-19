import React, {useState, useEffect} from 'react';
import {withFormik, Form, Field} from 'formik';
import * as Yup from 'yup';
import axios from 'axios';


const SignupForms = ({values, errors, touched, status, history}) => {
    const [newUsers, setNewUsers] = useState([]);

    useEffect(() => {
        if( status === true){
            history.push("/");
        }
    }, [status]);

    return (
        <div className="signup-form">
            <h2>Sign Up Today!</h2>
                <Form>
                    <Field 
                        type="text"
                        name="firstname"
                        placeholder="First Name" />
                    {touched.firstname && errors.firstname && (
                        <p className="errors">
                            {errors.firstname}</p>
                        )}
                        <Field 
                        type="text"
                        name="lastname"
                        placeholder="Last Name" />
                    {touched.lastname && errors.lastname && (
                        <p className="errors">
                            {errors.lastname}</p>
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
                    <button type="submit">Sign Up</button>
                    <p className="login">Already a Member? <a href="true">Login Here!</a></p> 
                </Form>
                {newUsers.map(user => (
                    <ul key={user.id}>
                        <li>First Name: {user.firstname}</li>
                        <li>Last Name: {user.lastname}</li>
                        <li>Email: {user.email}</li>
                        <li>Password: {user.password}</li>
                    </ul>
                ))}
            </div>
        )
    }

    const FormikSignupForms = withFormik({
        mapPropsToValues({firstname, lastname, email, password}){
            return {
                firstname: firstname || "",
                lastname: lastname || "",
                email: email || "",
                password: password || ""
            };
        },
        validationSchema: Yup.object().shape({
            firstname: Yup.string().required('Required Field'),
            lastname: Yup.string().required('Required Field'),
            email: Yup.string().required('Required Field'),
            password: Yup.string().required('Required Field')
        }),
        handleSubmit(values, {setStatus}) {
            const newUser = {
                username: values.firstname,
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