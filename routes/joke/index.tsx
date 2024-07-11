import { useEffect, useState } from "preact/hooks"; // "https://esm.sh/v128/preact@10.19.6/hooks/src/index.d.ts";

export default function JokePage() {
    // State to store the fetched joke
    const [joke, setJoke] = useState("");

    // Fetch a joke when the component mounts
    useEffect(() => {
        fetch("/api/jokes")
            .then((response) => response.text())
            .then((text) => setJoke(text))
            .catch((error) => console.error("Failed to fetch joke:", error));
    }, []); // Empty dependency array means this effect runs once on mount

    return (
        <div>
            <h1>Welcome to the Joke Page!</h1>
            <p>{joke || "Loading joke..."}</p>
        </div>
    );
}
