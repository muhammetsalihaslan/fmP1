"use client";
import { useState } from "react";
import Confirmed from "./confirmed/page";
import FirstPage from "./firstpage/page";

export default function Home() {
  const [email, setEmail] = useState("");
  return <>{email == " " ? <FirstPage /> : <Confirmed />}</>;
}
