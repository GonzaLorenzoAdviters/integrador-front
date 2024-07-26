export const getData = async (API) =>
{
    try{
        const resp = await fetch(API);

        const data = await resp.json();

        console.log(data)
        return data;
    }
    catch(error)
    {
        console.log(error);
    }
}