import React from "react";
import './components.css';
import { BrandRecognition, DetailedRecords, FullyCustomizable } from "../assets/Icon";
import { Container } from "react-bootstrap";

const Statistics = () => {

    return (

        <Container>

            <div style={{ marginTop: '120px' }} className="d-flex flex-column  align-items-center">
                <div className="text-st-set text-center">
                    <h3 className="font-md mb-3">Advanced Statistics</h3>
                    <p className="px-lg-4">
                        Track how your links are performing across the web with our
                        advanced statistics dashboard.
                    </p>
                </div>
            </div>

            <div className="card-section row">

                <hr className="hr" />


                <div className="col-12 col-lg card-link">
                    <BrandRecognition />
                    <h4>Brand Recognition</h4>
                    <p>Boost your brand recognition with each click. Generic links don’t
                        mean a thing. Branded links help instil confidence in your content.</p>
                </div>
                <div className="col-12 col-lg card-link">
                    <DetailedRecords />
                    <h4> Detailed Records</h4>
                    <p>Gain insights into who is clicking your links. Knowing when and where
                        people engage with your content helps inform better decisions.</p>

                </div>
                <div className="col-12 col-lg card-link ">
                    <FullyCustomizable />
                    <h4>Fully Customizable</h4>
                    <p>Improve brand awareness and content discoverability through customizable
                        links, supercharging audience engagement.</p>
                </div>

            </div>


        </Container>
    )
}


export default Statistics;