import React, { useEffect } from 'react'
import * as yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { registerUserAction } from '../store/users/userActions';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { ToastContainer, toast } from 'react-toastify';

const Register = () => {
    const { user, userRegistered, userRegisterError, userLoginError, login } = useSelector(state => state.user)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(e => {
        if (userRegistered) {
            // navigate('/calender')
        }

        if (userRegisterError) toast.error("login fail")

    }, [userRegistered, userRegisterError])
    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            email: "",
            address: "",
            country: "",
            gender: "",
            mobile: "",
            password: "",
            confirmPassword: "",
        },
        validationSchema: yup.object({
            firstName: yup.string().min(1, "Minimum one Character Required")
                .required("Please Enter Your First Name"),
            lastName: yup.string().min(1, "Minimum one Character Required")
                .required("Please Enter Your last Name"),
            email: yup
                .string()
                .email("invalid mail")
                .required("Please Enter Your Email "),
            address: yup.string().required("Please Enter Your address"),
            country: yup.string().required("Please Enter Your country"),
            gender: yup.string().required("Please Enter Your gender"),
            mobile: yup
                .string()
                .min(8, "Minimum eight Character Required")
                .max(10, "Max ten Character Required")
                .required("Please Enter Your mobile"),
            password: yup
                .string()
                .min(8, "password length must be greater than 8")
                .required("Please Enter Your Password "),

            confirmPassword: yup
                .string()
                .min(8, "password length must be greater than 8")
                .oneOf([yup.ref("password")], "Password not Match")
                .required("Confirm Password "),
        }),
        onSubmit: (values, e) => {
            dispatch(registerUserAction({
                firstName: values.firstName,
                lastName: values.lastName,
                email: values.email,
                address: values.address,
                country: values.country,
                gender: values.gender,
                mobile: values.mobile,
                password: values.password,
            }))
        },
    })



    return <div class="container mt-4">
        <div class="row">
            <div class="col-sm-6 offset-sm-3">
                {
                    userRegistered && <div class="alert alert-primary">
                        Registered Successfully
                    </div>
                }

                <div class="card">
                    <div class="card-header text-center">Signup</div>
                    <div class="card-body">
                        <form onSubmit={formik.handleSubmit} >
                            <div>
                                <label for="name" class="form-label">First name</label>
                                <input
                                    type="text"
                                    id="name"
                                    placeholder="Enter your name"
                                    value={formik.values.firstName}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    className={
                                        formik.errors.firstName && formik.touched.firstName
                                            ? "form-control is-invalid"
                                            : "form-control"
                                    }
                                    name="firstName"
                                />
                                <div class="valid-feedback">Looks good!</div>
                                <div class="invalid-feedback">{formik.errors.firstName}</div>
                            </div>
                            <div>
                                <label for="name" class="form-label">last Name </label>
                                <input
                                    type="text"
                                    id="name"
                                    placeholder="Enter your lastName"
                                    value={formik.values.lastName}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    className={
                                        formik.errors.lastName && formik.touched.lastName
                                            ? "form-control is-invalid"
                                            : "form-control"
                                    }
                                    name="lastName"
                                />
                                <div class="valid-feedback">Looks good!</div>
                                <div class="invalid-feedback">{formik.errors.lastName}</div>
                            </div>


                            <div class="mt-2">
                                <label for="email" class="form-label"> Email</label>
                                <input
                                    type="text"
                                    class="form-control"
                                    id="email"
                                    placeholder="Enter Your Email"
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    className={
                                        formik.errors.email && formik.touched.email
                                            ? "form-control is-invalid"
                                            : "form-control"
                                    }
                                    name="email"
                                />
                                <div class="valid-feedback">Looks good!</div>
                                <div class="invalid-feedback">{formik.errors.email}</div>
                            </div>
                            <div>
                                <label for="name" class="form-label">address</label>
                                <textarea
                                    type="text"
                                    class="form-control"
                                    id="address"
                                    placeholder="Enter Your address"
                                    name="address"
                                    value={formik.values.address}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    className={
                                        formik.errors.address && formik.touched.address
                                            ? "form-control is-invalid"
                                            : "form-control"
                                    }
                                />
                                <div class="valid-feedback">Looks good!</div>
                                <div class="invalid-feedback">{formik.errors.address}</div>
                            </div>

                            <div>
                                <label for="name" class="form-label">country</label>
                                <input
                                    type="text"
                                    id="name"
                                    placeholder="Enter your country"
                                    value={formik.values.country}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    className={
                                        formik.errors.country && formik.touched.country
                                            ? "form-control is-invalid"
                                            : "form-control"
                                    }
                                    name="country"
                                />
                                <div class="valid-feedback">Looks good!</div>
                                <div class="invalid-feedback">{formik.errors.country}</div>
                            </div>
                            <div>
                                <label for="name" class="form-label">gender</label>
                                <div class="form-check">
                                    <input class="form-check-input"
                                        type="radio" name="gender"
                                        id="flexRadioDefault1"
                                        value="male"
                                        checked={formik.values.gender === 'male'}
                                        onChange={formik.handleChange}
                                    />
                                    <label class="form-check-label" for="flexRadioDefault1" >
                                        Male
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="gender" id="flexRadioDefault2"
                                        value="female"
                                        checked={formik.values.gender === 'female'}
                                        onChange={formik.handleChange}
                                    />
                                    <label class="form-check-label" for="flexRadioDefault2" >
                                        Female
                                    </label>
                                </div>
                                <div class="valid-feedback">Looks good!</div>
                                <div class="invalid-feedback">{formik.errors.gender}</div>
                            </div>
                            <div>
                                <label for="name" class="form-label">mobile</label>
                                <input
                                    type="text"
                                    id="name"
                                    placeholder="Enter your mobile"
                                    value={formik.values.mobile}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    className={
                                        formik.errors.mobile && formik.touched.mobile
                                            ? "form-control is-invalid"
                                            : "form-control"
                                    }
                                    name="mobile"
                                />
                                <div class="valid-feedback">Looks good!</div>
                                <div class="invalid-feedback">{formik.errors.mobile}</div>
                            </div>


                            <div class="mt-2">
                                <label for="password" class="form-label">Password</label>
                                <input
                                    type="text"
                                    class="form-control"
                                    id="password"
                                    placeholder="Enter Your Password"
                                    value={formik.values.password}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    className={
                                        formik.errors.password && formik.touched.password
                                            ? "form-control is-invalid"
                                            : "form-control"
                                    }
                                    name="password"
                                />
                                <div class="valid-feedback">Looks good!</div>
                                <div class="invalid-feedback">{formik.errors.password}</div>
                            </div>
                            <div class="mt-2">
                                <label for="cpassword" class="form-label"
                                >Confirm Password</label
                                >
                                <input
                                    type="text"
                                    class="form-control"
                                    id="cpassword"
                                    placeholder="Confirm Your Password"
                                    value={formik.values.confirmPassword}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    className={
                                        formik.errors.confirmPassword && formik.touched.confirmPassword
                                            ? "form-control is-invalid"
                                            : "form-control"
                                    }
                                    name="confirmPassword"
                                />
                                <div class="valid-feedback">Looks good!</div>
                                <div class="invalid-feedback">{formik.errors.confirmPassword}</div>
                            </div>
                            <button type="submit" class="btn btn-primary w-100 mt-3">
                                Register
                            </button>

                        </form>
                        <p class="text-center mt-3">
                            Already Have Account? <Link to="/login">Login</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div >
    </div >
}

export default Register