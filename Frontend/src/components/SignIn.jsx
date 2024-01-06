import Navbar from "./Navbar";
import { useState } from "react";
import SignInclipart from "../assets/SignIn-Clipart.svg"
import line from "../assets/line.png"
import Google from "../assets/Google.png"
function SignIn() {
    const [Email, setEmail] = useState("");
    const [Passward, setPassward] = useState("")
    return (
        < >

            <Navbar />
            <div className="bg-primary h-[110vh] w-[100%] flex ">
                <img className=" ml-[5vw] drop-shadow-2xl w-[50%] mb-[8vh] " src={SignInclipart} alt="" />
                <div className="w-[50%]">
                    <div className=" mt-[9vh] rounded-lg bg-tertiary w-[80%] h-[70vh] flex flex-col ">
                        <div className=" mt-[5vh] ml-[3vw]">Email</div>
                        <input className=" mt-[2vh] ml-[3vw] mr-[3vw] h-[5vh] rounded-lg " type="text" name="email"  value={Email} onChange={(e) => setEmail(e.target.value)} />
                        <div className=" mt-[2vh] ml-[3vw]">Passward</div>
                        <input className=" mt-[2vh] ml-[3vw] mr-[3vw] h-[5vh] rounded-lg " type="text" name="passward"  value={Passward} onChange={(e) => setPassward(e.target.value)} />
                        <button className=" text-[24px] ml-[43%] mt-[5vh] border-2 border-secondary drop-shadow-[0_5px_5px_rgba(58,163,159,1)] bg-secondary w-[6vw] rounded-lg text-white " > SignIn</button>
                        <img className="mt-[4vh] drop-shadow-2xl" src={line} alt="" />

                        <button className="flex rounded-lg border-2 border-black ml-[15%] mr-[15%] items-center bg-primary drop-shadow-2xl " >
                            <img className=" ml-[4vw] h-[5vh] w-[3vw]" src={Google} alt="Google" />
                            <p className="  ml-[2vw] text-[24px] ">SignIn with Google</p>
                        </button>
                    </div>
                    <div className=" mt-[4vh] w-[80%] h-[10vh] flex flex-col items-center">
                        <div className="text-[24px]">Don't Have Account ?</div>
                        <button className="mt-[2vh] flex   border-2 border-secondary drop-shadow-[0_5px_5px_rgba(58,163,159,0.8)] bg-secondary  rounded-lg text-white  " >
                            <p className="  w-[24vw] text-[22px] ">Create an Buyer's Account</p>
                        </button>
                        <button className=" mt-[2vh] flex   border-2 border-secondary drop-shadow-[0_5px_5px_rgba(58,163,159,0.8)] bg-secondary  rounded-lg text-white " >
                            <p className=" w-[24vw] text-[22px] ">Create an Seller's Account</p>
                        </button>
                    </div>
                </div>
            </div>

        </>
    );
}
export default SignIn