export const Api = {

    baseUrl: "https://rickandmortyapi.com/api",

    readAllUrl: () => Api.baseUrl + "/character" ,
       
    readByIdUrl: id => Api.baseUrl + "/character/" + id,
    
    
    //GET
    buildApiGetRequest: (url) =>
        fetch(url, {
        method: "GET",
        }),
}