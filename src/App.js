import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import EventReginster from './EventRegister';

function App() {
	return (
		<>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/login' element={<Login />} />
				<Route path='/event' element={<EventReginster />} />
			</Routes>
		</>
	);
}

export default App;
