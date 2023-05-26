import Head from "next/head";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import GoogleMapReact from "google-map-react";
import Link from "next/link";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

import { ContactForm } from "../../components/ContactForm";

import therapist_profile_image_sample from "../../assets/images/therapist-profile-page/therapist-profile-image.jpg";

import {API_URL} from '../../config/index'
import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

import {
  faFacebookSquare,
  faInstagramSquare,
  faPinterest,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

import {
  faPhoneVolume,
  faPhoneSlash,
  faBuildingCircleCheck,
  faBuildingCircleXmark,
  faUserPlus,
  faUserXmark,
  faStar,
  faCircleDot,
  faCircleCheck,
  faEnvelopeCircleCheck,
  faMobileAndroid,
} from "@fortawesome/free-solid-svg-icons";

const defaultProps = {
  center: {
    lat: 42.360081,
    lng: -71.058884,
  },
  zoom: 15,
};

const themeBorderColor = "mint-tulip-500";
const themeTextColor = "mint-tulip-500";
const themeHoverTextColor = "mint-tulip-700";
const themeSecondaryTextColor = "black";

const backgroundClassMap = {
  themeBorderColor: "border-mint-tulip-500",
  themeTextColor: "text-mint-tulip-500",
  themeHoverTextColor: "mint-tulip-700",
  themeTextSecondaryColor: "black",
};

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}

function ProfilePage ({ therapist }) {
  const [open, setOpen] = useState(1);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <Header />
      
      <div className="flex lg:flex-row flex-col justify-center w-[100vw] px-[5%] lg:px-[5%] bg-gray-500/20">
        <div className="flex flex-row justify-center lg:justify-start py-[2%] px-[2.5%]">
          {/* Therapist Brief Overview, About Me, Video, Education/Training and Specialties */}
          <div className="flex flex-col mr-5">
            <div
              className={`flex flex-col bg-white p-5 ${backgroundClassMap["themeBorderColor"]} border-[3px] rounded-3xl max-w-[700px]`}
            >
              {/* Therapist ProfilePic Section/Languages */}
              <div className="flex flex-col items-center text-center lg:text-left lg:flex-row ">
                <Image
                  className={`w-[200px] h-[200px] lg:w-[225px] lg:h-[225px] rounded-full border ${backgroundClassMap["themeBorderColor"]} p-1`}
                  src={therapist.profileImage.data.attributes.formats.large.url}
                  width="150"
                  height="150"
                  alt="Badge"
                />
                <div className="flex flex-col justify-center px-10">
                  {/* Name */}
                  <h2 className="mt-2 text-2xl lg:pb-2">
                    {therapist.name}, <span>{therapist.title}</span>
                  </h2>
                  {/* Therapist Classification */}
                  <h3 className="mb-2 ">{therapist.classification}</h3>

                  {/* Languages */}
                  <h3 className="my-2">
                    Languages:
                    <span>
                      {" "}
                      {therapist.languages.map((language) => " | " + language)}
                    </span>
                  </h3>
                  {/* Location */}
                  {/* 
                  <h3>{therapist.location}</h3>
                   */}

                  {/* Accepting Or Not Accepting New Clients */}
                  <div className="flex items-center justify-center lg:justify-start py-2 lg:py-0 lg:py-2">
                    {therapist.acceptingNewClients ? (
                      <div className="flex items-center justify-center py-5 w-[200px]">
                        <FontAwesomeIcon
                          className={`mr-3 ${backgroundClassMap["themeTextColor"]}`}
                          icon={faUserPlus}
                          size="1x"
                        />
                        <h3 className="">Accepting New Clients</h3>
                      </div>
                    ) : (
                      <div className="flex items-center justify-center py-5">
                        <FontAwesomeIcon
                          className="mr-3 text-red-500"
                          icon={faUserXmark}
                          size="1x"
                        />
                        <h3>Not Accepting New Clients</h3>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Type of Therapy Offered */}
              <div className="flex flex-col items-center lg:flex-row lg:mt-5 lg:py-4">
                {/* Online Therapy Section */}
                <div className="lg:mr-10 max-w-[300px] py-2 lg:py-0">
                  {therapist.onlineTherapy ? (
                    <div className="flex justify-center">
                      <div className="w-[75px] text-center">
                        <FontAwesomeIcon
                          className={`${backgroundClassMap["themeTextColor"]}`}
                          icon={faPhoneVolume}
                          size="2x"
                        />
                      </div>
                      <div className="w-[250px] text-center">
                        <h3>Offers Online Therapy</h3>
                      </div>
                    </div>
                  ) : (
                    <div className="flex justify-center ">
                      <div className="w-[75px] text-center">
                        <FontAwesomeIcon
                          className="text-red-600"
                          icon={faPhoneSlash}
                          size="2x"
                        />
                      </div>
                      <div className="w-[250px] text-center">
                        <h3>Does Not Offer Online Therapy</h3>
                      </div>
                    </div>
                  )}
                </div>

                {/* In Person Therapy */}
                <div className="lg:mr-10 max-w-[300px] py-2 lg:py-0">
                  {therapist.inPersonTherapy ? (
                    <div className="lg:mr-10 flex justify-center">
                      <div className="w-[75px] text-center">
                        <FontAwesomeIcon
                          className={`${backgroundClassMap["themeTextColor"]}`}
                          icon={faBuildingCircleCheck}
                          size="2x"
                        />
                      </div>
                      <div className="w-[250px] text-center">
                        <h3>Offers In-Person Therapy</h3>
                      </div>
                    </div>
                  ) : (
                    <div className="flex justify-center">
                      <div className="w-[75px] text-center">
                        <FontAwesomeIcon
                          className="text-red-600"
                          icon={faBuildingCircleXmark}
                          size="2x"
                        />
                      </div>
                      <div className="w-[250px] text-center">
                        <h3>Does Not Offer In-Person Therapy</h3>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* A little about me*/}
            <div
              className={`my-5 py-10 max-w-[700px] bg-white  border-${"white"} border-[3px] `}
            >
              <h3
                className={`px-10 text-2xl font-bold pb-5 ${backgroundClassMap["themeTextSecondaryColor"]}`}
              >
                A Little About Me
              </h3>
              <p className="px-10">{therapist.bio}</p>
            </div>
            {/* Specialties */}
            <div className="bg-white p-5 max-w-[700px]">
              <h3 className="text-2xl font-bold pb-5">Specialties</h3>
              <div className="columns-2  ">
                {therapist.specialties.map((speciality, index) => (
                  <div className="flex items-center " key={index}>
                    <FontAwesomeIcon
                      className="p-2"
                      icon={faCircleDot}
                      size="1x"
                    />
                    <p className="py-2">{speciality}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="lg:w-[40%] flex flex-col py-[2%] px-[5%] lg:px-0 mr-5 lg:mt-5">
          {/* Contact Me */}
          <div
            className={`flex flex-col bg-white py-3 pb-7 px-5 border-${"white"} border-[3px] max-w-[700px]  `}
          >
            <div>
              <h3
                className={`text-center text-2xl ${backgroundClassMap["themeTextSecondaryColor"]}`}
              >
                Contact Info
              </h3>
              <div className="flex items-center px-[30px] py-3">
                <FontAwesomeIcon
                  className={`mr-5 ${backgroundClassMap["themeTextColor"]}`}
                  icon={faEnvelopeCircleCheck}
                  size="2x"
                />
                <p className={`text-${themeSecondaryTextColor}`}>Send Email</p>
              </div>
              <div className="flex items-center px-[30px] py-3">
                <FontAwesomeIcon
                  className={`ml-2 mr-7 text-${themeTextColor}`}
                  icon={faMobileAndroid}
                  size="2x"
                />
                <p className={`text-${themeSecondaryTextColor}`}>
                  Phone Number
                </p>
              </div>
            </div>
            <div>
              <p
                className={`text-center text-xl py-2 text-${themeSecondaryTextColor}`}
              >
                Social Media
              </p>
              <hr />
              {/* Social Media Icons */}
              <div className="flex flex-row justify-center py-2">
                <Link
                  className="text-md text-slate-600 p-2 hover:text-slate-400 transition duration-500 rounded-md text-center"
                  href={therapist.socialMediaLinks.facebook}
                >
                  <FontAwesomeIcon
                    className={`${backgroundClassMap["themeTextColor"]} hover:${backgroundClassMap["themeHoverTextColor"]}`}
                    icon={faFacebookSquare}
                    size="2x"
                  />
                </Link>
                <Link
                  className="text-md text-slate-600 p-2 hover:text-slate-400 transition duration-500 rounded-md text-center"
                  href={therapist.socialMediaLinks.twitter}
                >
                  <FontAwesomeIcon
                    className={`${backgroundClassMap["themeTextColor"]} hover:${backgroundClassMap["themeHoverTextColor"]}`}
                    icon={faTwitter}
                    size="2x"
                  />
                </Link>

                <Link
                  className="text-md text-slate-600 p-2 hover:text-slate-400 transition duration-500 rounded-md text-center"
                  href={therapist.socialMediaLinks.instagram}
                >
                  <FontAwesomeIcon
                    className={`${backgroundClassMap["themeTextColor"]} hover:${backgroundClassMap["themeHoverTextColor"]}`}
                    icon={faInstagramSquare}
                    size="2x"
                  />
                </Link>

                <Link
                  className="text-md text-slate-600 p-2 hover:text-slate-400 transition duration-500 rounded-md text-center"
                  href={therapist.socialMediaLinks.pinterest}
                >
                  <FontAwesomeIcon
                    className={`${backgroundClassMap["themeTextColor"]} hover:${backgroundClassMap["themeHoverTextColor"]}`}
                    icon={faPinterest}
                    size="2x"
                  />
                </Link>
                <Link
                  className="text-md text-slate-600 p-2 hover:text-slate-400 transition duration-500 rounded-md text-center"
                  href={therapist.socialMediaLinks.linkedin}
                >
                  <FontAwesomeIcon
                    className={`${backgroundClassMap["themeTextColor"]} hover:${backgroundClassMap["themeHoverTextColor"]}`}
                    icon={faLinkedin}
                    size="2x"
                  />
                </Link>
              </div>
            </div>
          </div>
          {/* Accepted Insurances */}
          {/* <Accordion open={open === 1} icon={<Icon id={1} open={open} />}> */}
          <Accordion
            open={true}
            icon={""}
            className="bg-white mt-5 p-5 border border rounded-sm"
          >
            <AccordionHeader onClick={() => handleOpen(1)}>
              Accepted Insurances
            </AccordionHeader>
            <AccordionBody>
              <div className="bg-slate-100 flex flex-col mt-3 text-black font-bold ">
                <div className="columns-2">
                  {Object.keys(therapist.insuranceAccepted).map((key, index) => {
                    if (therapist.insuranceAccepted[key].accepted) {
                      return (
                        <p className="">
                          {key} <span>{therapist.insuranceAccepted[key].specific_plans}</span>
                        </p>
                      );
                    }
                  })}
                </div>

                <div className="flex flex-col py-2">
                  <h3>
                    Session Fee: <span>{therapist.session_fee}$</span>
                  </h3>
                  <h3>
                    Pay By:{" "}
                    {Object.keys(therapist.acceptedPaymentMethods).map((key, index) => {
                      if (therapist.acceptedPaymentMethods[key]) {
                        return <span className="">{`| ${key} `}</span>;
                      }
                    })}
                  </h3>
                </div>
              </div>
            </AccordionBody>
          </Accordion>

          {/* Degrees and Training */}
          <div
            className={`bg-white border ${backgroundClassMap["themeBorderColor"]} border-[3px] mt-5 px-3`}
          >
            <Accordion
              className={`bg-white mt-5 py-3 pb-7 px-5  border-blue-gray-50 border rounded-md`}
              open={open === 2}
              icon={<Icon id={2} open={open} />}
            >
              <AccordionHeader onClick={() => handleOpen(2)}>
                Degrees and Training
              </AccordionHeader>
              <AccordionBody>{therapist.degreesAndTraining}</AccordionBody>
            </Accordion>

            {/* Credentials */}
            <Accordion
              className={`bg-white mt-5 py-3 pb-7 px-5  border-blue-gray-50 border rounded-md`}
              open={open === 3}
              icon={<Icon id={3} open={open} />}
            >
              <AccordionHeader onClick={() => handleOpen(3)}>
                Credentials
              </AccordionHeader>
              <AccordionBody>
                <div className=" columns-1 md:columns-2">
                  {therapist.therapyCredentials.map((credential) => (
                    <div className="mx-auto w-[400px] lg:p-2 lg:w-[250px] md:text-[14px] text-[16px] lg:text-[14px]">
                      &#x2022; {credential}
                    </div>
                  ))}
                </div>
              </AccordionBody>
            </Accordion>
            {/* Approaches To Therapy */}
            <Accordion
              className={`bg-white my-5 py-3 pb-7 px-5  border-blue-gray-50 border rounded-md`}
              open={open === 4}
              icon={<Icon id={4} open={open} />}
            >
              <AccordionHeader onClick={() => handleOpen(4)}>
                My Approaches to Therapy
              </AccordionHeader>
              <AccordionBody>
                <div className="columns-1 md:columns-2">
                  {Object.keys(therapist.therapyApproaches).map((key, index) => {
                    if (therapist.therapyApproaches[key]) {
                      return (
                        <div className="mx-auto w-[400px] lg:p-2 lg:w-[250px] md:text-[14px] text-[16px] lg:text-[14px]">
                          &#x2022; {key}
                        </div>
                      );
                    }
                  })}
                </div>
              </AccordionBody>
            </Accordion>
          </div>
        </div>
      </div>

      <div className=" py-[2%] flex flex-col items-center lg:items-start lg:flex-row justify-between lg:px-[150px]">
        <div className="flex flex-col items-center bg-white w-[30%] ">
          {/* Google map */}
          <div
            className="pt-10 lg:mt-10 w-[400px] h-[400px] lg:w-[500px] lg:h-[500px]"
            // style={{ height: "100%", width: "100%" }}
            >
            
            <GoogleMapReact
              bootstrapURLKeys={{
                key: "AIzaSyC2ryNCZtcf1sFdowVC36QK6fEmO4KORPQ",
              }}
              // defaultCenter={defaultProps.center}
              defaultCenter={{
                lat: therapist.location.office.latitude,
                lng: therapist.location.office.longitude,
              }}
              defaultZoom={15}
              >
              {/* <AnyReactComponent
                  lat={59.955413}
                  lng={30.337844}
                  text="My Marker"
                /> 
              */}
            </GoogleMapReact>
          </div>
            
          <div className="text-center mt-5 mb-10">
            <p className="text-[20px] font-semibold">Office Location</p>
            <p className="text-[20px]">{therapist.location.office.address}</p>
          </div>
        
        </div>
        <div className="w-[60%]">
          <h3 className="text-center text-[25px]">Email to {therapist.name}</h3>
          <hr className="w-[100%]  bg-black/10 border-0 rounded dark:bg-gray-800 py-[3px] my-2" />
          <ContactForm
            therapist_email_address={therapist.email}
            borderColor={themeBorderColor}
            />
        </div>
      </div>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ProfilePage;

export async function getServerSideProps({ query: {slug}}){

  const res = await fetch(`${API_URL}/api/therapists?filters[slug][$eq]=${slug}&populate=*`)
  const therapists = await res.json()

  
  return {
    props: {
      therapist: therapists.data[0].attributes
    }
  }
}
