import { client } from './client.js';
import { getUser } from './auth-service.js';

export async function getAllItems() {
    const response = await client
        .from('list')
        .select()
        .order('created_at', { ascending: false });

    return response.data;
}

export async function addItem(item, quantity) {
    const response = await client
        .from('list')
        .insert({
            item,
            quantity,
            bought: false
        })
        .single();

    return response.data;
}

export async function updateItem(item) {
    const response = await client
        .from('list')
        .update(item)
        .match({ id: item.id })
        .single();

    return response;
}

export async function deleteAllItems() {
    const response = await client
        .from('list')
        .delete()
        .match({ user_id: getUser().id });

    return response;
}