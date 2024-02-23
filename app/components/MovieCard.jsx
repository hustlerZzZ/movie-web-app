import Image from "next/image";
import React from "react";

export default function MovieCard({ movieData }) {
  const movie = movieData[0];
  console.log(movie, movieData);

  if (movieData.length === 0) return <h3>Error in fetching the movie data</h3>;
  else {
    return (
      <div className="flex gap-4 my-10 p-4 rounded-md bg-white">
        <div>
          <Image
            src={movie.portrait_image}
            height={500}
            width={200}
            alt={`${movie.title}`}
          />
        </div>
        <div>
          <h3>
            {movie.title} ({movie.original_release_year})
          </h3>
          <div className="my-4 flex gap-4">
            {movie.deeplinks.map((el) => (
              <a href={`${el.deeplink}`} key={el.title}>
                <Image
                  src={el.logo}
                  height={50}
                  width={50}
                  alt="logo"
                  className="rounded-md"
                />
              </a>
            ))}
          </div>
          <div>
            {movie.deeplinks[0].pay_type === "paid" ? "💵 Paid" : "💲 Free"}
          </div>
          <div className="flex my-2">
            <h3 className="bg-yellow-300 font-bold text-black px-2 py-1">
              IMDb
            </h3>
            <h3 className="bg-stone-800 text-yellow-500 px-2 py-1">
              {movie.imdb_score} ({movie.imdb_votes})
            </h3>
          </div>
          <div>
            <h2 className="text-orange-600 font-bold text-xl">Genres</h2>
            <p>{movie.genres.join(", ")}</p>
          </div>
          <div>
            <h2 className="text-orange-600 font-bold text-xl">About</h2>
            <p className="w-[500px]">{movie.short_description}</p>
          </div>
        </div>
      </div>
    );
  }
}
