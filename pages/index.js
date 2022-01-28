import { useEffect, useState } from "react";
import Seo from "../components/Seo";
const API_KEY = "990a32c1c87f1d24fb4483a696aea09c"

export default function Home() {
    const [movies, setMovies] = useState();
    useEffect(() => {
        (async () => {
            const { results } = await (await fetch(
                `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
            )).json();
            setMovies(results);
        })();
    });
    return (
        <>
            <Seo title="Home" />
            {!movies && <h4>Loading...</h4>}
            {movies?.map((movie) => (
                <div key={movie.id}>
                    <h4>{movie.original_title}</h4>
                </div>
            ))}
        </>
    );
}