import React from "react";
import Button from "../assets/Button";
import { BgBoostDesktop, BgBoostMobile } from "../assets/BgLink";
import { Container } from 'react-bootstrap'
import Social from "../assets/SocialIcon";

const Footer = () => {


    return (

        <section className="bg-footer">

            <div className="get-started font-p-white">

                <BgBoostDesktop className="d-none d-sm-block" absolute="absolute" />
                
                <BgBoostMobile className="d-sm-none" absolute="absolute"/>

                <div>

                    <h4 className="font-sm mb-3">Boost your links today</h4>

                    <Button color="hsl(180, 66%, 49%)" width="180px" height="50px" border="25px" colorL="white" text="Get Started" />

                </div>

            </div>

            <Container className="footerII">

                <div className="row set-foo font-p-gray">

                    <div className="col-12 col-lg-4 mb-4 mb-lg-0">
                        <h2 className="font-sm my-3 my-lg-0">Shortly</h2>
                    </div>

                    <div className="col-12 col-lg-8  row">

                        <div className="col-lg col-12 set-foo mb-3 mb-lg-0">
                            <h5 className="mb-3 font-p-white">Features</h5>
                            <ul className="ul-set-foo">
                                <li>Link Shortening</li>
                                <li>Branded Links</li>
                                <li>Analytics</li>
                            </ul>
                        </div>
                        <div className="col-lg col-12 set-foo mb-3 mb-lg-0">
                            <h5 className="mb-3 font-p-white">Resources</h5>

                            <ul className="ul-set-foo">

                                <li>Blog</li>
                                <li>Developers</li>
                                <li>Support</li>
                            </ul>

                        </div>

                        <div className="col-lg col-12 set-foo mb-3 mb-lg-0">
                            <h5 className="mb-3 font-p-white">Company</h5>

                            <ul className="ul-set-foo">
                                <li>About</li>
                                <li>Our Team</li>
                                <li>Careers</li>
                                <li>Contact</li>
                            </ul>
                        </div>

                        <div className="col-12 col-lg set-foo">


                            <Social />

                        </div>

                    </div>

                </div>

            </Container>

        </section>
    )
}

export default Footer;