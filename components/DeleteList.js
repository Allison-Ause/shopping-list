
export default function createDeleteList(itemList, { handleDeleteAllItems }) {
    console.log('firing component');
    const deleteButton = document.querySelector('#delete-button');
    deleteButton.addEventListener('click', () => {
        handleDeleteAllItems(itemList);
    });


    return () => {
        
    };
}