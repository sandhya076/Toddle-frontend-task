import React, {useState} from "react";
import Header from "./Header";
import Bio from "./Bio";
import NavBar from "./NavBar";

export default function Home() {
  const [resume, setResume] = useState()
  const [swap, setSwap] = useState(true)
  return (
    <>
      <Header resume = {resume} setResume={setResume}/>
      <Bio swap = {swap} setSwap={setSwap}/>
      <NavBar resume = {resume} swap = {swap} setSwap={setSwap}/>
    </>
  );
}
