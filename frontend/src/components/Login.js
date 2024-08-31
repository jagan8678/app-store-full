import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
        },
        validationSchema: Yup.object({
            username: Yup.string().required('Required'),
            password: Yup.string().required('Required'),
        }),
        onSubmit: (values, { setSubmitting, setStatus }) => {
            axios.get('http://localhost:4300/users') // Fetch all users
                .then(response => {
                    const user = response.data.find(user => user.username === values.username && user.password === values.password);
                    if (user) {
                        if (user.role === 'admin') {
                            navigate('/add'); // Navigate to Add page for admin
                        } else {
                            navigate('/list'); // Navigate to List page for regular users
                        }
                    } else {
                        setStatus('error');
                    }
                })
                .catch(error => {
                    console.error("Login error:", error);
                    setStatus('error');
                })
                .finally(() => {
                    setSubmitting(false);
                });
        },
    });


    return (
        <div className='log' style={{backgroundColor:"cadetblue",padding:"50px"}}>
        <div className="container mt-5" >
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <h2 className="card-title text-center">Login</h2>
                            <form onSubmit={formik.handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="username" className="form-label">Username</label>
                                    <input
                                        id="username"
                                        type="text"
                                        className={`form-control ${formik.touched.username && formik.errors.username ? 'is-invalid' : ''}`}
                                        {...formik.getFieldProps('username')}
                                    />
                                    {formik.touched.username && formik.errors.username ? (
                                        <div className="invalid-feedback">{formik.errors.username}</div>
                                    ) : null}
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input
                                        id="password"
                                        type="password"
                                        className={`form-control ${formik.touched.password && formik.errors.password ? 'is-invalid' : ''}`}
                                        {...formik.getFieldProps('password')}
                                    />
                                    {formik.touched.password && formik.errors.password ? (
                                        <div className="invalid-feedback">{formik.errors.password}</div>
                                    ) : null}
                                </div>
                                <button type="submit" className="btn btn-primary w-100 mt-3" disabled={formik.isSubmitting}>
                                    {formik.isSubmitting ? 'Logging in...' : 'Login'}
                                </button>
                                {formik.status === 'success' && <div className="alert alert-success mt-3">Login successful!</div>}
                                {formik.status === 'error' && <div className="alert alert-danger mt-3">Login failed. Please try again.</div>}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}

export default Login;

