import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
	return (
		<div className="min-h-screen">
			<Navbar />
			<main className="container mx-auto px-2 py-6">
				{children}
			</main>
			<Footer />
		</div>
	);
};

export default Layout;