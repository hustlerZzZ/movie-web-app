"use client";

import { useState } from "react";
import ReactSlider from "react-slider";
import MovieCard from "./components/MovieCard";
import Spinner from "./components/Spinner";

const MIN = 1900;
const MAX = 2024;

export default function Home() {
  const [yearValue, setYearValue] = useState([MIN, MAX]);
  const [ratingValue, setRatingValue] = useState(5);
  const [streamingProviderValue, setStreamingProviderValue] = useState("All");
  const [genreValue, setGenreValue] = useState("All");

  const [movieData, setMovieData] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const [showMovieCard, setShowMovieCard] = useState(false);

  async function getMovieDataHandler() {
    let URL;
    if (streamingProviderValue !== "All" && genreValue !== "All") {
      URL = `https://api.randomgenerate.io/get_movies_metadata?genres=${genreValue}&stream_provider=${streamingProviderValue}&start_year=${yearValue[0]}&end_year=${yearValue[1]}&start_rating=${ratingValue}&end_rating=10`;
    } else if (streamingProviderValue !== "All") {
      URL = `https://api.randomgenerate.io/get_movies_metadata?streaming_provider=${streamingProviderValue}&start_year=${yearValue[0]}&end_year=${yearValue[1]}&start_rating=${ratingValue}&end_rating=10`;
    } else if (genreValue !== "All") {
      URL = `https://api.randomgenerate.io/get_movies_metadata?genres=${genreValue}&start_year=${yearValue[0]}&end_year=${yearValue[1]}&start_rating=${ratingValue}&end_rating=10`;
    } else {
      URL = `https://api.randomgenerate.io/get_movies_metadata?start_year=${yearValue[0]}&end_year=${yearValue[1]}&start_rating=${ratingValue}&end_rating=10`;
    }

    try {
      setIsLoading(true);
      setShowMovieCard(true);

      const response = await fetch(URL);
      const result = await response.json();

      setIsLoading(false);

      setMovieData(result);
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <>
      <div className="bg-[url('https://wallpapercave.com/wp/wp9181088.jpg')] py-12">
        <div className="flex flex-col justify-center bg-white md:w-[800px] mx-auto rounded-md">
          <div className="flex flex-col gap-4 my-8 justify-center mx-auto">
            <h1 className="text-lg md:text-3xl text-center font-semibold">
              Random Movie Generator: 🍿 #1 Movie Picker
            </h1>
            <p className="md:text-xl font-light px-4 text-center mx-auto">
              Have you ever spent more time browsing through endless catalogs of
              films than actually watching a movie? With over{" "}
              <strong>half a million titles</strong> to choose from across
              streaming platforms, selecting what to watch can be an agonizing
              decision paralysis.
            </p>
            <p className="md:text-xl font-light px-4 text-center mx-auto">
              This is where a <strong>random movie generator</strong> comes in
              to save the day.
            </p>
          </div>

          <div className="flex justify-center bg-[#9DB2BF] mb-6 text-white p-4 mx-auto md:w-[700px] rounded">
            <div className="text-black flex flex-col gap-4 justify-center items-center">
              <div className="flex flex-col md:flex-row justify-center items-center gap-3">
                <label htmlFor="streaming">Choose Streaming Provider:</label>
                <select
                  className="border-2 text-black border-orange-600 p-1"
                  value={streamingProviderValue}
                  onChange={(e) => setStreamingProviderValue(e.target.value)}
                >
                  <option value={"All"}>All Stream Providers</option>
                  <option value={"amazon-prime"}>Amazon Prime</option>
                  <option value={"crunchy-roll"}>Crunchy Roll</option>
                  <option value={"disney-plus"}>Disney+</option>
                  <option value={"apple-tv-plus"}>Apple TV+</option>
                  <option value={"fubo-tv"}>Fubo TV</option>
                  <option value={"hbo-max"}>HBO Max</option>
                  <option value={"hule"}>Hulu</option>
                  <option value={"netflix"}>Netflix</option>
                  <option value={"peacock"}>Peacock</option>
                  <option value={"tubi-tv"}>Tubi TV</option>
                  <option value={"vudu"}>Vudu</option>
                </select>
              </div>

              <div className="flex flex-col md:flex-row justify-center items-center gap-3">
                <label>Choose Genre:</label>
                <select
                  className="border-2 border-orange-600 p-1"
                  value={genreValue}
                  onChange={(e) => setGenreValue(e.target.value)}
                >
                  <option value={"All"}>All Genres</option>
                  <option value={"action"}>Action</option>
                  <option value={"animation"}>Animation</option>
                  <option value={"comedy"}>Comedy</option>
                  <option value={"crime"}>Crime</option>
                  <option value={"documentary"}>Documentary</option>
                  <option value={"drama"}>Drama</option>
                  <option value={"fantasy"}>Fantasy</option>
                  <option value={"history"}>History</option>
                  <option value={"horror"}>Horror</option>
                  <option value={"family"}>Family</option>
                  <option value={"music"}>Music</option>
                  <option value={"thriller"}>Thriller</option>
                  <option value={"romance"}>Romance</option>
                  <option value={"sci-fi"}>Sci-Fi</option>
                  <option value={"sport"}>Sport</option>
                  <option value={"war"}>War</option>
                  <option value={"western"}>Western</option>
                  <option value={"european"}>European</option>
                  <option value={"reality"}>Reality</option>
                </select>
              </div>

              <div className="flex flex-col justify-center items-center gap-3">
                <h3>Year Range: {`${yearValue}`}</h3>
                <ReactSlider
                  className="slider"
                  value={yearValue}
                  min={MIN}
                  max={MAX}
                  onChange={setYearValue}
                />
              </div>

              <div className="flex flex-col justify-center items-center gap-3">
                <h3>Minimum Rating [1-10]: {`${ratingValue}`}</h3>
                <ReactSlider
                  className="slider"
                  value={ratingValue}
                  min={1}
                  max={10}
                  onChange={setRatingValue}
                />{" "}
              </div>

              <div className="flex justify-center items-center mb-4">
                <button
                  className="bg-orange-600 py-2 px-4 text-white font-semibold rounded"
                  onClick={getMovieDataHandler}
                >
                  Generate Movie
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showMovieCard && (
        <div className="flex justify-center items-center bg-gradient-to-t from-violet-600 via-violet-600 to-indigo-600">
          {isLoading ? <Spinner /> : <MovieCard movieData={movieData} />}
        </div>
      )}

      <div className="bg-gradient-to-t from-violet-600 via-violet-600 to-indigo-600 py-4 flex flex-col gap-4">
        <div className="bg-white md:w-1/2 p-4 rounded-md mx-auto flex flex-col gap-1 shadow-2xl">
          <h2 className="font-bold text-lg">
            What is a Random Movie Generator?
          </h2>
          <p>
            A random movie generator or picker is an online tool that suggests
            films to watch based on customized filters. Backed by powerful{" "}
            <strong>movie recommendation algorithms</strong> and extensive
            databases, these generators can help you:
          </p>
          <ul className="list-disc list-inside">
            <li>Discover great hidden gems outside mainstream popularity.</li>
            <li>Break out of your usual genre preferences.</li>
            <li>Quickly select a movie without decision fatigue.</li>
          </ul>
          <p>
            So if you&apos;re tired of spending more time looking for a film
            than watching it, a movie generator is the perfect solution.
          </p>
        </div>

        <div className="bg-white md:w-1/2 p-4 rounded-md mx-auto flex flex-col gap-0.5 shadow-2xl">
          <h2 className="font-bold text-lg">
            How Do Random Movie Generators Work?
          </h2>
          <p>
            Random movie generators tap into vast catalogs of films along with
            rich metadata like genres, ratings, release year etc.
          </p>
          <p>
            Sophisticated <strong> AI and machine learning algorithms</strong>{" "}
            then analyze your selections and preferences to generate suggestions
            tailored to your taste.
          </p>
          <p>Many tools also allow selecting filters like:</p>
          <ul className="list-disc list-inside">
            <li>Genre - Comedy, thriller, romance etc</li>
            <li>Decade - 60s, 70s, 80s classics</li>
            <li>Streaming service - Netflix, Prime Video etc</li>
            <li>Ratings - From critically acclaimed to so-bad-they're-good</li>
          </ul>
          <p>
            The algorithm then randomly picks titles matching your criteria.
          </p>
          <p>The more filters you use, the more personalized your results.</p>
        </div>

        <div className="bg-white md:w-1/2 p-4 rounded-md mx-auto flex flex-col gap-0.5 shadow-2xl">
          <h2 className="font-bold text-lg">
            Key Benefits of Using a Random Movie Generator
          </h2>
          <ul>
            <li>
              <h3 className="font-semibold">
                Save Hours of Indecisive Browsing
              </h3>
              <p>
                With catalogs expanding exponentially, choosing a movie is only
                getting tougher. A <strong>random movie selector</strong> tool
                can help you go from browsing to watching in minutes.
              </p>
            </li>
            <li>
              <h3 className="font-semibold">
                Discover New and Unexpected Gems
              </h3>
              <p>
                Letting a <strong>movie recommendation algorithm</strong>{" "}
                surprise you allows stepping out of your comfort zone. You may
                discover a new favorite genre!
              </p>
            </li>
            <li>
              <h3 className="font-semibold">
                Enhanced Movie Nights and Viewing Experiences
              </h3>
              <p>
                Finding that perfect film for your mood and occasion need not be
                frustrating. A movie generator makes the selection seamless.
              </p>
              <p>
                Now that you know what random movie generators are and how they
                work, let's look at some top tools available today.
              </p>
            </li>
          </ul>
        </div>

        <div className="bg-white md:w-1/2 p-4 rounded-md mx-auto flex flex-col gap-1 shadow-2xl">
          <h2 className="font-bold text-lg">
            How to Use a Random Movie Generator for Maximum Impact
          </h2>
          <p>
            Here are some tips to use these tools effectively for movie nights
            or just casual viewing:
          </p>

          <ul>
            <li>
              <h3 className="font-semibold">Select Relevant Filters</h3>
              <p>
                Specify filters like preferred genres, decades, streaming
                services etc. to get suggestions matching your taste.
              </p>
            </li>
            <li>
              <h3 className="font-semibold">Don't Be Too Restrictive</h3>
              <p>
                Leaving some filters broad or random allows the tool to surprise
                you with an unexpected gem!
              </p>
            </li>
            <li>
              <h3 className="font-semibold">Compare Movie Options</h3>
              <p>
                Use provided metadata like IMDb ratings, genre tags, summaries
                etc. to evaluate and pick the perfect title.
              </p>
            </li>
            <li>
              <h3 className="font-semibold">Re-roll for More Suggestions</h3>
              <p>
                If you don't like the initial results, re-generate to get a
                fresh set of recommendations.
              </p>
            </li>
            <li>
              <h3 className="font-semibold">Save Interesting Titles</h3>
              <p>
                Bookmark any intriguing titles to revisit later. Curate your own
                watchlist of hidden gems.
              </p>
              <p>
                So next time you're puzzled over what to watch, let a random
                movie generator pull up some surprising candidates tailored to
                your mood.
              </p>
            </li>
          </ul>
        </div>

        <div className="bg-white md:w-1/2 p-4 rounded-md mx-auto flex flex-col gap-1 shadow-2xl">
          <h2 className="font-bold text-lg">
            How Random Movie Generators Compare to Other Tools
          </h2>
          <p>
            Traditional streaming recommendations rely solely on your viewing
            history. In contrast, random movie generators tap into much wider
            databases to suggest hidden titles you may never find otherwise.
          </p>
          <p>Let's look at some key differences:</p>

          <ul>
            <li>
              <h3 className="font-semibold">Wider Pool of Titles</h3>
              <p>
                Random generators draw from extensive catalogs beyond just one
                streaming service's library for more variety.
              </p>
            </li>
            <li>
              <h3 className="font-semibold">Serendipitous Discoveries</h3>
              <p>
                The algorithms intentionally offer unexpected and even obscure
                suggestions based on your filters favoring surprise over
                predictability.
              </p>
            </li>
            <li>
              <h3 className="font-semibold">Mood-Based Matching</h3>
              <p>
                You can customize filters to match genres to your current mood
                rather than just receiving obvious recommendations based on your
                history.
              </p>
              <p>
                In short, they help you break out of the bubble of your viewing
                habits and discover a more diverse range of movies tailored to
                your preferences.
              </p>
            </li>
          </ul>
        </div>

        <div className="bg-white md:w-1/2 p-4 rounded-md mx-auto flex flex-col gap-1 shadow-2xl">
          <h2 className="font-bold text-lg">
            Final Words on Embracing Random Movie Generators
          </h2>
          <p>
            From cinephiles to casual viewers, everyone faces choice fatigue
            when selecting from ever-growing catalogs. Random movie generators
            provide a welcome solution.
          </p>
          <p>
            By combining the extensive reach of AI with the element of surprise,
            these tools help you discover hidden gems, new genres, and
            ultimately enhanced viewing experiences.
          </p>
          <p>
            So next time you're caught in a browsing loop, let a movie generator
            pick a refreshing new movie for your next watch party! Then sit back
            to uncover a new favorite you may never have considered otherwise.
          </p>
        </div>
      </div>
    </>
  );
}
