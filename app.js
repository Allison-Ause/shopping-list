import { getUser, signOut } from './services/auth-service.js';
import { protectPage } from './utils.js';
import { getAllItems } from './services/list-service.js';


import createUser from './components/User.js';
import createItemList from './components/ItemList.js';
// import createAddItemForm from './components/ListForm.js';

// State
let user = null;
let itemList = [];

// Action Handlers
async function handlePageLoad() {
    user = getUser();
    protectPage(user);

    itemList = await getAllItems();

    console.log(itemList);

    display();
}

async function handleSignOut() {
    signOut();
}

// async function handleAddItem() {
    // await addItem

//     display();
// }

// Components 
const User = createUser(
    document.querySelector('#user'),
    { handleSignOut }
);

const ItemList = createItemList(document.querySelector('#shopping-list'));
// const AddItemForm = createAddItemForm(document.querySelector('#list-form'));

function display() {
    User({ user });
    ItemList({ itemList });
    // AddItemForm();
}

handlePageLoad();
