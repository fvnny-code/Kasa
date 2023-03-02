import products from "../Data/accommodations.json";


export async function getAccommodationById(id){

    const foundProduct = products.find((p) => p.id === id);
    return foundProduct;


}
export async function getAccommodations (){
return products;
}