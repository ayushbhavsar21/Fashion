import React from "react"
import Navbar from "./Navbar";
import Back from "../assets/arrow-back.svg"
import Forward from "../assets/arrow-forward.svg"
import Bag from "../assets/bag.png"
import Productimage from "../assets/section41.jpg"
function Product() {
    return (
        <>
            <Navbar/>
            <div className="flex bg-primary h-[130vh] sm:h-[90vh] ">
                <div className="w-[50%] pl-[2vw]  ">
                    <button className=" mt-[1vh] flex "> <img src={Back} alt="" /><div className="">Back</div> </button>
                    <div className=" text-[5vh] mt-[4vh] mb-[2vh] ml-[0] ">
                        Meryl Lounge Chair
                    </div>
                    <div className=" text-[3vh] ml-[3vw] ">
                        ₹10000
                    </div>
                    <div className="mt-[10vh] mb-[3vh] ">
                        The gently curved lines accentuated by sewn details are kind to your body and pleasant to look at. Also, there's a tilt and height-adjusting mechanism that's built to outlast years of ups and downs.
                    </div>
                    <div className="flex  ">
                        <div className=" flex justify-between items-center m-[2vh] w-[40%] h-[7vh] rounded-xl border border-black ">
                            <button> <div className=" mb-[1vh] ml-[1vw] text-[5vh] ">+</div></button>
                            <div className=" text-[3vh] ">1</div>
                            <button> <div className=" mb-[1vh] mr-[1vw] text-[5vh] ">-</div></button>
                        </div>
                        
                        <div className=" flex justify-center items-center text-[3vh] m-[2vh] w-[40%] h-[7vh] rounded-xl border border-black ">
                            <button children=" " >BUY NOW</button>
                        </div>
                        
                    </div>
                    <div className="mt-[3vh] "> Free 3-5 day shipping  •  Tool-free assembly  •  30-day trial </div>
                    <button>
                    <div className="flex h-[4vh] items-center mt-[5vh] ">
                        <img  src={Bag} alt="cart" /><div className="text-[18px] ">Add to Cart</div></div></button>
                </div>
                <div className="w-[50%] h-[80vh] flex justify-center flex-col  ">
                    <div className="flex ml-[80%]  " >01 / 05 </div>
                    <div className=" mt-[12vh]  w-[100%] flex justify-center  "><img className="rounded-2xl h-[60vh]  " src={Productimage} alt="" /> </div>
                    <div className=" w-[100%] flex justify-center mt-[2vh] ">
                    <div className="flex gap-[2vw] " > <button> <img src={Back} alt="" /> </button> <button> <img src={Forward} alt="" /> </button> </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Product