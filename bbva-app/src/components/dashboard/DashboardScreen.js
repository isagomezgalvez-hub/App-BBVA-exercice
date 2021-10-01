import React, { useState, useEffect} from 'react'
import { useDispatch } from 'react-redux';
import { firebase } from '../../api/firebase-config';

import { CountDown } from './CountDown';
import { startLogout } from '../../actions/auth';

export const DashboardScreen = () => {
	const dispatch = useDispatch()


	const [timerDays, setTimerDays] = useState()
	const [timerHours, setTimerHours] = useState()
	const [timerMinutes, setTimerMinutes] = useState()
	const [timerSeconds, setTimerSeconds] = useState()

	// Date lastLogin
	let loginAccessDate = firebase.auth().currentUser?.metadata.lastSignInTime
	let countDownLogin = new Date(loginAccessDate).getTime();

	const handleLogout = ()=>{
		dispatch(startLogout())
	}


	let interval;

	const startTimer=()=>{
		
		const countDownDate = new Date(countDownLogin).getTime();

		interval = setInterval(()=>{
			const now = new Date().getTime();
			
			const distance = now - countDownDate;

			const second = 1000,
				minute = second * 60,
				hour = minute * 60,
				day = hour * 24;

			const days = Math.floor((distance / (day)));
			const hours = Math.floor((distance % (day)) / (hour));
			const minutes = Math.floor((distance % (hour)) / (minute));
			const seconds = Math.floor((distance % (minute)) / second);


			if (distance <= 0){
				//Stop timer
				clearInterval(interval.current)
			}else{
				//Update the timer
				setTimerDays(days)
				setTimerHours(hours)
				setTimerMinutes(minutes)
				setTimerSeconds(seconds)
			}
		})
	}

	useEffect(() => {
		startTimer()
	}, [])

	return (
		
		<div className="dashboard__main">
			<div className="dashboard__box-container">
				<h1 className="dashboard-title ">Welcome!</h1>
					<p className="dashboard__description">The last time you accessed was</p>
					<div>
						<CountDown 
							timerDays={timerDays} 
							timerHours={timerHours}
							timerMinutes={timerMinutes}
							timerSeconds={timerSeconds}
						/>
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
