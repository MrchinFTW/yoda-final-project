import './Home.css';
import Lacture from './Components/Lecture';
import useWorkshop from './Hooks/useWorkshop';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const Home = () => {
	const { data: lectures, isLoading, isError } = useWorkshop();
	if (isError) {
		return <h1>An error has accured</h1>;
	}
	if (isLoading) {
		return (
			<Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
				loading...
				<CircularProgress />
			</Box>
		);
	}
	return (
		<>
			{lectures.map((lecture) => (
				<>
					<Lacture lecture={lecture} key={lecture.workshopId} />
					<hr />
				</>
			))}
		</>
	);
};

export default Home;
