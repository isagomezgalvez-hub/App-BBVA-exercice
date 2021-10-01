import React from 'react'
import { useDispatch } from 'react-redux';


import { CountDown } from './CountDown';
import { startLogout } from '../../actions/auth';

export const DashboardScreen = () => {
	const dispatch = useDispatch()


	const handleLogout = ()=>{
		dispatch(startLogout())
	}


	return (
		
		<div className="dashboard__main">
			<div className="dashboard__box-container">
				<h1 className="dashboard-title ">Welcome!</h1>
					<p className="dashboard__description">Lorem Ipsum dolor amet</p>
					<div>
						<CountDown/>
					</div>

					<button 
						className="btn-primary"
						onClick={handleLogout}
						>
							Logout</button>
			</div>
		</div>
		
	)
}
