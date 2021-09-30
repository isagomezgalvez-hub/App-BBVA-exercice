
import{types} from '../types/types'

export const startLogin = (email,password)=>{
	return (dispatch)=>{
		setTimeout(()=>{

			dispatch( authLogin('Hola',123) )

		},3000);
	}
}


export const authLogin = (uid, displayName) => ({
	type: types.authLogin,
	payload:{
		uid,
		displayName
	}
});