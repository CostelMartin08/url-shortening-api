import React from "react";
import Button from "../assets/Button";
import Ilustration from "../assets/Ilustration";

const Banner = () => {


    return (

        <>
            <div className="row mt-3 w-100 flex-column-reverse flex-lg-row set-banner">


                <div className="col-lg-7 text-set">

                    <h2 className="font">
                        More than just shorter links
                    </h2>

                    <p>  Build your brand’s recognition and get detailed insights
                        on how your links are performing.</p>

                    <Button color="hsl(180, 66%, 49%)" width="130px" height="45px" border="115px" colorL="white" text="Get Started" />
                </div>

                <div className="col-lg-5 p-0">
                    <Ilustration />
                </div>
            </div>
        </>
    )
}

export default Banner;