import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import validator  from 'validator'

import { useForm } from '../../../hooks/useForm';

import { setError, RemoveError} from '../../../actions/ui';

export const RegisterScreen = () => {

	const dispatch = useDispatch();

	const [formValues, handleInputChange] = useForm({
		name:'User',
		email: 'user@demo.com',
		password: '12345',
		password2:'12345'
	})

	const { name, email, password, password2 } = formValues

	const handleRegister = (e) => {
		e.preventDefault();
		if (isFormValid()) {
			console.log('Formulario correcto')
		}
	}

	//Form Validation
	const isFormValid = ()=>{

		if(name.trim().length === 0 ){
			dispatch( setError('Name required') );
			return false;
		} else if (!validator.isEmail(email)){
			dispatch( setError('This email is invalid') );
			return false;
		}else if (password !== password2 || password.length < 5){
			dispatch( setError('The password must match and be longer than 5 characters.') )
			return false;
		}
		
		dispatch(RemoveError());
		return true
	}

	return (
		<div>

				 <form onSubmit={ handleRegister }>
						 <div className="auth__icon">
							<i className="fas fa-user"></i>
						</div>
                <input 
                    type="text"
                    placeholder="Name"
                    name="name"
                    className="auth__input"
                    autoComplete="off"
                    value={ name }
                    onChange={ handleInputChange }
                />

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

                <input 
                    type="password"
                    placeholder="Confirm password"
                    name="password2"
                    className="auth__input"
                    value={ password2 }
                    onChange={ handleInputChange }
                />


                <button
                    type="submit"
                    className="btn btn-primary btn-lg btn-block mb-5"
                >
                    Register
                </button>

               
				<div className="">
					<Link 
						to="/auth/login"
						className="link"
					>
						Already registered?
					</Link>
				</div>

				<div className="auth__alert-error">
					Hola Mundo
				</div>

            </form>
		</div>
	)
}
