import router from './routes/index';

// Escucha y acciona cuando la pagina se carga 
window.addEventListener('load', router);

// Añadimos un eventlistener para cuando cambie nuestro hash
window.addEventListener('hashchange', router);