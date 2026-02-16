import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://idbvgxjvitowbysvpjlk.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlkYnZneGp2aXRvd2J5c3ZwamxrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTYyOTQyNzcsImV4cCI6MjA3MTg3MDI3N30.3vwYJTVnGaDDUIZ6fi3XCLPTYirLY3TlnB5KlZ7tFtk';

export const supabase = createClient(supabaseUrl, supabaseKey, {
  db: {
    schema: 'PartnersApp',
  },
});