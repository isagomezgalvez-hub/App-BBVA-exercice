import React from 'react';
import { Link } from 'react-router-dom';

export const LoginForm = () => {
	return (
		<div>
			<form>
				<div className="auth__icon">
					<i className="fas fa-lock"></i>
				</div>
				<div className="mb-3">
					<input type="email" className="auth__input" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" autoComplete="off"/>
				</div>
				<div className="mb-3">
					<input type="password" className="auth__input" id="exampleInputPassword1" placeholder="Password" />
				</div>
				
	
					<button type="submit" class="btn-primary btn-lg">Log In</button>
				
			
				<div className="register-link">
					{/* <Link to="/auth/register" className="link">Registar</Link> */}
				</div>
			</form>
		</div>
	)
}
