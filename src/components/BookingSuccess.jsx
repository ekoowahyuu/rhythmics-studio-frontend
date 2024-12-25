import SMS from "../assets/SMS.png";
import { useState } from "react";
import { Link } from "react-router-dom";

const BookingSuccess = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      {/* Main Content */}
      <main className="flex-1 container mx-auto px-4 py-16 mt-16">
        <h1 className="text-4xl font-bold text-center mb-12">
          BOOKING SUCCESSFULL
        </h1>

        <div className="max-w-2xl mx-auto bg-[#AB886D] rounded-lg p-8 text-center text-white">
          <div className="flex justify-center mb-6">
            <img src={SMS} alt="Success Icon" className="w-16 h-16" />
          </div>
          <h2 className="text-3xl font-bold mb-4">Thank You!</h2>
          <p className="text-sm leading-relaxed">
            Thank you for choosing Rhythmics to power your creativity. Your
            studio booking has been confirmed, and everything is set for you to
            dive into your musical journey. We’re excited to be a part of your
            creative process and can’t wait to hear the magic you’ll create. Get
            ready to bring your vision to life—your studio awaits!
          </p>
        </div>
      </main>
    </div>
  );
};

export default BookingSuccess;
