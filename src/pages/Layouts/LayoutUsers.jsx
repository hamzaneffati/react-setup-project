import { Outlet } from 'react-router-dom';

import HeaderMenu from '../../components/Menu';

const LayoutUsers = () => {
	return (
		<>
			<HeaderMenu />
			<Outlet />
		</>
	);
};

export default LayoutUsers;
