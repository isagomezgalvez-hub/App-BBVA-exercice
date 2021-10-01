import Swal from 'sweetalert2';

import { firebase } from '../api/firebase-config';
import{ types} from '../types/types'
import { startLoading, finishLoading } from './ui';


export const startLogin = (email,password)=>{
	return (dispatch)=>{
		dispatch(startLoading())

		firebase.auth().signInWithEmailAndPassword(email, password)
			.then(({ user }) => {
				dispatch(authLogin(user.uid, user.displayName))
				dispatch(finishLoading())
			}).catch((error)=>{
				console.error(error)
				dispatch(finishLoading())
				Swal.fire('Error', error.message, 'error');
			})
	}
}


export const startRegister = (email, password, name) => {
	return (dispatch) => {
		firebase.auth().createUserWithEmailAndPassword(email,password)
		.then( async({user})=>{
			await user.updateProfile({displayName: name})
			dispatch(
				authLogin(user.uid, user.displayName)
			)
		}).catch((error)=>{
			console.error(error)
			Swal.fire('Error', error.message, 'error');
		})
	}
}



export const authLogin = (uid, displayName) => ({
	type: types.authLogin,
	payload:{
		uid,
		displayName
	}
});


export const startLogout = () => {
		return async (dispatch) =>{
			await firebase.auth().signOut()
			dispatch(logout())
		}
		
};

export const logout = () => ({
		type: types.authLogout
})


