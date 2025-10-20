import React from 'react';
import { Link } from 'react-router';

function SignIn() {
	return (
		<div className='sign-in__container'>
			<div className='sign-in__greeting'>
				<p>Sign in to your account</p>
				<div>
					<div className='sign-in__reg-label'>New to eBay?</div>
					<Link to='singuppersonal'>
						<button type='button' className='sign-in__reg-btn'>
							Create account
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default SignIn;
