import './Home.css';
import Lacture from './Components/Lacture';
import Header from './Components/Header';

const lactures = [
	{
		workshopId: '000',
		workshopTitle: 'the mistory of creepy',
		workshopDesc: 'this is a very creepy lecture...',
		workshopMiniDesc: 'shady lecturer to a shady lecture',
		workshopHashtags: ['creep', 'shady', 'strong heart'],
		workshopImage: {
			src: 'https://news.mit.edu/sites/default/files/styles/news_article__image_gallery/public/images/202012/MIT-Coding-Brain-01-press_0.jpg?itok=JKoUflf8',
			alt: 'some ALT...',
		},
		workshopDate: 'DATE',
		workshopTeacher: 'Avi Nahoom',
	},
	{
		workshopId: '001',
		workshopTitle: 'the mistory of creepy',
		workshopDesc: 'this is a very creepy lecture...',
		workshopMiniDesc: 'shady lecturer to a shady lecture',
		workshopHashtags: ['creep', 'shady', 'strong heart'],
		workshopImage: {
			src: 'URL here',
			alt: 'some ALT...',
		},
		workshopDate: 'DATE',
		workshopTeacher: 'Avi Nahoom',
	},
];

const Home = () => {
	return (
		<>
			<Header />
			<div className='home'>
				{lactures.map((lacture) => (
					<>
						<Lacture lacture={lacture} />
						<hr />
					</>
				))}
			</div>
		</>
	);
};

export default Home;
