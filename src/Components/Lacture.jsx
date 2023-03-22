const Lacture = ({ lacture }) => {
	// function hashtags(hashs) {
	// 	hashs.forEach((hash) => {

	//     });
	// }

	console.log(lacture);
	return (
		<div
			className='lacture'
			onClick={() => {
				console.log('click');
			}}
		>
			<div className='imageDiv'>
				<img
					className='lactureImage'
					src={lacture.workshopImage.src}
					alt={lacture.workshopImage.alt}
				/>
				<span>lacturer: {lacture.workshopTeacher}</span>
			</div>

			<div>
				<h1 className='lactureTitle'>{lacture.workshopTitle}</h1>
				<h4>{lacture.workshopHashtags}</h4>
				<span>{lacture.workshopMiniDesc}</span>
			</div>
		</div>
	);
};

export default Lacture;
