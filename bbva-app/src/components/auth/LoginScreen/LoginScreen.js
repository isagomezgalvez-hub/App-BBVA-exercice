import React from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from '../../../hooks/useForm';
import { startLogin } from '../../../actions/auth';
import { Link } from 'react-router-dom';


export const LoginScreen = () => {
	const dispatch = useDispatch();

	const [formValues, handleInputChange] = useForm({
		email: 'user@demo.com',
		password: '12345'
	})

	const { email, password } = formValues

	const handleLogin = (e) => {
		e.preventDefault();
		dispatch(startLogin(email, password))
	}


	return (
		<div>
				 <form onSubmit={ handleLogin }>
					<div className="auth__icon">
						<i className="fas fa-lock"></i>
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
                >
                    Login
                </button>


				<div className="register-link">
					<Link to="/auth/register" className="link">Registar</Link> 
				</div>
			</form>
		</div>

	)
}
