import React from 'react';
import { Link } from 'react-router-dom';

export const RegisterForm = () => {
	return (
		<div>
			<form>
				<div className="auth__icon">
					<i class="fas fa-user"></i>
				</div>
				<div class="mb-3">
					<input type="email" className="auth__input" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" autoComplete="off"/>
				</div>
				<div class="mb-3">
					<input type="password" className="auth__input" id="exampleInputPassword1" placeholder="Password" />
				</div>
				<div class="mb-3">
					<input type="password" className="auth__input" id="exampleInputPassword1" placeholder="Confirm Password" />
				</div>
			
				<button type="submit" class="btn-primary btn-lg" disabled="true" >Register</button>
				<div className="register-link">
					{/* <Link to="/auth/login" className="link mt-5">Ya tengo una cuenta</Link> */}
				</div>
			</form>
		</div>
	)
}
