import React from 'react'
import { Logout } from '../auth/Logout/Logout'
import { CountDown } from './CountDown'

export const DashboardScreen = () => {
	return (
		
		<div className="dashboard__main">
			<div className="dashboard__box-container">
				<h1 className="dashboard-title ">Welcome!</h1>
					<p className="dashboard__description">Lorem Ipsum dolor amet</p>
					<div>
						<CountDown/>
					</div>

					<Logout/>
			</div>
		</div>
		
	)
}
