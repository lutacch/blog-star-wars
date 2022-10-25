export const getList = async () => {

    const respuesta = await fetch("https://www.swapi.tech/api/people/")
    const respuestaJson = await respuesta.json();
    return respuestaJson.results;
}