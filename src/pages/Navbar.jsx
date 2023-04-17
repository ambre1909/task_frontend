import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from '../store/users/userSlice'

const Navbar = () => {
    const { user, userRegistered, userRegisterError, userLoginError, login } = useSelector(state => state.user)
    const dispatch = useDispatch()
    return <>
        <nav class="navbar navbar-expand-lg bg-light">
            <div class="container-fluid">
                <Link class="navbar-brand" to="/">Navbar</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="dropdown">
                    <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" >
                        {user && user.name}
                    </button>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li>
                            {/* <button type="button" onClick={e => dispatch(logout())} class="btn btn-light w-100">Log Out</button> */}
                        </li>

                    </ul>
                </div>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        {
                            user ? <>
                                <Link class="nav-link" to="/calender">Calender</Link>
                                <Link class="nav-link active" to="/">Home</Link>
                                <Link class="nav-link" to="/register">Register</Link>
                                <Link class="nav-link" to="/login">Login</Link>

                            </>

                                : <>
                                    <Link class="nav-link" to="/register">Register</Link>
                                    <Link class="nav-link" to="/login">Login</Link>
                                </>
                        }

                    </div>
                </div>

            </div>
        </nav>
    </>
}

export default Navbar