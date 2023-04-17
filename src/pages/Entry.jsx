import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Entry = () => {
    const { user, userRegistered, userRegisterError, userLoginError, login } = useSelector(state => state.user)

    return <>
        <div class="container">
            <div class="row">
                <div class="col-sm-6 offset-sm-3">
                    {/* <div class="card"> */}
                    <div class="alert alert-primary mt-5">
                        <div class="card-body">Welcome {user && user.email}</div>

                    </div>
                    {/* </div> */}
                </div>
            </div>
        </div>

    </>
}

export default Entry