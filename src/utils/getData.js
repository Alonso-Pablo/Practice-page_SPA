
const API = 'https://rickandmortyapi.com/api/character/';

const getData = async (id) => {
    // Si id existe, retorna la url del API y se le concatena el id que recibó
    // Sino trae todos los personajes para el render del home
    const apiURL = id ? `${API}+${id}` : API;
    // Hay que utilizar el fetch dentro de un try and catch como el estandar nos lo dice.
    try {
        const response = await fetch(apiURL);
        // Tenemos que convertir la respuesta del servidor a un objeto json que pueda ser iterable
        const data = await response.json();

        return data;
    } catch (error) {
        console.log('Fetch Error', error.messege)
    };
};

export default getData;