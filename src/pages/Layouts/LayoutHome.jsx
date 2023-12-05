import { Outlet } from 'react-router-dom';

import HeaderMenu from '../../components/Menu';

const LayoutHome = () => {
	return (
		<>
			<HeaderMenu />
			<Outlet />
		</>
	);
};

export default LayoutHome;
