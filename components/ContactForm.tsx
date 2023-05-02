import React, { FormEvent, useState } from "react";

const backgroundClassMap = {
  themeBorderColor: "border-mint-tulip-500",
  themeTextColor: "text-mint-tulip-500",
  themeHoverTextColor: "mint-tulip-700",
  themeTextSecondaryColor: "black",
  buttonBackgroundColor: "bg-mint-tulip-500",
  buttonHoverBackgroundColor: "bg-mint-tulip-700",
};

export const ContactForm = ({ therapist_email_address }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");

  const onFormSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/endpoint-contact-therapist", {
        method: "POST",
        body: JSON.stringify({
          name,
          email,
          phoneNumber,
          message,
          therapist_email_address,
        }),
        headers: {
          "content-type": "application/json",
        },
      });
    } catch (error: any) {
      console.error("Error:", error);
    }
  };
  return (
    <div>
      <form className="p-8" onSubmit={onFormSubmit}>
        <div className="mb-7">
          <label className="block" htmlFor="Name">
            Your Name *
          </label>
          <input
            className={`bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:${backgroundClassMap["themeBorderColor"]}`}
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
            placeholder="Name"
          />
        </div>
        <div className="mb-7">
          <label className="block" htmlFor="Name">
            Email Address *
          </label>
          <input
            className={`bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:${backgroundClassMap["themeBorderColor"]}`}
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="Email Address"
          />
        </div>
        <div className="mb-7">
          <label className="block" htmlFor="Name">
            Phone Number
          </label>
          <input
            className={`bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:${backgroundClassMap["themeBorderColor"]}`}
            type="text"
            onChange={(e) => setPhoneNumber(e.target.value)}
            value={phoneNumber}
            placeholder="Phone Number"
          />
        </div>
        <div className="mb-7">
          <label className="block" htmlFor="Name">
            Message *
          </label>
          <textarea
            rows={10}
            cols={50}
            className={`bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:${backgroundClassMap["themeBorderColor"]}`}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>

        <div></div>
        <button
          className={`${backgroundClassMap["buttonBackgroundColor"]} hover:${backgroundClassMap["buttonHoverBackgroundColor"]} rounded-md px-10 py-4`}
          type="submit"
        >
          Submit Form
        </button>
      </form>
    </div>
  );
};
