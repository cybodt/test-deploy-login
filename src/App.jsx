import { Routes, Route } from 'react-router';
import './App.css';
import SignIn from './components/SignIn';
import SignUpPersonal from './components/SignUpPersonal';

function App() {
	return (
		<Routes>
			<Route path='/' element={<SignIn />} />
			<Route path='signuppersonal' element={<SignUpPersonal />} />
		</Routes>
	);
}

export default App;
