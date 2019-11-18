import React, {useState, useEffect} from 'react';
import {withFormik, Form, Field} from 'formik';



const UserForms = ({values, errors, touched, status}) => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        status && setUsers(users => 
            [...users, status]);
    }, [status]);

    return (
        <div className="user-form">
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
                    type="text"
                    name="password"
                    placeholder="Password" />
                {touched.password && errors.password && (
                    <p className="errors">
                        {errors.password}</p>
                )}/>
            </Form>
        </div>
    )
    
}
export default UserForms;