import Home from './components/Home';
import MyList from './components/MyList'
export const HOME_ROUTE_PATH = '/';
export const MY_LIST = '/my_list';
export const DEFAULT_ROUTE_PATH = HOME_ROUTE_PATH;

const routes = [
    {
        path: HOME_ROUTE_PATH,
        component: Home,
        exact: true,
    },
    {
        path: MY_LIST,
        component: MyList,
        exact: true,
    },
];

export default Object.freeze(routes);
