// import { useEffect, useState } from "preact/hooks"; // "https://esm.sh/v128/preact@10.19.6/hooks/src/index.d.ts";
import { computed, effect, signal } from "@preact/signals";

export default function JokePage() {
    // State to store the fetched joke
    const joke = signal<string | undefined>(undefined);

    // Fetch a joke when the component mounts
    effect(() => {
        console.log("fetching joke");
        fetch("/api/jokes")
            .then((response) => response.text())
            .then((text) => {
                joke.value = text;
                console.log("Fetched joke:", text);
            })
            .catch((error) => console.error("Failed to fetch joke:", error));
    });

    const prettifiedJoke = computed(() => joke || "Loading joke...");

    return (
        <div>
            <h1>Welcome to the Joke Page!</h1>
            <p>{prettifiedJoke}</p>
        </div>
    );
}
