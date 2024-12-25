const ContactUs = () => {
  return (
    <section className="">
      <div className="h-screen flex items-center justify-center bg-putih">
        <div className="w-[80%] max-w-5xl h-[30rem] flex rounded-l-lg shadow-lg">
          <div class="w-1/2 bg-white flex flex-col justify-center items-center rounded-l-lg p-6">
            <h1 className="text-3xl font-bold mb-10 text-hitam-800">
              Contact Us
            </h1>
            <form action="w-full space-y-4">
              <input
                type="Email"
                placeholder="Email"
                className="w-full border border-gray-300 rounded-3xl p-3 focus:outline-primary focus:ring-primary mb-6 font-poppins"
              />
              <input
                type="Name"
                placeholder="Name"
                className="w-full border border-gray-300 rounded-3xl p-3 focus:outline-primary focus:ring-primary mb-6 font-poppins"
              />
              <input
                type="Description"
                placeholder="Description"
                className="w-full border border-gray-300 rounded-3xl p-3 focus:outline-primary focus:ring-primary mb-6 font-poppins"
              />
              <input
                type="Submit"
                placeholder="Submit"
                className="w-full border text-putih bg-primary border-gray-300 rounded-3xl p-3 focus:outline-primary focus:ring-primary font-poppins"
              />
            </form>
          </div>
          <div className="w-1/2 bg-primary text-white flex flex-col justify-center rounded-r-lg p-10">
            <h2 class="font-poppins text-3xl font-bold mb-4">
              Reach Out to Rhythmics
            </h2>
            <p class=" font-poppins text-sm mb-4 text-putih font-semibold">
              Have questions or need assistance? We’re here for you!
            </p>
            <p class=" font-poppins text-sm leading-6 text-putih">
              At Rhythmics, we’re committed to making your studio booking
              experience as smooth as possible. Whether you need help with
              finding the perfect studio, have feedback, or want to know more
              about our services, don’t hesitate to reach out. Our team is ready
              to support you every step of the way!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ContactUs;
