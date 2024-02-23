function Page() {
  return (
    <div className="bg-gradient-to-t from-violet-600 via-violet-600 to-indigo-600 text-white py-10">
      <div>
        <h1 className="font-bold text-lg md:text-3xl py-4 text-center">
          About Us
        </h1>
      </div>
      <div className="bg-white text-black p-8 rounded-md md:w-[1000px] mx-auto">
        <p>
          Welcome to Random Movie Picker, your go-to site for getting fun,
          customized movie recommendations with just the click of a button!
        </p>

        <div>
          <ul>
            <li>
              <h2>
                <strong>Our Story</strong>
              </h2>
              <p>
                Random Movie Picker was created in 2024 by movie lovers who were
                tired of spending more time deciding what to watch than actually
                watching something. We wanted a way to easily get personalized
                movie suggestions so we could spend less time scrolling and more
                time enjoying great films.
              </p>
              <p>
                After months of development, we launched Random Movie Picker to
                provide customized movie picks for every taste. Whether you love
                action films, thought-provoking dramas, laugh-out-loud comedies
                or anything in between, our site offers something for everyone.
              </p>
            </li>

            <li>
              <h2>
                <strong>Our Mission</strong>
              </h2>
              <p>
                Our goal at Random Movie Picker is simple - to help you discover
                amazing movies tailored just for you. We aim to take the
                frustration out of picking something to watch so you can get
                straight to the good stuff.
              </p>
              <p>
                Through our proprietary algorithm and database of over 20,000
                films, we can analyze your preferences and viewing history to
                offer spot-on recommendations. From cult classics to critically
                acclaimed award winners, we provide unexpected but delightful
                movie suggestions you may have otherwise overlooked.
              </p>
            </li>

            <li>
              <h2>
                <strong>Meet the Team</strong>
              </h2>
              <div>
                <h3>
                  <strong>Sarah, CEO</strong>
                </h3>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Page;
