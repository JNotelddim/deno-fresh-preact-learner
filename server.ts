// import { serve } from "https://deno.land/std/http/server.ts";

Deno.serve((_request: Request) => {
  return new Response("Hello, world!");
});
