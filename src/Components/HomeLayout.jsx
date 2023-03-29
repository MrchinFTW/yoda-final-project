import Header from './Header';

const HomeLayout = ({ children }, props) => {
	return (
		<section>
			<Header />
			<div className={props.className}>{children}</div>
		</section>
	);
};

export default HomeLayout;
