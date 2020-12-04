import React from "react";
import Link from "next/link";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import CardWeather from "../components/CardWeather";
function index() {
  return (
    <div className="bg-lightBlue-100 h-full  w-100">
      <div className="container mx-auto ">
        <Navbar />
        <Hero />
      </div>
    </div>
  );
}

export default index;
