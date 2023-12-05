import DashboardAdmin from '../pages/Admin/Dashboard';
import Login from '../pages/Auth/Login';
import Signin from '../pages/Auth/Signin';
import Home from '../pages/Home';
import LayoutAdmin from '../pages/Layouts/LayoutAdmin';
import LayoutHome from '../pages/Layouts/LayoutHome';
import LayoutUsers from '../pages/Layouts/LayoutUsers';
import NotFound from '../pages/NotFound';
import DashboardUsers from '../pages/Users/Dashboard';

const PUBLIC_BASE_URL = '/';
const USERS_BASE_URL = '/user/';
const ADMIN_BASE_URL = '/admin/';
export const routes = [
	{
		path: PUBLIC_BASE_URL,
		element: <LayoutHome />,
		children: [
			{ path: PUBLIC_BASE_URL, element: <Home /> },
			{
				path: `${PUBLIC_BASE_URL}login`,
				element: <Login />
			},
			{ path: `${PUBLIC_BASE_URL}signin`, element: <Signin /> }
		]
	},
	{
		path: USERS_BASE_URL,
		element: <LayoutUsers />,
		children: [{ path: USERS_BASE_URL, element: <DashboardUsers /> }]
	},
	{
		path: ADMIN_BASE_URL,
		element: <LayoutAdmin />,
		children: [{ path: ADMIN_BASE_URL, element: <DashboardAdmin /> }]
	},
	{
		path: '*',
		element: <NotFound />
	}
];
