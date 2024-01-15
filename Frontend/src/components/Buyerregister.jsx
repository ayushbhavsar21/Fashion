import { useState } from "react";
import line from "../assets/line.png"
import Google from "../assets/Google.png"

function Buyerregister() {

    const [user, setUser] = useState({
        userName: "",
        email: "",
        password: ""
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

        console.log(user);

        try {
            const response = await fetch('http://localhost:8000/api/v1/users/register/buyer', {

                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user)
            });

            if (response.ok) {
                setUser({ userName: "", email: "", password: "" })
            }

            console.log(response);

        } catch (error) {

        }
    };

    return (
        < >



            <div className="bg-primary lg:h-[88.9vh] h-auto  w-[100%] flex font-playfair">

                <div className="flex flex-col justify-start items-center  w-[100%] h-[100%] pt-4">
                    <div className="rounded-[35px] bg-tertiary  sm:w-[70%] w-[90%] lg:h-[74vh] sm:gap-1 gap-4 flex flex-col p-6">
                        <div className="self-center font-semibold text-lg">Create a Buyer's Account</div>
                        <form onSubmit={handleSubmit}>
                            <div className="sm:pb-0 pb-2">
                                <div className=" pl-1 pb-2">Name</div>
                                <input className="rounded-lg h-[40px] w-[100%]" type="text" name="userName" value={user.userName} onChange={handleInput} />
                            </div>
                            <div className="sm:pb-0 pb-2">
                                <div className="pl-1 pb-2">Email</div>
                                <input className="rounded-lg h-[40px] w-[100%]" type="text" name="email" value={user.email} onChange={handleInput} />
                            </div>

                            <div className="sm:pb-0 pb-2">

                                <div className="pl-1 pb-2">Password</div>
                                <input className="rounded-lg h-[40px] w-[100%]" type="text" name="password" value={user.password} onChange={handleInput} />
                            </div>
                            <div className="self-center lg:pl-[40%] pl-[35%] pt-4">
                                <button className="drop-shadow-[0_5px_5px_rgba(58,163,159,0.8)] px-5 py-2  bg-secondary text-white  rounded-md" >
                                    Register
                                </button>
                            </div>

                        </form>
                        <img className=" drop-shadow-2xl relative lg:bottom-4" src={line} alt="" />

                        <button className="flex justify-center gap-4 rounded-lg border-[1px] border-black items-center bg-primary drop-shadow-2xl w-[80%] self-center p-2 relative lg:bottom-12" >
                            <img className="h-[32px]" src={Google} alt="Google" />
                            <p className=" sm:text-lg text-[14px]">Register with Google</p>
                        </button>
                    </div>
                    <div className=" w-[80%] flex flex-col items-center gap-1 pt-2 lg:mb-0 mb-4">
                        <div className="">Already Have Account ?</div>
                        <a href="/SignIn">
                            <button className="flex   border-2 border-secondary drop-shadow-[0_5px_5px_rgba(58,163,159,0.8)] bg-secondary  rounded-md px-3 py-1 text-white" >
                                <p className=" ">SignIn</p>
                            </button>
                        </a>
                    </div>
                  
                </div>
            </div>
        </>
    );
}
export default Buyerregister