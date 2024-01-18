import React from "react";
import Button from "../assets/Button";
import { BgLink } from '../assets/BgLink'

const LinkArea = () => {


    return (
        <div className="my-5">

            <div className="link-background mx-auto">

                <div className="input-set">

                    <input placeholder="Shorten a link here..."></input>

                    <Button color="hsl(180, 66%, 49%)" width="140px" height="50px" border="5px" colorL="white" text="Shorten It!" />

                </div>

                <div className="svg-set">

                    <BgLink radius="15px" />

                </div>

            </div>

            <div className="history mt-4">

                <div>
                    <h4 className="h6 m-0">https://www.martinescuconstantin.com</h4>
                    <div>

                        <a className="link me-4">martinescuconstantin.com</a>
                        <Button color="hsl(180, 66%, 49%)" width="80px" height="40px" border="5px" colorL="white" text="Coppy" />
                    </div>
                </div>

                <div>
                    <h4 className="h6 m-0">https://www.martinescuconstantin.com</h4>
                    <div>

                        <a className="link me-4">martinescuconstantin.com</a>
                        <Button color="hsl(180, 66%, 49%)" width="80px" height="40px" border="5px" colorL="white" text="Coppy" />
                    </div>
                </div>

                <div>
                    <h4 className="h6 m-0">https://www.martinescuconstantin.com</h4>
                    <div>

                        <a className="link me-4">martinescuconstantin.com</a>
                        <Button color="hsl(180, 66%, 49%)" width="80px" height="40px" border="5px" colorL="white" text="Coppy" />
                    </div>
                </div>

            </div>

        </div>
    )
}

export default LinkArea;