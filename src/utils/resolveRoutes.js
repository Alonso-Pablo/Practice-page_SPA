const resolveRoutes = (route) => {
    if (route.length <= 3) {
        // garantizar que no sea un valor aleatorio
        let validRoute = route === '/' ? route : '/:id';
        return validRoute;
    }
    
    return `/${route}`; // en caso que no entre al if este return nos va a retornar /about
};

export default resolveRoutes;