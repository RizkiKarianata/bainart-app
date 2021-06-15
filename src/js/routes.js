
import HomePage from '../pages/home.f7.html';
import NotFoundPage from '../pages/404.f7.html';

import ProductAllPage from '../pages/product-all.f7.html';
import ProductDetailsPage from '../pages/product-details.f7.html';

var routes = [
{
	path: '/',
	component: HomePage,
},
{
	path: '/product-all/',
	component: ProductAllPage,
},
{
	path: '/product-details/:id/',
	component: ProductDetailsPage,
},
{
	path: '(.*)',
	component: NotFoundPage,
},
];

export default routes;