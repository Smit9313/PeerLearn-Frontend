import PageWrapper from '../components/layout/PageWrapper';
import Button from '../components/common/Button';

const Dashboard = () => {
	return (
		<PageWrapper
			title="Dashboard"
			subtitle="Welcome back, John"
			breadcrumbs={[{ name: 'Dashboard', path: '/' }]}
			actions={<Button>New Session</Button>}
		>
			{/* Dashboard content */}
		</PageWrapper>
	);
};

export default Dashboard;