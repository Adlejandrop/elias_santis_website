import {createClient} from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm"


const supabaseUrl = "https://xztrijwapedpwlfoiomv.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh6dHJpandhcGVkcHdsZm9pb212Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1Mjg5MjUyOCwiZXhwIjoyMDY4NDY4NTI4fQ.WwRAZ3JkA6lhy7KvXNqGX7G7p58Vr8RpBrVfCEeoLfw";
const supabase = createClient(supabaseUrl, supabaseKey);

const {data:images, error:images_error} = await supabase
    .from("images")
    .select()

export const getImages = async()=>{

const {data:images, error:images_error} = await supabase
.from("images")
.select()
return {images,images_error}
} 