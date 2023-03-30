import Header from './Header';
import Footer from './Footer';

const HomeLayout = ({ children }, props) => {
	return (
		<section>
			<Header />
			<div className={props.className}>{children}</div>
			<Footer />
		</section>
	);
};

export default HomeLayout;
