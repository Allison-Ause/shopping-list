const SUPABASE_URL = 'https://bhwcxxvatamzhnajzklj.supabase.co';
const SUPABASE_KEY =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJod2N4eHZhdGFtemhuYWp6a2xqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTY1Mzk3ODYsImV4cCI6MTk3MjExNTc4Nn0.N2I9_vuofI5qA-QihgVFkAFBB5ZOHtdJo_f4ShZWcl0';

export const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);


//(uid() = user_id)
// authentication -> policies -> new policy
// delete().neq(‘id’, -1) Is this a work around for delete?

// from the demo: await client.from('shopping').delete().match({ user_id: getUser().id });