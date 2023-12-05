import { Outlet } from 'react-router-dom';

import HeaderMenu from '../../components/Menu';

const LayoutAdmin = () => {
	return (
		<>
			<HeaderMenu />
			<Outlet />
		</>
	);
};

export default LayoutAdmin;
