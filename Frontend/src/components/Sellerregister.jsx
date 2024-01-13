import Navbar from "./Navbar";
import { useState } from "react";
import Clipart from "../assets/Sellerregister.svg"
import line from "../assets/line.png"
import Google from "../assets/Google.png"
function Sellerregister() {

    const [user , setUser] = useState({
        userName: "",
        email: "",
        password: ""
    })

    const handleInput = (e)=>{
        console.log(e);

        const name = e.target.name;
        const value = e.target.value;

        setUser({
            ...user,
            [name] : value,
        })

    }

    const handleSubmit = async (e)=>{
        e.preventDefault();

        console.log(user);

        try{
            const response = await fetch('http://localhost:8000/api/v1/users/register/seller',{

            method: "POST",
            headers: {
               "Content-Type" : "application/json",
            },
            body: JSON.stringify(user)
        });

        if(response.ok){
            setUser({ userName: "", email: "", password: "" })
        }
        
        console.log(response);

        }catch(error){

        }
    };

    return (
        < >


            <Navbar />
            <div className="bg-primary h-[130vh] w-[100%] flex max-[750px]:hidden ">
                <img className=" ml-[5vw] drop-shadow-2xl w-[40%] mb-[8vh] " src={Clipart} alt="" />
                <div className=" ml-[10%] w-[50%]">
                    <div className=" mt-[9vh] rounded-lg bg-tertiary w-[80%] h-[85vh] flex flex-col ">

                        <div className=" mt-[5vh] ml-[10vw] text-[18px] lg:text-[22px]  ">Create a Seller's Account</div>

                        <form onSubmit={handleSubmit}>
                        <div className=" mt-[5vh] ml-[3vw]">Company Name / Business</div>
                        <input className=" mt-[2vh] ml-[3vw] mr-[3vw] h-[5vh] rounded-lg " type="text" name="userName" value={user.userName} onChange={handleInput} />

                        <div className=" mt-[2vh] ml-[3vw]">Email</div>
                        <input className=" mt-[2vh] ml-[3vw] mr-[3vw] h-[5vh] rounded-lg " type="text" name="email" value={user.email} onChange={handleInput} />
                        <div className=" mt-[2vh] ml-[3vw]">Password</div>
                        <input className=" mt-[2vh] ml-[3vw] mr-[3vw] h-[5vh] rounded-lg " type="text" name="password" value={user.password} onChange={handleInput} />
                        <button className=" ml-[36%] mt-[4vh] w-[10vw]   border-2 border-secondary drop-shadow-[0_5px_5px_rgba(58,163,159,0.8)] bg-secondary  rounded-lg text-white flex justify-center " >
                            <p className="  text-[16px] md:text-[18px] lg:text-[22px] ">Register</p>
                        </button>
                        </form>
                        
                        <img className="mt-[4vh] drop-shadow-2xl" src={line} alt="" />

                        <button className="flex rounded-lg border-2 border-black ml-[15%] mr-[15%] items-center bg-primary drop-shadow-2xl " >
                            <img className=" ml-[4vw] h-[5vh] w-[3vw]" src={Google} alt="Google" />
                            <p className="  ml-[2vw] text-[16px] md:text-[18px] lg:text-[22px] ">Register with Google</p>
                        </button>
                    </div>
                    <div className=" mt-[4vh] w-[80%] h-[10vh] flex flex-col items-center">
                        <div className="text-[24px]">Already Have Account ?</div>
                        <a href="/SignIn/Seller">
                        <button className=" mt-[2vh] flex   border-2 border-secondary drop-shadow-[0_5px_5px_rgba(58,163,159,0.8)] bg-secondary  rounded-lg text-white " >
                                <p className="  w-[24vw] text-[14px] max-[1100px]:text-[16px] xl:text-[22px] ">SignIn</p>
                            </button>
                        </a>
                    </div>
                    <div className=" mt-[4vh] w-[80%] h-[10vh] flex flex-col items-center">
                        <div className="text-[24px]">Want a Buyer's Account ?</div>
                        <a href="/Register/Buyer">
                            <button className=" mt-[2vh] flex   border-2 border-secondary drop-shadow-[0_5px_5px_rgba(58,163,159,0.8)] bg-secondary  rounded-lg text-white " >
                                <p className=" w-[24vw] text-[14px] max-[1100px]:text-[16px] xl:text-[22px] ">Create a Buyer's Account</p>
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Sellerregister