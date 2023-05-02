import type { NextPage } from "next";
import React from "react";

import Script from "next/script";

import Head from "next/head";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import GoogleMapReact from "google-map-react";
import Link from "next/link";
import PlacesAutoComplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";

import Header from "../components/Header";
import Footer from "../components/Footer";
import SearchByLocationForm from "../components/SearchByLocationForm";

const themeBorderColor = "mint-tulip-500";
const themeTextColor = "mint-tulip-500";
const themeHoverTextColor = "mint-tulip-700";
const themeSecondaryTextColor = "black";

import findATherapistImage1 from "../assets/images/find-a-therapist-page/happy-peaceful-woman.jpg";
import findATherapistImage2 from "../assets/images/find-a-therapist-page/therapy-session.jpg";

const FindATherapistPage: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <Header />

      {/* Find A Therapist Page Start */}
      <div className="flex flex-col bg-gradient-to-tr from-mint-tulip-100 to-mint-tulip-700 py-[7%]">
        {/* Find a Therapist Header */}
        <div className="flex flex-col justify-center items-center h-[30vh]">
          {/* Header Text */}
          <div className="flex flex-col justify-center">
            <h1 className="text-center text-[40px] capitalize">
              Find A Therapist
            </h1>
            <h3 className="text-center mb-10 text-[17px] capitalize">
              Finding the right therapist is the first step toward a better you.
            </h3>
          </div>

          {/* Search Input */}
          <div>
            <SearchByLocationForm />
          </div>
        </div>
      </div>
      {/* Good Mental Health Takes Practice */}
      <div className="flex flex-col">
        <div>
          <br />
          <h2 className="capitalize text-[25px] text-center">
            Good mental health takes practice daily
          </h2>
          <br />
          <div className="flex flex-row justify-center px-[50px] items-center">
            <div className="w-[400px] h-[350px]">
              <Image
                width="0"
                height="0"
                className={`w-full h-full`}
                src={findATherapistImage1}
                alt="Badge"
              />
            </div>
            <div className="w-[60%] pl-[50px]">
              <p>
                The quest for a happy and healthy life is a life-long journey.
                Using the resources of an expert to help guide this journey is a
                very smart approach. Often times it requires the observations of
                another to help put things into perspective. This can be
                especially important in situations where mental health problems
                like addiction, depression or anxiety interfere with our ability
                to see our own situation clearly. Whether you are suffering the
                effects of a major life change such as grief and loss, PTSD,
                relationship issues, sexual abuse, or clinical medical issues
                like bipolar disorder, substance abuse, schizophrenia – good
                counseling can serve as a positive life force.
              </p>
              <br />
              <p>
                <span className="font-bold">INVEST IN YOUR FUTURE:</span>{" "}
                Contact a therapist today! Search by location and specialization
                for a list of qualified mental health professionals in your
                area. Can’t find a therapist match in your area? Search our
                directory of therapists offering online therapy. Geography
                should not be a deterrent to getting the professional help you
                deserve.
              </p>
            </div>
          </div>
        </div>
        <div>
          <br />
          <h2 className="capitalize text-[25px] text-center">
            The state of mental health today
          </h2>
          <br />
          <div className="flex flex-row flex-row-reverse justify-center px-[50px] items-center">
            <div className="w-[400px] h-[350px]">
              <Image
                width="0"
                height="0"
                className={`w-full h-full`}
                src={findATherapistImage2}
                alt="Badge"
              />
            </div>
            <div className="w-[60%] pr-[50px]">
              <p>
                Therapy is often viewed as limited to individuals with obvious
                mental challenges. However, mental health professionals receive
                training to address a wide variety of conditions ranging from
                relationship issues, career counseling, to major life
                transitions. Having the help of a professional can help you
                better understand and prepare for the challenges you face.
              </p>
              <br />
              <p>
                <span className="font-bold">INVEST IN YOUR FUTURE:</span>{" "}
                Research shows that mental disorders are common, affecting tens
                of millions of people each year, and only about half of those
                affected receive treatment. Of particular importance is
                addressing mental health challenges early. For example, behavior
                challenges in children such as ADHD or sensory integration
                disorder can be greatly reduced if treated at a young age, and
                can often prevent compounding issues in their adult lives.
                Mental health issues are often layered. For instance,
                individuals that struggle with eating disorders or addiction
                often have an underlying mood disorder that must be addressed
                before treatment can be successful.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Cards */}
      <div className="py-5 bg-gray-200/50">
        <div className="flex flex-row">
          <div></div>
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default FindATherapistPage;
