import React, { useEffect, useState } from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Redirect
} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { firebase } from '../api/firebase-config';
import { AuthRouter } from './AuthRouter';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { DashboardScreen } from '../components/dashboard/DashboardScreen';
import { authLogin } from '../actions/auth';




export const AppRouter = () => {
	const dispatch = useDispatch();
	const [checking, setChecking] = useState(true);
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	useEffect(() => {
		firebase.auth().onAuthStateChanged((user)=>{
			if(user?.uid){
				dispatch(authLogin(user.uid, user.displayName))
				setIsLoggedIn(true)
			}else{
				setIsLoggedIn(false)
			}

			setChecking(false);
		})
	}, [dispatch, setChecking])

	if(checking){
		return(
			<h1>Loading</h1>
		)
	}

	return (
		<Router>
			<Switch>
				<PublicRoute
					path="/auth"
					component={AuthRouter}
					isAuthenticated={isLoggedIn}
				/>

				<PrivateRoute
					exact
					isAuthenticated={isLoggedIn}
					path="/"
					component={DashboardScreen}
				/>

				<Redirect to="/auth/login" />


			</Switch>
		</Router>
	)
}
