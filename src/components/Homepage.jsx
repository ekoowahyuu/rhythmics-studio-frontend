import regularImage from "../assets/regular.jpg";
import vipImage from "../assets/vip.jpg";
import vvipImage from "../assets/vvip.jpg";
import aboutImage from "../assets/about.png";

const Homepage = () => {
  const venues = [
    { name: "REGULAR", image: regularImage },
    { name: "VIP", image: vipImage },
    { name: "VVIP", image: vvipImage },
  ];

  return (
    <div>
      {/* Start Hero Section */}
      <section className="mx-60 my-20 rounded-2xl bg-hero-pattern bg-cover">
        <div className="text-white py-20 px-10 w-2/5">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Book Your Perfect Studio Here.
          </h1>
          <p className="text-lg md:text-sm mb-8">
            From premium soundproof rooms to world-class equipment, we’ve got
            everything you need. Discover top-notch music studios and secure
            your space effortlessly
          </p>
          <div className="flex gap-4">
            <button className="bg-white text-black px-6 py-2 rounded-md font-medium shadow-md hover:bg-gray-200">
              BOOK NOW
            </button>
            <button className="bg-lime-500 text-black px-6 py-2 rounded-md font-medium shadow-md hover:bg-lime-400">
              EXPLORE
            </button>
          </div>
        </div>
      </section>
      {/* End Hero Section */}

      {/* Start Venue Section */}
      <section className="mx-60 my-20">
        <h2 className="text-center text-4xl font-bold mb-4">STUDIO</h2>
        <p className="text-center text-primary mb-8">
          Your music deserves the best—find studios near you today.
        </p>
        <div className="bg-primary py-20 px-20 rounded-2xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14">
          {venues.map((venue, index) => (
            <div
              key={index}
              className="h-80 rounded-lg shadow-lg relative overflow-hidden"
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 shadow-lg"
                style={{
                  backgroundImage: `url(${venue.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>

              {/* Overlay Gelap */}
              <div className="absolute inset-0 bg-black bg-opacity-45 shadow-lg"></div>

              {/* Text Content */}
              <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-10 text-center">
                <h3 className="text-white font-bold text-2xl">{venue.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* End Venue Section */}

      {/* Start About Section */}
      <section className="mx-60 my-20 p-20 flex justify-between">
        <div>
          <img src={aboutImage} alt="about" />
        </div>
        <div className="w-3/5">
          <h2 className="text-right text-5xl font-bold mb-6">About Us</h2>
          <p className="text-right text-gray-700 leading-7">
            Rhythmics is your ultimate platform for discovering and booking the
            best music studios nearby, tailored to your creative needs. Whether
            you're recording your next hit, rehearsing with your band, or mixing
            tracks, we connect you with top-tier studios that provide everything
            you need to bring your sound to life. With real-time availability
            and a fast, secure booking process, finding the perfect space is
            effortless. Simply search for a studio, check its availability, and
            book with ease. With Rhythmics, all that’s left to do is create and
            enjoy your music. Your next masterpiece is just a studio away!
          </p>
        </div>
      </section>
      {/* End About Section */}
    </div>
  );
};

export default Homepage;
