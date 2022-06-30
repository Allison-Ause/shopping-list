import { client } from './client.js';

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