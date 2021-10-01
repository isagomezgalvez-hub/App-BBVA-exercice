import React from 'react'
import { firebase } from '../../api/firebase-config';

export const CountDown = () => {
	let lastLogin = firebase.auth().currentUser?.metadata.lastSignInTime;
	
	console.log('Ultimo Login', lastLogin)
	return (
		
			<div className="countdown">
				<ul>
					<li><span id="days">00</span> Days</li>
					<li><span id="hours">00</span> Hours</li>
					<li><span id="minutes">00</span> Minutes</li>
					<li><span id="seconds">00</span> Seconds</li>
				</ul>
				<p id="newUser"></p>
			</div>
	
	) 
}
