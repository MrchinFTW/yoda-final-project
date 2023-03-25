const workshopHash = ({ tags }) => {
	console.log();
	return (
		<div className='workshopHashtags'>
			<span className='hash'>{tags[0]}</span>
			<span className='hash'>{tags[1]}</span>
		</div>
	);
};

export default workshopHash;
