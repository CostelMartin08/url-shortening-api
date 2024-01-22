import React from "react";
import { BgLink, BgLinkMobile } from '../assets/BgLink';
import LinkButton from "../assets/LinkButton";
import APISet from "./APISet";
const LinkArea = () => {


    return (
        <div className="my-3">

            <div className="link-background mx-auto">

                <div className="input-set">

                    <APISet />

                  
                </div>

                <div className="svg-set d-none d-lg-block">

                    <BgLink radius="15px" />

                </div>

                <div className="svg-set d-lg-none">

                    <BgLinkMobile />

                </div>

            </div>

            <div className="history mt-4">

                <div className="link-info font">
                    <h4 className="h6 mt-2 w-100 clr-blk font">https://www.martinescuconstantin.com</h4>
                    <div className="hl d-lg-none"></div>
                    <div className="width-control d-flex align-items-lg-center flex-column flex-lg-row gap-3">

                        <a className="link font-p">martinescuconstantin.com</a>
                        <LinkButton newColor="hsl(257, 27%, 26%)" bg="hsl(180, 66%, 49%)" width="100%" height="45px" radius="6px" colorL="white" text="Coppy" newText="Copied!" />
                    </div>
                </div>


                <div className="link-info font">
                    <h4 className="h6 mt-2 w-100 clr-blk font">https://www.martinescuconstantin.com</h4>
                    <div className="hl d-lg-none"></div>
                    <div className="width-control d-flex align-items-lg-center flex-column flex-lg-row gap-3">

                        <a className="link font-p">martinescuconstantin.com</a>
                        <LinkButton newColor="hsl(257, 27%, 26%)" bg="hsl(180, 66%, 49%)" width="100%" height="45px" radius="6px" colorL="white" text="Coppy" newText="Copied!" />
                    </div>
                </div>

                <div className="link-info font">
                    <h4 className="h6 mt-2 w-100 clr-blk font">https://www.martinescuconstantin.com</h4>
                    <div className="hl d-lg-none"></div>
                    <div className="width-control d-flex align-items-lg-center flex-column flex-lg-row gap-3">

                        <a className="link font-p">martinescuconstantin.com</a>
                        <LinkButton newColor="hsl(257, 27%, 26%)" bg="hsl(180, 66%, 49%)" width="100%" height="45px" radius="6px" colorL="white" text="Coppy" newText="Copied!" />
                    </div>
                </div>

            </div>

        </div>
    )
}

export default LinkArea;