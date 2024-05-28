import { useState } from "react";
import line from "../assets/line.png"
import Google from "../assets/googleLogo.svg"
import SignInclipart from "../assets/SignIn-Clipart.svg"
import {useNavigate} from 'react-router-dom';
import { useAuth } from "../contexts/AuthContext";
import { toast } from 'react-toastify';
import { useTranslation } from "react-i18next";

function SignIn() {
    const {t}=useTranslation()

    const API_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000';
    const navigate = useNavigate();
    
    const {storeTokenInLS} = useAuth();

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
            const response = await fetch(`${API_URL}/api/v1/users/login`,{
            method: "POST",
            crossDomain: true,
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user)
        })

        if(response.ok){
            const res = await response.json();
            storeTokenInLS(res.data.accessToken);
            setUser({
                email: "",
                password: ""
            })

            toast.success(res.message);

            navigate("/");
        }
        else{
            const errorResponse = await response.json();
            toast.error(errorResponse.message);
        }

        } catch (error) {
          console.log(error);
        }
    }

    return (
        < >
            <div className="bg-primary lg:h-[88.9vh] h-auto w-[100%] flex justify-around font-playfair">
            <div className="lg:flex justify-center items w-[50vw] hidden">
                <img className="drop-shadow-2xl w-[80%]  " src={SignInclipart} alt="" />

                </div>
                <div className=" w-[90%] flex flex-col lg:justify-start pt-8 items-center justify-center">
                    <div className="rounded-[35px] bg-tertiary sm:w-[70%] w-[100%] lg:h-[68vh] h-auto flex flex-col sm:gap-1 gap-4 p-8">
                    <div className="self-center font-semibold text-lg">{t("SignIn")}</div>
                        <form onSubmit={handleSubmit}>
                        <div className="sm:pb-0 pb-2">
                        <div className="pl-1 pb-2">{t("Email")}</div>
                        <input className="rounded-lg h-[45px] w-[100%]" type="text" name="email" value={user.email} onChange={handleInput} />
                        </div>
                        
                        <div className="sm:pb-0 pb-2">
                        <div className="pl-1 pb-2">{t("Password")}</div>
                        <input className="h-[45px] w-[100%]  rounded-lg " type="text" name="password" value={user.password} onChange={handleInput} />
                        </div>
                        <div className="flex justify-center">
                        <button className="drop-shadow-[0_5px_5px_rgba(58,163,159,0.8)] px-4 py-3 w-[120px] bg-secondary text-white  rounded-md  mt-4" >
                           {t("SignIn")} 
                        </button>
                        </div>
                        
                        </form>

                        <img className=" drop-shadow-2xl " src={line} alt="" />

                        <button className="flex justify-center gap-4 rounded-lg border-[1px] border-black items-center bg-primary drop-shadow-2xl w-[80%] self-center p-2" >
                            <img className="h-[32px]" src={Google} alt="Google" />
                            <p className="sm:text-lg text-[14px]">{t("Sign In with Google")}</p>
                        </button>

                        <div className=" text-red-600 flex justify-center pt-4">{Error}</div>
                    </div>
                    <div className=" w-[80%] flex flex-col justify-center items-center mt-4 gap-3">
                        <div className="">{t("Don't Have Account ?")}</div>
                        <a href="/Register" className="lg:mb-0 mb-4">
                            <button className="flex   border-2 border-secondary drop-shadow-[0_5px_5px_rgba(58,163,159,0.8)] bg-secondary  rounded-md text-white  px-3 py-2" >
                                <p className="">{t("Create an Account")}</p>
                            </button>
                        </a>
                      
                    </div>
                </div>
            </div>
        </>
    );
}
export default SignIn;