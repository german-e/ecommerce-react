export const getData = async (URL) => {
    const res = await fetch(URL);
    const json = await res.json();

    if (json.error){
        throw new Error(json.error);
    }


    console.log('dats retornados: ', json)
    return json;
}