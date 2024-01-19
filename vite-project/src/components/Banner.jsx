import React from "react";
import Button from "../assets/Button";
import Ilustration from "../assets/Ilustration";

const Banner = () => {


    return (

        <>
            <div className="row mt-3 w-100 flex-column-reverse justify-content-evenly flex-lg-row set-banner">


                <div className="col-12 col-lg-4 col-xl-6 text-set font">

                    <h2 className="font-lg text-set-h2">
                        More than just shorter links
                    </h2>

                    <p className="font-p-gray-banner">  Build your brand’s recognition and get detailed insights
                        on how your links are performing.</p>

                    <Button color="hsl(180, 66%, 49%)" width="160px" height="45px" border="115px" colorL="white" text="Get Started" />
                </div>

                <div className="col-12 col-lg-4 col-xl-2 p-0 svg-st">
                    <Ilustration />
                </div>
            </div>
        </>
    )
}

export default Banner;