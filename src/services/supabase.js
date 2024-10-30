import { createClient } from "@supabase/supabase-js";

// export const supabaseUrl = "https://dclaevazetcjjkrzczpc.supabase.co";
// const supabaseKey =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRjbGFldmF6ZXRjamprcnpjenBjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODMyOTIzNDQsImV4cCI6MTk5ODg2ODM0NH0.LGg0M-taoHgKtxCzr9owrb09epnPaO_Yfz6xVE54sIY";
export const supabaseUrl = "https://bkjmqjwvltnwyqwbtetn.supabase.co";
const supabaseKey = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJram1xand2bHRud3lxd2J0ZXRuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjM2NDAxNTgsImV4cCI6MjAzOTIxNjE1OH0.u5LkMjL8Vccj9O3S-SWRYAkxOXyRjBKZyX8-EwMRA0U`;
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
