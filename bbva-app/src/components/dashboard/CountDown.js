import React, {useEffect, useState}from 'react'
import { firebase } from '../../api/firebase-config';

let accessDate = firebase.auth().currentUser?.metadata.lastSignInTime
const countDown = new Date(accessDate).getTime();

export const CountDown = () => {
	
	return (
			<div class="countdown">
			<ul>
				<li><span id="days">00</span>Days</li>
				<li><span id="hours">00</span>Hours</li>
				<li><span id="minutes">00</span>Minutes</li>
				<li><span id="seconds">00</span>Seconds</li>
			</ul>
			<p id="newUser"></p>

		</div>
		
	)
	}