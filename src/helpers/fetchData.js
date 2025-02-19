
// Separo la lógica de fetchear la data
// esto va en ItemList

import data from '../data/data.json';

const fetchData = () => {

    return new Promise((resolve, reject) => {

        resolve(data);
        reject("No se pudo conectar con la BDD");

    })

}

export default fetchData;