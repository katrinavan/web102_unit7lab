import { createClient } from '@supabase/supabase-js'

const URL = 'https://vudsdaostxrxvawvyqvz.supabase.co'
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ1ZHNkYW9zdHhyeHZhd3Z5cXZ6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjIyMDY4NDcsImV4cCI6MjA3Nzc4Mjg0N30.LhZPQcbPnFafGJRW1FhmN0bPh6dkRpNGThODpYNXfSg'

export const supabase = createClient(URL, API_KEY)