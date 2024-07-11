import { serve } from "https://deno.land/std/http/server.ts";

serve((_request: Request) => {
  return new Response("Hello, world!");
});
