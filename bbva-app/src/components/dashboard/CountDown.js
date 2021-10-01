import React, {useEffect, useState}from 'react'
import { firebase } from '../../api/firebase-config';

let accessDate = firebase.auth().currentUser?.metadata.lastSignInTime
const countDown = new Date(accessDate).getTime();

export const CountDown = ({ timerDays, timerHours, timerMinutes, timerSeconds }) => {

	
	
	return (
			<div className="countdown">
			<ul>
				<li><span id="days">{timerDays}</span>Days</li>
				<li><span id="hours">{timerHours}</span>Hours</li>
				<li><span id="minutes">{timerMinutes}</span>Minutes</li>
				<li><span id="seconds">{timerSeconds}</span>Seconds</li>
			</ul>
			<p id="newUser"></p>

		</div>
		
	)
	};

	CountDown.defaultProps = {
		timerDays: 10,
		timerHours:10,
		timerMinutes:10,
		timerSeconds:10
	};
	