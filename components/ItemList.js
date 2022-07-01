
export default function createItemList(root, { handleBuyItem }) {
    
    return ({ itemList }) => {
        root.innerHTML = '';

        for (const item of itemList) {
            const li = Item(item, { handleBuyItem });
            root.append(li);
        }
    };
}

function Item(item, { handleBuyItem }) {

    const li = document.createElement('li');
    li.classList.add('single-item');

    const ingredient = document.createElement('p');
    ingredient.classList.add('ingredient');
    ingredient.textContent = item.item;

    const quantity = document.createElement('p');
    quantity.classList.add('quantity');
    quantity.textContent = item.quantity;
        
    if (item.bought === true) {
        ingredient.classList.add('toggle');
        quantity.classList.add('toggle');
    }

    li.addEventListener('dblclick', () => {
        handleBuyItem(item);
    });

    li.append(ingredient, quantity);



    return li;
}