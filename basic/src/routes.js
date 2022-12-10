import CreatPage from './pages/CreatPage';
import EditPage from './pages/EditPage';
import Listpage from './pages/Listpage';
import HomePage from './pages/HomePage';

const routes = [
	{
		path: '/',
		Component: HomePage
	},

	{
		path: '/blogs',
		Component: Listpage
	},

	{
		path: '/blogs/create',
		Component: CreatPage
	},

	{
		path: '/blogs/edit',
		Component: EditPage
	}
];

export default routes;

