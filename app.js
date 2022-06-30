import { getUser, signOut } from './services/auth-service.js';
import { protectPage } from './utils.js';
import { getAllItems, addItem } from './services/list-service.js';


import createUser from './components/User.js';
import createItemList from './components/ItemList.js';
import createAddItemForm from './components/ListForm.js';

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

// Components 
const User = createUser(
    document.querySelector('#user'),
    { handleSignOut }
);

const ItemList = createItemList(document.querySelector('#shopping-list'));
const AddItemForm = createAddItemForm(document.querySelector('#list-form'), { handleAddItem });

function display() {
    User({ user });
    ItemList({ itemList });
    AddItemForm();
}

handlePageLoad();
