function Page() {
  return (
    <div className="bg-gradient-to-t from-violet-600 via-violet-600 to-indigo-600 text-white py-10">
      <div>
        <h1 className="font-bold text-lg md:text-3xl py-4 text-center">
          How to Use the Random Movie Generator
        </h1>
      </div>
      <div className="bg-white text-black p-8 rounded-md md:w-[1000px] mx-auto">
        <p>
          The Random Movie Generator is a fun and easy way to discover new
          movies to watch. Here is how to use it:
        </p>

        <div>
          <ul>
            <li>
              <h2>
                <strong>Step 1: Go to the Website</strong>
              </h2>
              <p>
                Go to{" "}
                <a
                  href="https://randommoviepicker.com/"
                  className="underline font-bold"
                >
                  randommoviepicker.com
                </a>{" "}
                in your web browser. The homepage shows the movie picker
                interface.
              </p>
            </li>

            <li>
              <h2>
                <strong>Step 2: Select Filters (Optional)</strong>
              </h2>
              <p>
                Enter your preferences. You can choose to filter by genre,
                streaming service, release date, and more.
              </p>
            </li>

            <li>
              <h2>
                <strong>Step 3: Click Generate</strong>
              </h2>
              <p>
                Once filters are set and number is chosen, click the blue
                Generate button. The tool will instantly suggest random movies
                based on your criteria.
              </p>
            </li>

            <li>
              <h2>
                <strong>Step 4: View Movie Details</strong>
              </h2>
              <p>
                Scroll through the list to see the movie title, poster image,
                release year, IMDb rating, and genre. Click any movie to open
                its IMDb page in a new tab to read reviews and learn more.
              </p>
            </li>

            <li>
              <h2>
                <strong>Step 5: Refine or Start Over</strong>
              </h2>
              <p>
                Don't like the suggestions? Click Generate again or adjust
                filters to try more random movies. When you find one you want to
                watch, click the title and enjoy!
              </p>
              <p>
                So in just a few clicks, you can get great random movie
                recommendations catered to your taste. Have fun exploring and
                discovering new films!
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Page;
