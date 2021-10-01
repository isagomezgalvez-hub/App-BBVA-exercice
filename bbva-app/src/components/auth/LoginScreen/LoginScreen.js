import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import validator from 'validator';

import { useForm } from '../../../hooks/useForm';

import { setError, RemoveError } from '../../../actions/ui';
import { startLogin } from '../../../actions/auth';
import { Link } from 'react-router-dom';


export const LoginScreen = () => {
	const dispatch = useDispatch();
    const { msgError, loading } = useSelector(state => state.ui)

	const [formValues, handleInputChange] = useForm({
		email: '',
		password: ''
	})

	const { email, password } = formValues

	const handleLogin = (e) => {
		e.preventDefault();
        if (isFormValid()) {
		    dispatch(startLogin(email, password))
        }
	}

    //Form Validation
    const isFormValid = () => {

        if (!validator.isEmail(email)) {
            dispatch(setError('This email is invalid'));
            return false;
        } else if (password.length === 0 ) {
            dispatch(setError('You must add a password'))
            return false;
        } else if (password.length < 5){
            dispatch(setError('The password must match and be longer than 5 characters.'))
            return false;
        }

        dispatch(RemoveError());
        return true
    }


	return (
		<div>
				 <form onSubmit={ handleLogin }>
					<div className="auth__icon">
                    <span class="material-icons-outlined md-36">
                        lock
                    </span>
					</div>
                <input 
                    type="text"
                    placeholder="Email"
                    name="email"
                    className="auth__input"
                    autoComplete="off"
                    value={ email }
                    onChange={ handleInputChange }
                />

                <input 
                    type="password"
                    placeholder="Password"
                    name="password"
                    className="auth__input"
                    value={ password }
                    onChange={ handleInputChange }
                />


                <button
                    type="submit"
                    className="btn btn-primary btn-lg btn-block"
                    disabled={loading}
                >
                    Login
                </button>


				<div className="register-link">
					<Link to="/auth/register" className="link">Register</Link> 
				</div>

                {msgError &&
                    <div className="auth__alert-error">
                        {msgError}
                    </div>
                }
			</form>
           
            
		</div>

	)
}
