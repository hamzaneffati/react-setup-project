import DashboardAdmin from '../pages/Admin/Dashboard';
import Login from '../pages/Auth/Login';
import Signin from '../pages/Auth/Signin';
import DashboardClubs from '../pages/Clubs/Dashboard';
import Home from '../pages/Home';
import LayoutAdmin from '../pages/Layouts/LayoutAdmin';
import LayoutClubs from '../pages/Layouts/LayoutClubs';
import LayoutHome from '../pages/Layouts/LayoutHome';
import LayoutPlayers from '../pages/Layouts/LayoutPlayers';
import NotFound from '../pages/NotFound';
import DashboardJoueurs from '../pages/Players/Dashboard';

const PUBLIC_BASE_URL = '/';
const PLAYERS_BASE_URL = '/joueur/';
const CLUBS_BASE_URL = '/club/';
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
		path: PLAYERS_BASE_URL,
		element: <LayoutPlayers />,
		children: [{ path: PLAYERS_BASE_URL, element: <DashboardJoueurs /> }]
	},
	{
		path: CLUBS_BASE_URL,
		element: <LayoutClubs />,
		children: [{ path: CLUBS_BASE_URL, element: <DashboardClubs /> }]
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
