import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import EventRegister from './EventRegister';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<div className='App'>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/login' element={<Login />} />
					<Route path='/event' element={<EventRegister />} />
				</Routes>
			</div>
		</QueryClientProvider>
	);
}

export default App;
