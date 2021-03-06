import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import validator  from 'validator';

import { useForm } from '../../../hooks/useForm';

import { setError, RemoveError} from '../../../actions/ui';
import { startRegister } from '../../../actions/auth';

export const RegisterScreen = () => {

	const dispatch = useDispatch();
	const {msgError} = useSelector(state => state.ui)

	const [formValues, handleInputChange] = useForm({
		name:'',
		email: '',
		password: '',
		password2:''
	})

	const { name, email, password, password2 } = formValues

	const handleRegister = (e) => {
		e.preventDefault();
		if (isFormValid()) {
			dispatch(startRegister(email, password, name))
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
					<span class="material-icons-outlined md-36">
								person
							</span>
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

               
				<div className="register-link">
					<Link 
						to="/auth/login"
						className="link"
					>
						Already registered?
					</Link>
				</div>
				{ msgError &&
					<div className="auth__alert-error">
						{msgError}
					</div>

				}
				

            </form>
		</div>
	)
}
