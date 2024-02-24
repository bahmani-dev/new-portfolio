import Image from "next/image";
import React from 'react';
import Hero from "../component/hero";
import Header from "./layout/header";


export default function Home() {
  return (
    <div className="container">
    <Header/>
    <Hero/>
    </div>
  );
}
 