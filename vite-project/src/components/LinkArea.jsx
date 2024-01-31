import React, { useState, useEffect } from "react";
import { BgLink, BgLinkMobile } from '../assets/BgLink';
import  { CopyButton } from "../assets/LinkButton";
import APISet from "./APISet";
const LinkArea = () => {


    const [results, setResults] = useState([]);

    const shortUrl = async (url) => {
        setResults([url, ...results]);
    };

    useEffect(() => {
        if (results.length > 3) {
            setResults(results.slice(0, 3));
        }
    }, [results]);

    console.log(results);

    return (
        <div className="my-3">

            <div className="link-background mx-auto">

                <div className="input-set">

                    <APISet shortUrl={shortUrl} />


                </div>

                <div className="svg-set d-none d-lg-block">

                    <BgLink radius="15px" />

                </div>

                <div className="svg-set d-lg-none">

                    <BgLinkMobile />

                </div>

            </div>

            <div className="history mt-4">

                {results.map((element, index) => (
                    <div key={index} className="link-info font">
                        <h4 className="h6 mt-2 w-100 clr-blk font">{element}</h4>
                        <div className="hl d-lg-none"></div>
                        <div className="width-control d-flex align-items-lg-center flex-column flex-lg-row gap-3">
                            <a className="link font-p" href={element} target="_blank" rel="noopener noreferrer">
                                {element}
                            </a>
                            <CopyButton index={index} element={element} newColor="hsl(257, 27%, 26%)" bg="hsl(180, 66%, 49%)" width="100%" height="45px" radius="6px" colorL="white" text="Copy" newText="Copied!" />
                        </div>
                    </div>
                ))}
               

            </div>

        </div>
    )
}

export default LinkArea;