import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faL,
  faLocationCrosshairs,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { resolve } from "path";

import { Rings } from "react-loader-spinner";

const mapApiJs = "https://maps.googleapis.com/maps/api/js";
const apiKey = "AIzaSyC2ryNCZtcf1sFdowVC36QK6fEmO4KORPQ";
const geocodeJson = "https://maps.googleapis.com/maps/api/geocode/json";

const backgroundClassMap = {
  themeBorderColor: "border-mint-tulip-500",
  themeTextColor: "text-mint-tulip-500",
  themeHoverTextColor: "mint-tulip-700",
  themeTextSecondaryColor: "black",
  themeBackgroundColor: "bg-mint-tulip-500",
  themeHoverBackgroundColor: "bg-mint-tulip-300",
};

function loadAsyncScript(src) {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    Object.assign(script, {
      type: "text/javascript",
      async: true,
      src,
    });
    script.addEventListener("load", () => resolve(script));
    document.head.appendChild(script);
  });
}

const extractAddress = (place) => {
  console.log("Extracting Address");
  console.log(place);
  const address = {
    city: "",
    state: "",
    zip: "",
    country: "",
    plain() {
      const city = this.city ? this.city + ", " : "";
      const zip = this.zip ? this.zip + ", " : "";
      const state = this.state ? this.state + ", " : "";
      return city + zip + state + this.country;
    },
  };

  if (!Array.isArray(place?.address_components)) {
    return address;
  }

  place.address_components.forEach((component) => {
    const types = component.types;
    const value = component.long_name;
    if (types.includes("locality")) {
      address.city = value;
    }
    if (types.includes("administrative_area_level_2")) {
      address.state = value;
    }
    if (types.includes("postal_code")) {
      address.zip = value;
    }
    if (types.includes("country")) {
      address.country = value;
    }
  });

  return address;
};

function SearchByLocationForm() {
  const searchInput = useRef(null);
  // const searchInput = useState("");
  const [address, setAddress] = useState({});
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [loadingTrue, setLoadingTrue] = useState(false);

  const onFormSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/endpoint-search-for-therapists", {
        method: "POST",
        mode: "no-cors",
        body: JSON.stringify({
          address,
          latitude,
          longitude,
        }),
        headers: {
          "content-type": "application/json",
        },
      });
    } catch (error: any) {
      console.error("Error:", error);
    }
  };

  const initMapScript = () => {
    // if script already loaded
    if (window.google) {
      return Promise.resolve();
    }
    const src = `${mapApiJs}?key=${apiKey}&libraries=places&v=weekly`;
    return loadAsyncScript(src);
  };

  // do something on address change
  const onChangeAddress = (autocomplete) => {
    const place = autocomplete.getPlace();
    const lat = place.geometry.location.lat();
    const lng = place.geometry.location.lng();
    setLatitude(lat);
    setLongitude(lng);

    setAddress(extractAddress(place));
    // setAddress(place.formatted_address);
  };

  // init autocomplete
  const initAutocomplete = () => {
    if (!searchInput.current) return;

    const autocomplete = new window.google.maps.places.Autocomplete(
      searchInput.current
    );
    // autocomplete.setFields(["address_component", "geometry"]);
    autocomplete.setFields(["address_component", "geometry"]);
    autocomplete.setTypes(["(cities)"]);
    autocomplete.addListener("place_changed", () =>
      onChangeAddress(autocomplete)
    );
  };

  const reverseGeocode = ({ latitude: lat, longitude: lng }) => {
    const url = `${geocodeJson}?key=${apiKey}&latlng=${lat},${lng}`;
    // searchInput.current.value = "Getting your location...";
    fetch(url)
      .then((response) => response.json())
      .then((location) => {
        const place = location.results[0];
        // setFullAddress(place.formatted_address);
        const _address = extractAddress(place);
        // setAddress(_address);
        setLoadingTrue(false);
        setAddress(place.formatted_address);
        // searchInput.current.value = _address.plain();
        searchInput.current.value = place.formatted_address;
      });
  };

  const findMyLocation = () => {
    console.log("Finding Location");
    setLoadingTrue(true);
    // searchInput.current.value = "Location...";

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          reverseGeocode(position.coords);
        },
        function (error) {
          if (error.code == error.PERMISSION_DENIED) {
          }
        }
      );
    }
  };

  // load map script after mounted
  useEffect(() => {
    initMapScript().then(() => initAutocomplete());
  }, []);

  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <div className="flex flex-row items-center ">
          <input
            ref={searchInput}
            type="text"
            placeholder="Location..."
            onChange={() => setAddress(searchInput)}
            className="rounded-md py-3 px-10 min-w-[500px] focus:outline-none focus:bg-white bg-gray-100"
          />
          <div className="w-[50px] h-[50px] flex items-center justify-center ml-[-70px] ">
            <button onClick={findMyLocation}>
              {loadingTrue ? (
                <Rings
                  height="40"
                  width="40"
                  color="#32a1a1"
                  radius="6"
                  wrapperStyle={{}}
                  wrapperClass=""
                  visible={true}
                  ariaLabel="rings-loading"
                />
              ) : (
                <FontAwesomeIcon
                  className="w-[20px] h-[20px] text-mint-tulip-500"
                  icon={faLocationCrosshairs}
                  size="2x"
                />
              )}
            </button>
          </div>
        </div>
        <div className="flex items-center justify-center mt-[30px]">
          <button
            className={`mt-5 capitalize py-5 px-10 ${backgroundClassMap["themeBackgroundColor"]} rounded-md hover:bg-mint-tulip-700`}
          >
            Search for therapists
          </button>
        </div>
      </form>
    </div>
  );
}

export default SearchByLocationForm;
