
import { useState } from "react";
import {useNavigate } from 'react-router-dom';
import Clipart from "../assets/Buyerregister.svg"
import line from "../assets/line.png"
import Google from "../assets/Google.png"
import { toast } from 'react-toastify';
import { useTranslation } from "react-i18next";

function Register() {
    const { t } = useTranslation()

    const navigate = useNavigate("/");
    
    const API_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000';

    const [user, setUser] = useState({
        userName: "",
        email: "",
        password: "",
    })

    const handleInput = (e) => {
        console.log(e);

        const name = e.target.name;
        const value = e.target.value;

        setUser({
            ...user,
            [name]: value,
        })

    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`${API_URL}/api/v1/users/register`, {

                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user)
            });

            if (response.ok) {

                const res = await response.json();

                setUser({ userName: "", email: "", password: "" })

                toast.success(res.message);

                navigate("/");
            }
            else{
                const erroMessage = await response.json();
                toast.error(erroMessage.message);
            }

        } catch (error) {
            if (error instanceof ApiError) {
                alert(`Error: ${error.message}`);
            } else {
                console.error('Unexpected error:', error);
            }
        }
    };

    return (
        < >
            <div className="bg-primary lg:h-[88.9vh] h-auto  w-full flex font-playfair">
                <div className="lg:flex justify-center items w-[50vw] hidden">
                <img className="drop-shadow-2xl w-[80%]  " src={Clipart} alt="" />
                </div>
                <div className="flex flex-col justify-start items-center lg:pt-2 pt-8">
                    <div className="rounded-[35px] bg-tertiary lg:w-[70%] w-[90%] gap-1 lg:h-[65vh] h-auto flex flex-col  p-6">
                        <div className="self-center font-semibold text-lg">{t("Create an Account")}</div>
                        <form onSubmit={handleSubmit} method="POST">
                        <div>
                                <div className=" pl-1 pb-2">{t("Name")}</div>
                                <input className="rounded-lg h-[40px] w-[100%]" type="text" name="userName" value={user.userName} onChange={handleInput} />
                            </div>
                            <div>
                                <div className="pl-1 pb-2">{t("Email")}</div>
                                <input className="rounded-lg h-[40px] w-[100%]" type="text" name="email" value={user.email} onChange={handleInput} />
                            </div>
                            <div>

                                <div className="pl-1 pb-2">{t("Password")}</div>
                                <input className="rounded-lg h-[40px] w-[100%]" type="text" name="password" value={user.password} onChange={handleInput} />
                            </div>
                            <div>
                                
                            </div>
                            <div className="self-center lg:pl-[40%] pl-[35%] pt-4">
                                <button className="drop-shadow-[0_5px_5px_rgba(58,163,159,0.8)] px-5 py-2  bg-secondary text-white  rounded-md" >
                                    {t("Register")}
                                </button>
                            </div>
                        
                        </form>
                        <img className=" drop-shadow-2xl relative lg:bottom-4" src={line} alt="" />
                        <button className="flex justify-center gap-4 rounded-lg border-[1px] border-black items-center bg-primary drop-shadow-2xl w-[80%] self-center p-2 relative lg:bottom-12" >
                            <img className="h-[32px]" src={Google} alt="Google" />
                            <p className=" ">{t("Register with Google")}</p>
                        </button>
                    </div>
                    <div className=" w-[80%] flex flex-col items-center gap-1 pt-2 lg:mb-0 mb-4">
                        <div className="">{t("Already Have Account ?")}</div>
                        <a href="/SignIn">
                            <button className="flex   border-2 border-secondary drop-shadow-[0_5px_5px_rgba(58,163,159,0.8)] bg-secondary  rounded-md px-3 py-1 text-white" >
                                <p className=" ">{t("SignIn")}</p>
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Register

