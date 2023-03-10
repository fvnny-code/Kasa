import AboutItems from '../../Data/AboutItems.json' // json file created with collapses data

export async function getAboutItemsById(id) {
    const foundItems = items.find((i) => i.id === id);
    return foundItems;
}