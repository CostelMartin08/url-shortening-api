import React from "react";
import './components.css';
import { BrandRecognition, DetailedRecords, FullyCustomizable } from "../assets/Icon";
import { Container } from "react-bootstrap";

const Statistics = () => {

    return (

        <Container className="font-p-gray">

            <div style={{ marginTop: '80px' }} className="d-flex flex-column  align-items-center">
                <div className="text-center">
                    <h3 className="font-md clr-blk mb-3">Advanced Statistics</h3>
                    <p className="p-support">
                        Track how your links are performing across the web with our
                        advanced statistics dashboard.
                    </p>
                </div>
            </div>

            <div className="card-section row">

                <div className="horizontal-line d-none d-lg-block " />

                <div className="vertical-line d-lg-none"></div>

                <div className="col-12 col-lg card-link">
                    <BrandRecognition />
                    <div className="mt-4 p-2">
                        <h5 className="clr-blk font-xs">Brand Recognition</h5>
                        <p>Boost your brand recognition with each click. Generic links don’t
                            mean a thing. Branded links help instil confidence in your content.</p>
                    </div>
                </div>

                <div className="col-12 col-lg card-link">
                    <DetailedRecords />
                    <div className="mt-4 p-2">
                        <h5 className="clr-blk font-xs"> Detailed Records</h5>
                        <p>Gain insights into who is clicking your links. Knowing when and where
                            people engage with your content helps inform better decisions.</p>
                    </div>

                </div>

                <div className="col-12 col-lg card-link ">
                    <FullyCustomizable />
                    <div className="mt-4 p-2">
                        <h5 className="clr-blk font-xs">Fully Customizable</h5>
                        <p>Improve brand awareness and content discoverability through customizable
                            links, supercharging audience engagement.</p>
                    </div>
                </div>

            </div>


        </Container>
    )
}


export default Statistics;