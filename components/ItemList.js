
export default function createItemList(root) {
    
    return ({ itemList }) => {
        root.innerHTML = '';

        for (const item of itemList) {
            const li = Item({ item });
            root.append(li);
        }
    };
}

function Item({ item }) {
    const div = document.createElement('div');
    div.classList.add('item');

    const ingredient = document.createElement('h3');
    ingredient.textContent = item.item;

    const quantity = document.createElement('p');
    quantity.textContent = item.quantity;

    div.append(ingredient, quantity);

    return div;
}