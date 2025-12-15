import React from 'react';
import { Link } from 'react-router';
import './SignIn.css';

function SignIn() {
	const handleSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<div className='sign-in__container'>
			<div className='sign-in__intro'>
				<div className='sign-in__greeting-msg'>Sign in to your account</div>
				<div className='sign-in__reg-msg'>
					<div className='sign-in__reg-label'>New to eBay?</div>
					<Link to='singuppersonal'>
						<button type='button' className='sign-in__create-account-btn-link'>
							Create account
						</button>
					</Link>
				</div>
			</div>
			<form onSubmit={handleSubmit} className='sign-in__form'></form>
		</div>
	);
}

export default SignIn;
