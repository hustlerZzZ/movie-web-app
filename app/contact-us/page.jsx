function Page() {
  return (
    <div className="bg-gradient-to-t from-violet-600 via-violet-600 to-indigo-600 text-white py-10 text-center">
      <div>
        <h1 className="font-bold text-lg md:text-3xl py-4 text-center">
          Contact Us
        </h1>
      </div>
      <div className="bg-white text-black p-8 rounded-md md:w-[1000px] mx-auto">
        <p>
          If you have any questions or suggestions about our Privacy Policy, do
          not hesitate to contact us{" "}
          <a
            href="mailto: contact@randommoviegenerator.net"
            className="underline font-bold"
          >
            contact@randommoviegenerator.net
          </a>
        </p>
      </div>
    </div>
  );
}

export default Page;
