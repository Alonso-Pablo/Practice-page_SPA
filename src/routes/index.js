import Header from '../templates/Header';
import Home from '../pages/Home';
import Character from '../pages/Character';
import Error404 from '../pages/Error404';
import getHash from '../utils/getHash';
import resolveRoutes from '../utils/resolveRoutes';


//El valor id puede ser dinamico y depende del personaje en cuestion, asi que lo dejamos asi.
const routes = {
    '/': Home,
    '/:id': Character,
    '/contact': 'contact',
}

// vamos a usar async y await, porque queremos esperar hasta que algo este sucediendo para que prosigamos
const router = async () => {
    // si no se encuentra es null o...
    const header = null || document.getElementById('header');
    const content = null || document.getElementById('content');

    header.innerHTML = await Header();
    let hash = getHash();
    let route = await resolveRoutes(hash);
    // routes es la estructura y route es la que traemos del getHash y luego del resolveRoutes
    // Si routes[route] es un elemento lo muestro en el bloque sino existe la ruta muestro el error 404
    let render = routes[route] ? routes[route] : Error404;
    content.innerHTML = await render();
};

export default router;