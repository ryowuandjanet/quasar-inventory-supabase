import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://wyiaqsgvsxmtvunehsoq.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind5aWFxc2d2c3htdHZ1bmVoc29xIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDU5MzA0MTMsImV4cCI6MTk2MTUwNjQxM30.VmwJ5DhYmPGJuF7cM0uU1MyX4vw9Y914nPpS9tRmOLY'
const supabase = createClient(supabaseUrl, supabaseKey)

console.log('init supabase:', supabase)

export default function useSupabase () {
  return { supabase }
}
