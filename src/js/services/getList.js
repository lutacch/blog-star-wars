export const getList = async (type) => {

    const respuesta = await fetch(`https://www.swapi.tech/api/${type}/`)
    const respuestaJson = await respuesta.json();
    return respuestaJson.results;
}