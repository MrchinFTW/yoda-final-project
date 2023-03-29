import WorkshopHash from './WorkshopHash';
import { Link } from 'react-router-dom';

const Lecture = ({ lecture }) => {
	return (
		<div className='lecture'>
			<div className='imageDiv'>
				<Link to={`/event/${lecture._id}`}>
					<img
						className='lectureImage'
						src={lecture.workshopImage.src}
						alt={lecture.workshopImage.alt}
					/>
				</Link>
			</div>

			<div className='infoDiv'>
				<Link to={`/event/${lecture._id}`}>
					<div className='lectureTitle'>{lecture.workshopTitle}</div>
				</Link>
				<WorkshopHash tags={lecture.workshopHashtags} />
				<div className='workshopMiniDesc'>{lecture.workshopMiniDesc}</div>
				<span className='workshopLecturer'>lecturer: {lecture.workshopTeacher}</span>
			</div>
		</div>
	);
};

export default Lecture;
