import Headers from '../templates/Headers';
import Home from '../pages/Home';
import Characters from '../pages/Characters';
import Error404 from '../pages/Error404';
import getHash from '../utils/getHash';
import resolveRoutes from '../utils/resolveRoutes';

const routes = {
  '/': Home,
  '/:id': Characters,
  '/contact': 'Contact',
};

const router = async () => {
  // Get html tags and make ir variables in js
  const header = null || document.getElementById('header');
  const content = null || document.getElementById('content');
  
  // Inject Headers() content in <header id="header"></header> 
  header.innerHTML = await Headers();
  
  let hash = getHash();
  let route = await resolveRoutes(hash);
  
  // If theres a route in "routes" return it or throw an error 404 
  let render = routes[route] ? routes[route] : Error404;
  
  // Inject render() content in <section id="content"></section> 
  content.innerHTML = await render();
};

export default router;