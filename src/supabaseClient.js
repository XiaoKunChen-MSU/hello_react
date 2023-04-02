import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://gdbxobfaqddydrkmsxkv.supabase.co';

const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdkYnhvYmZhcWRkeWRya21zeGt2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzcwMDA4MTIsImV4cCI6MTk5MjU3NjgxMn0.Sk47vbWhuyToT2Bu9rUHM9GDm73scpZ9rAD9LxULaso';

export const supabase = createClient(supabaseUrl, supabaseKey)