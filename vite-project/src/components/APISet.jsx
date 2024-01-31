import React, { useState } from "react";
import {LinkButton} from "../assets/LinkButton";


const APISet = ({shortUrl}) => {

  const [originalUrl, setOriginalUrl] = useState("");


  async function shortenUrl() {
    try {
      const response = await fetch('https://balanandrei.ro/api/shorten-url', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url: originalUrl }),
      });

      const data = await response.json();

      if (data.error) {
        console.error("Eroare:", data.error);
        throw new Error(data.error);
      }
      shortUrl(data.shortUrl);
      setOriginalUrl('');
      return data.shortUrl;
    } catch (error) {
      console.error("Eroare în timpul cererii fetch:", error);
      throw error;
    }
  }


  return (

    <>

      <input
        type="text"
        placeholder="Shorten a link here..."
        value={originalUrl}
        onChange={(e) => setOriginalUrl(e.target.value)}

      />

      <div onClick={shortenUrl} className="d-none d-lg-block">
        <LinkButton bg="hsl(180, 66%, 49%)" width="140px" height="50px" radius="5px" colorL="white" text="Shorten It!" />
      </div>
      <div onClick={shortenUrl} className="d-lg-none w-100">
        <LinkButton bg="hsl(180, 66%, 49%)" width="100%" height="55px" radius="5px" colorL="white" text="Shorten It!" />
      </div>


    </>


  )
}

export default APISet;