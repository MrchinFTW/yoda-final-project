import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import EventRegister from './EventRegister';
import { QueryClient, QueryClientProvider } from 'react-query';
import WorkshopAdminPage from './Pages/WorkshopAdminPage';
import HomeLayout from './Components/HomeLayout';

const queryClient = new QueryClient();

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<div className='App'>
				<HomeLayout>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/login' element={<Login />} />
						<Route path='/event/:id' element={<EventRegister />} />
						<Route path='/add-event' element={<WorkshopAdminPage />} />
					</Routes>
				</HomeLayout>
			</div>
		</QueryClientProvider>
	);
}

export default App;
