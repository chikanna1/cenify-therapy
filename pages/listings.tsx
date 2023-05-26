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
import { API_URL } from '../config/index'


const themeBorderColor = "mint-tulip-500";
const themeTextColor = "mint-tulip-500";
const themeHoverTextColor = "mint-tulip-700";
const themeSecondaryTextColor = "black";


const TherapistListings: NextPage = ({ therapists }) => {
console.log(therapists)
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <Header />

      {/* Listings Page Body */}
      <div>


      </div>

        {/* Footer */}
      <Footer />
    </div>
  );
};

export default TherapistListings;


export async function getStaticProps() {
    const res = await fetch(`${API_URL}/api/therapists`)
    const therapists = await res.json()
    
    return {
        props: { therapists },
        revalidate: 1
    }
}
