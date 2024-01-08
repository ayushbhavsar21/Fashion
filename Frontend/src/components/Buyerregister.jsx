import Navbar from "./Navbar";
import { useState } from "react";
import Clipart from "../assets/Buyerregister.svg"
import line from "../assets/line.png"
import Google from "../assets/Google.png"
function Buyerregister() {

    const [Name, setName] = useState("");
    const [Email, setEmail] = useState("");
    const [Passward, setPassward] = useState("")
    return (
        < >


            <Navbar />
            <div className="bg-primary h-[130vh] w-[100%] flex max-[750px]:hidden ">
                <img className=" ml-[5vw] drop-shadow-2xl w-[40%] mb-[8vh] " src={Clipart} alt="" />
                <div className=" ml-[10%] w-[50%]">
                    <div className=" mt-[9vh] rounded-lg bg-tertiary w-[80%] h-[85vh] flex flex-col ">

                        <div className=" mt-[5vh] ml-[10vw] text-[18px] lg:text-[22px]  ">Create a Buyer's Account</div>
                        <div className=" mt-[5vh] ml-[3vw]">Name</div>
                        <input className=" mt-[2vh] ml-[3vw] mr-[3vw] h-[5vh] rounded-lg " type="text" name="name" value={Name} onChange={(e) => setName(e.target.value)} />

                        <div className=" mt-[2vh] ml-[3vw]">Email</div>
                        <input className=" mt-[2vh] ml-[3vw] mr-[3vw] h-[5vh] rounded-lg " type="text" name="email" value={Email} onChange={(e) => setEmail(e.target.value)} />
                        <div className=" mt-[2vh] ml-[3vw]">Password</div>
                        <input className=" mt-[2vh] ml-[3vw] mr-[3vw] h-[5vh] rounded-lg " type="text" name="passward" value={Passward} onChange={(e) => setPassward(e.target.value)} />
                        <button className=" ml-[36%] mt-[4vh] w-[10vw]   border-2 border-secondary drop-shadow-[0_5px_5px_rgba(58,163,159,0.8)] bg-secondary  rounded-lg text-white flex justify-center " >
                            <p className="  text-[16px] md:text-[18px] lg:text-[22px] ">Register</p>
                        </button>
                        <img className="mt-[4vh] drop-shadow-2xl" src={line} alt="" />

                        <button className="flex rounded-lg border-2 border-black ml-[15%] mr-[15%] items-center bg-primary drop-shadow-2xl " >
                            <img className=" ml-[4vw] h-[5vh] w-[3vw]" src={Google} alt="Google" />
                            <p className="  ml-[2vw] text-[16px] md:text-[18px] lg:text-[22px] ">Register with Google</p>
                        </button>
                    </div>
                    <div className=" mt-[4vh] w-[80%] h-[10vh] flex flex-col items-center">
                        <div className="text-[24px]">Already Have Account ?</div>
                        <a href="/SignIn">
                        <button className=" mt-[2vh] flex   border-2 border-secondary drop-shadow-[0_5px_5px_rgba(58,163,159,0.8)] bg-secondary  rounded-lg text-white " >
                                <p className="  w-[24vw] text-[14px] max-[1100px]:text-[16px] xl:text-[22px] ">SignIn</p>
                            </button>
                        </a>
                    </div>
                    <div className=" mt-[4vh] w-[80%] h-[10vh] flex flex-col items-center">
                        <div className="text-[24px]">Don't Have Account ?</div>
                        <a href="/Sellerregister">
                            <button className=" mt-[2vh] flex   border-2 border-secondary drop-shadow-[0_5px_5px_rgba(58,163,159,0.8)] bg-secondary  rounded-lg text-white " >
                                <p className=" w-[24vw] text-[14px] max-[1100px]:text-[16px] xl:text-[22px] ">Create a Seller's Account</p>
                            </button>
                        </a>
                    </div>
                </div>
            </div>
            <div className="bg-primary w-[100%] h-[115vh] flex  min-[750px]:hidden  ">
                <div className="bg-primary">
                    <div className=" ml-[20%] w-[80%]">
                        <div className=" mt-[9vh] rounded-lg bg-tertiary w-[80%] h-[70vh] flex flex-col ">
                            <div className=" mt-[4vh] ml-[10vw] text-[18px] lg:text-[22px]  ">Create a Buyer's Account</div>
                            <div className=" mt-[2vh] ml-[3vw]">Name</div>
                            <input className=" mt-[1vh] ml-[3vw] mr-[3vw] h-[5vh] rounded-lg " type="text" name="name" value={Name} onChange={(e) => setName(e.target.value)} />

                            <div className=" mt-[2vh] ml-[3vw]">Email</div>
                            <input className=" mt-[1vh] ml-[3vw] mr-[3vw] h-[5vh] rounded-lg " type="text" name="email" value={Email} onChange={(e) => setEmail(e.target.value)} />
                            <div className=" mt-[2vh] ml-[3vw]">Password</div>
                            <input className=" mt-[1vh] ml-[3vw] mr-[3vw] h-[5vh] rounded-lg " type="text" name="passward" value={Passward} onChange={(e) => setPassward(e.target.value)} />
                            <button className=" ml-[40%] mt-[4vh] w-[16vw]  max-[376px]:w-[18vw]  border-2 border-secondary drop-shadow-[0_5px_5px_rgba(58,163,159,0.8)] bg-secondary  rounded-lg text-white flex justify-center " >
                                <p className="  text-[16px] max-[376px]:text-[14px] ">Register</p>
                            </button>
                            <img className="mt-[2vh] drop-shadow-2xl" src={line} alt="" />

                            <button className="flex rounded-lg border-2 border-black ml-[15%] mr-[15%] items-center bg-primary drop-shadow-2xl justify-around " >
                                <img className="  h-[3vh] w-[3vw] max-[376px]:w-[4vw] " src={Google} alt="Google" />
                                <p className="   text-[17px] max-[376px]:text-[12px]  ">Register with Google</p>
                            </button>
                        </div>
                        <div className=" mt-[4vh] w-[80%] h-[10vh] flex flex-col items-center">
                            <div className="text-[24px] max-[376px]:text-[18px]"> Already Have Account ?</div>
                            <a href="/SignIn">
                            <button className=" mt-[2vh] flex justify-center  w-[60vw]  border-2 border-secondary drop-shadow-[0_5px_5px_rgba(58,163,159,0.8)] bg-secondary  rounded-lg text-white " >
                                <p className="  ml-[2vw] mr-[2vw]  text-[16px] max-[376px]:text-[14px] "> SignIn </p>
                            </button>
                            </a>
                        </div>
                        <div className=" mt-[4vh] w-[80%] h-[10vh] flex flex-col items-center">
                            <div className="text-[24px] max-[376px]:text-[18px]">Want Seller's Account ?</div>
                            <a href="/Sellerregister">
                            <button className=" mt-[2vh] flex justify-center  w-[60vw] border-2 border-secondary drop-shadow-[0_5px_5px_rgba(58,163,159,0.8)] bg-secondary  rounded-lg text-white " >
                                <p className=" ml-[2vw] mr-[2vw]  text-[16px] max-[376px]:text-[14px] ">Create an Seller's Account</p>
                            </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Buyerregister