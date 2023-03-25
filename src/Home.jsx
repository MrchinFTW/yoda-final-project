import './Home.css';
import Lacture from './Components/Lecture';
import useWorkshop from './Hooks/useWorkshop';
import HomeLayout from './Components/HomeLayout';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const Home = () => {
	const { data: lectures, isLoading, isError } = useWorkshop();
	if (isError) {
		return <h1>Error</h1>;
	}
	if (isLoading) {
		return (
			<Box sx={{ display: 'flex', justifyContent: 'center' }}>
				<CircularProgress />
			</Box>
		);
	}
	return (
		<HomeLayout abc={'hello'}>
			{lectures.map((lecture) => (
				<>
					<Lacture lecture={lecture} key={lecture.workshopId} />
					<hr />
				</>
			))}
		</HomeLayout>
	);
};

export default Home;
