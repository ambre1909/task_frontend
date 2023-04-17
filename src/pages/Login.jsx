import React, { useEffect, useState } from 'react'
import { useFormik } from "formik"
import * as yup from "yup"
import { Link, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import { userLoginAction } from '../store/users/userActions'
import { ToastContainer, toast } from 'react-toastify';


const Login = () => {
    const navigate = useNavigate()
    const { user, userRegistered, userRegisterError, userLoginError, login } = useSelector(state => state.user)
    const dispatch = useDispatch()
    const [show, setshow] = useState(false)

    useEffect(e => {
        if (user) {
            // navigate('/entry')
        }
    }, [user, userLoginError])


    const formik = useFormik({
        initialValues: {
            email: "john@gmail.com",
            password: "12345678",

        },
        validationSchema: yup.object({
            email: yup
                .string("string is required")
                .required("Please enter your email address")
                .email("Email Must Be Valid"),
            password: yup
                .string("string is required")
                .required("Please Enter Your Password"),
        }),
        onSubmit: (values) => {
            dispatch(userLoginAction(values))
        }
    })
    return <>
        <div class="container mt-4">
            {/* <h1>{JSON.stringify(formik.errors)}</h1> */}
            <div class="row">
                <div class="col-sm-6 offset-sm-3">

                    <div class="card">
                        <div class="card-header text-center">Login</div>
                        <form onSubmit={formik.handleSubmit}>
                            <div class="card-body">
                                <div>
                                    <label for="email" class="form-label"> Email</label>
                                    <input
                                        class="form-control"
                                        id="email"
                                        name='email'
                                        value={formik.values.email}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        className={
                                            formik.errors.email && formik.touched.email
                                                ? "form-control is-invalid"
                                                : "form-control"
                                        }
                                        type="email"
                                        placeholder="Enter email"
                                    />
                                    <div class="valid-feedback">Looks good!</div>
                                    <div class="invalid-feedback">{formik.errors.email}</div>
                                </div>
                                <div class="mt-2">
                                    <label for="password" class="form-label">Password</label>
                                    <div class="input-group mb-3">
                                        <input
                                            type={show ? "text" : "password"}
                                            class="form-control"
                                            id="password"
                                            placeholder="Enter Your Password"
                                            name='password'
                                            value={formik.values.password}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            className={formik.errors.password && formik.touched.password
                                                ? "form-control is-invalid"
                                                : "form-control"
                                            }
                                        />
                                        <button
                                            class="input-group-text"
                                            onClick={e => setshow(!show)}
                                            id="basic-addon1">
                                            {show ?
                                                <i class="bi bi-eye-slash"></i>
                                                :
                                                <i class="bi bi-eye-fill"></i>

                                            }
                                        </button>
                                    </div>

                                    <div class="valid-feedback">Looks good!</div>
                                    <div class="invalid-feedback">Please choose a username.</div>
                                </div>

                                <button type="submit" class="btn btn-primary w-100 mt-3"
                                    disabled={formik.errors.email || formik.errors.password ? true : false}

                                >
                                    Login
                                </button>
                                <p class="text-center mt-3">
                                    Dont Have Account? <Link to="/register">Create Account</Link>
                                </p>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>

    </>
}

export default Login