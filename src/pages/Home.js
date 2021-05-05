import getData from '../utils/getData';

const Home = async () => {
    // Como vamos a llamar a una API utilizaremos async y await
    // Tambien no le pasamos un id a la funcion getData porque la utilizamos para ver todos los personajes.
    const characters = await getData();
    // El resultado que nos devuelve estan dentro de characters.results
    // .map() nos permite retornar u nuevo arreglo con la estructura que le pasamos (el template que tenemos)
    // el character.result.map(...) nos va a dar un arreglo separao por comillas. por eso utilizamos .join('')
    // con .join() le decimos que no utilize ninguna forma de separarlo  
    const view = `
    <div class="characters">
        ${characters.results.map(character => `
            <article class="character-item">
                <a href="#/${character.id}/">
                    <img src="${character.image}" alt="${character.name} of Rick and Morty">
                    <h2>${character.name}</h2>
                </a>
            </article>
        `).join('')}
    </div>
    `;
    
    return view;
};

export default Home;