import { getUser, signOut } from './services/auth-service.js';
import { protectPage } from './utils.js';
import { getAllItems, addItem, updateItem, deleteAllItems } from './services/list-service.js';

import createUser from './components/User.js';
import createItemList from './components/ItemList.js';
import createAddItemForm from './components/ListForm.js';
import createDeleteList from './components/DeleteList.js';

// State
let user = null;
let itemList = [];

// Action Handlers
async function handlePageLoad() {
    user = getUser();
    protectPage(user);

    itemList = await getAllItems();
    display();
}

async function handleSignOut() {
    signOut();
}

async function handleAddItem(item, quantity) {

    const newItem = await addItem(item, quantity);
    itemList.push(newItem);
    display();
}

async function handleBuyItem(item) {

    item.bought = !item.bought;
    await updateItem(item);
    display();
}

async function handleDeleteAllItems() {

    await deleteAllItems(itemList);
    itemList = [];
    display();
}

// Components 
const User = createUser(
    document.querySelector('#user'),
    { handleSignOut }
);

const ItemList = createItemList(document.querySelector('#shopping-list'), { handleBuyItem });
const AddItemForm = createAddItemForm(document.querySelector('#list-form'), { handleAddItem, handleDeleteAllItems });
const DeleteList = createDeleteList(document.querySelector('#delete-button'), { handleDeleteAllItems });

function display() {
    User({ user });
    ItemList({ itemList });
    AddItemForm();
    DeleteList();
}

handlePageLoad();
