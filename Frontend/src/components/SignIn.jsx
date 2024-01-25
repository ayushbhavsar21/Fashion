import { useState } from "react";
import line from "../assets/line.png"
import Google from "../assets/googleLogo.svg"
import SignInclipart from "../assets/SignIn-Clipart.svg"
import {useNavigate} from 'react-router-dom';
import Navbar from "./Navbar";
import { useAuth } from "../contexts/AuthContext";

function SignIn() {

    const navigate = useNavigate();
    
    const {storeTokenInCookie} = useAuth();

    const [user, setUser] = useState({
        email: "",
        password: ""
    })

    const handleInput = (e) =>{
        const name = e.target.name;
        const value = e.target.value;

        setUser({
            ...user,
            [name] : value
        })
    }

    const handleSubmit = async(e)=>{
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:8000/api/v1/users/login',{
            method: "POST",
            crossDomain: true,
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user)
        })

        if(response.ok){

            const res = await response.json();

            storeTokenInCookie(res.data.refreshToken);

            setUser({
                email: "",
                password: ""
            })
            navigate("/");
        }

        } catch (error) {

        }
    }

    return (
        < >
           <Navbar/>
            <div className="bg-primary lg:h-[88.9vh] h-auto w-[100%] flex justify-around font-playfair">
            <div className="lg:flex justify-center items w-[50vw] hidden">
                <img className="drop-shadow-2xl w-[80%]  " src={SignInclipart} alt="" />

                </div>
                <div className=" w-[90%] flex flex-col lg:justify-start pt-8 items-center justify-center">
                    <div className="rounded-[35px] bg-tertiary sm:w-[70%] w-[100%] lg:h-[68vh] h-auto flex flex-col sm:gap-1 gap-4 p-8">
                    <div className="self-center font-semibold text-lg">SignIn</div>
                        <form onSubmit={handleSubmit}>
                        <div className="sm:pb-0 pb-2">
                        <div className="pl-1 pb-2">Email</div>
                        <input className="rounded-lg h-[45px] w-[100%]" type="text" name="email" value={user.email} onChange={handleInput} />
                        </div>
                        
                        <div className="sm:pb-0 pb-2">
                        <div className="pl-1 pb-2">Password</div>
                        <input className="h-[45px] w-[100%]  rounded-lg " type="text" name="password" value={user.password} onChange={handleInput} />
                        </div>
                        <div className="flex justify-center">
                        <button className="drop-shadow-[0_5px_5px_rgba(58,163,159,0.8)] px-4 py-3 w-[120px] bg-secondary text-white  rounded-md  mt-4" >
                           SignIn 
                        </button>
                        </div>
                        
                        </form>

                        <img className=" drop-shadow-2xl " src={line} alt="" />

                        <button className="flex justify-center gap-4 rounded-lg border-[1px] border-black items-center bg-primary drop-shadow-2xl w-[80%] self-center p-2" >
                            <img className="h-[32px]" src={Google} alt="Google" />
                            <p className="sm:text-lg text-[14px]">Sign In with Google</p>
                        </button>

                        <div className=" text-red-600 flex justify-center pt-4">{Error}</div>
                    </div>
                    <div className=" w-[80%] flex flex-col justify-center items-center mt-4 gap-3">
                        <div className="">Don't Have Account ?</div>
                        <a href="/Register" className="lg:mb-0 mb-4">
                            <button className="flex   border-2 border-secondary drop-shadow-[0_5px_5px_rgba(58,163,159,0.8)] bg-secondary  rounded-md text-white  px-3 py-2" >
                                <p className="">Create an Account</p>
                            </button>
                        </a>
                      
                    </div>
                </div>
            </div>
        </>
    );
}
export default SignIn;