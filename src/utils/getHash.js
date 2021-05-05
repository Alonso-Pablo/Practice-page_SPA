// location. es para acceder al elemento del navegador + hash = obtener el hash en el que se encuentre.
// Si solo seria location.hash el resultado seria = #/1/
// Eliminamos los elementos que rodean al numero. .Slice(1) para eliminar el # 
// .toLocaleLowerCase() para convertir todo a minuscula
// .split('/') = Expected output: ['', '1', '']
// con [1] le decimos que en el array anterior nos de el elemento en el indice 1, es decir el numero.
// || '/' = en caso que no encuentre que nos regrese un slash.
const getHash = () =>
    location.hash.slice(1).toLocaleLowerCase().split('/')[1] || '/' // Expected output: ['', '1', '']

export default getHash;