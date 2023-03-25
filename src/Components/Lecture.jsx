import WorkshopHash from './WorkshopHash';

const Lecture = ({ lecture }) => {
	return (
		<div
			className='lecture'
			onClick={() => {
				console.log('click');
			}}
		>
			<div className='imageDiv'>
				<img
					className='lectureImage'
					src={lecture.workshopImage.src}
					alt={lecture.workshopImage.alt}
				/>
			</div>

			<div className='infoDiv'>
				<div className='lectureTitle'>{lecture.workshopTitle}</div>
				<WorkshopHash tags={lecture.workshopHashtags} />
				<span className='workshopMiniDesc'>{lecture.workshopMiniDesc}</span>
				<span className='workshopLecturer'>lecturer: {lecture.workshopTeacher}</span>
			</div>
		</div>
	);
};

export default Lecture;
