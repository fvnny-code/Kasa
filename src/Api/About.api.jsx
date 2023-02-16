import AboutData from '../Data/AboutData.json';

export async function getAboutDataById(id){
    const foundData = AboutData.find((d) => d.id === id);
    return foundData;
}

export async function getAboutDatas (){
    return AboutData;
}