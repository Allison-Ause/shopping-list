
export default function createDeleteList(itemList, { handleDeleteAllItems }) {

    const deleteButton = document.querySelector('#delete-button');
    deleteButton.addEventListener('click', () => {
        handleDeleteAllItems(itemList);
    });


    return () => {
        
    };
}