
import { firebase } from '../api/firebase-config';
import{ types} from '../types/types'

export const startLogin = (email,password)=>{
	return (dispatch)=>{
		setTimeout(()=>{
			dispatch( authLogin('Hola',123) )

		},3000);
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