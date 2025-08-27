import { createClient } from '@supabase/supabase-js'

// 👇 Replace with your real values from Supabase
const supabaseUrl = "https://jzezhmsqzqanolpwjgec.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp6ZXpobXNxenFhbm9scHdqZ2VjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTYyNTI3NTUsImV4cCI6MjA3MTgyODc1NX0.D2bczK_7TbbgoQaPKjo7K2YuS4ySb5nvOpm2EF9ZTP0"

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
