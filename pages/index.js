import { useEffect, useState } from "react";
import Seo from "../components/Seo";

export default function Home({ results }) {
    return (
        <div className="container">
            <Seo title="Home" />
            {results?.map((movie) => (
                <div className="movie" key={movie.id}>
                    <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
                    <h4>{movie.original_title}</h4>
                </div>
            ))}
            <style jsx>{`
                .container {
                display: grid;
                grid-template-columns: 1fr 1fr;
                padding: 20px;
                gap: 20px;
                text-align: center;
                }
                .movie img {
                max-width: 100%;
                border-radius: 12px;
                transition: transform 0.2s ease-in-out;
                box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
                }
                .movie:hover img {
                transform: scale(1.02) translateY(-10px);
                }
                .movie h4 {
                font-size: 18px;
                text-align: center;
                }
            `}
            </style>
        </div>
    );
}

// ServerSideRendering
// 무조건 getServerSideProps()를 써야함 이 function은 ServerSide에서만 실행됨
export async function getServerSideProps() {
    const { results } = await (await fetch(`http://localhost:3000/api/movies`)).json();
    // object를 return을 하고, 이 object안에는 props라는 key가 들어있고, props key안에는 원하는 데이터를 아무거나 넣을 수 있다
    return {
        props: {
            results,
        },
    };
}