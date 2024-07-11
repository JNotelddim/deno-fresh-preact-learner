import { PageProps } from "$fresh/server.ts";

// This is a route
export default function Greet(props: PageProps) {
  return <div>Hello {props.params.name}</div>;
}
