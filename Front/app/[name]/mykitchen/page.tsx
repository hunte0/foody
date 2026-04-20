"use client";
import Link from "next/link"
import Image from "next/image";
import {useEffect} from "react"

type card_info = {
    title : String
    info : String
    duration : String
    difficulty : String
    serving : String
}
function Card (props : card_info){
    const fetching = async () =>{
    try{
        const res = await fetch ("http://localhost:5000/api/auth/me")
        const data = await res.json();
        console.log(data)
    }
    catch (err){
        console.error()
    }
    }
   
    return (
        <div className="flex flex-col rounded-4xl bg-[#3d1e06] shadow-lg overflow-hidden">
            <div className="w-full rounded-4xl">
               <Image 
                    src="/images/ma9rouna.jpg" 
                    alt="Discover Foody"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-full h-80 object-cover rounded-xl"
                />
            </div>
            <div className="w-full h-full p-5 pb-10 flex flex-col gap-1">
                <h1 className="text-5xl">{props.title}</h1>
                <p className="text-2xl opacity-70">{props.info}</p>
                    <ul className="flex justify-between items-center mt-5 gap-3 pl-7 pr-7 list-disc marker:text-[#EF9F27] marker:text-3xl font-bold text-3xl">
                        <li className="">{props.duration}</li>
                        <li className="">{props.difficulty}</li>
                        <li className=" ">{props.serving}</li>
                    </ul>

                <div className="w-full flex justify-center items-center gap-4 mt-14">
                    <button className="w-full border text-2xl border-gray-500 rounded-xl p-2 pl-5 pr-5 hover:drop-shadow-[0px_0px_8px_rgba(0,0,0,0.2)] hover:bg-taupe-600 hover:border-gray-300">Edit</button>
                    <button className="w-full border text-2xl border-gray-500 rounded-xl p-2 pl-5 pr-5 hover:drop-shadow-[0px_0px_8px_rgba(0,0,0,0.2)] hover:bg-taupe-600 hover:border-gray-300">Delete</button>
                </div>

            </div>
        </div>
    )
}





export default function Mine (){
    return (
        <div className="w-full h-screen flex flex-col pl-80 pr-80 mt-25 gap-5">
            <div className="flex  ">
                <h1 className="text-2xl opacity-80">Welcome back, Chef Ahmed 👋</h1>
            </div>
            <div className="flex justify-between">
                <h1 className="text-5xl">My <span className="text-[#EF9F27]">Kitchen</span></h1>
                <div>
                    <Link href="mykitchen/add">
                    <button className="w-full border text-2xl border-gray-500 rounded-xl p-2 pl-5 pr-5 hover:drop-shadow-[0px_0px_8px_rgba(0,0,0,0.2)] hover:bg-taupe-600 hover:border-gray-300">
                        + Create Recipe
                    </button>
                    </Link>
                </div>
            </div>
            <div className="grid grid-cols-3 gap-4 w-full">
                <div className="flex flex-col gap-1 bg-[#532a0b] pl-5 pt-5 pb-5 border rounded-xl border-[rgb(244,164,43,0.6)]">
                    <h1 className="text-[#EF9F27] text-4xl">6</h1>
                    <p className="text-2xl">Total recipes</p>
                </div>
               <div className="flex flex-col gap-1 bg-[#532a0b] pl-5 pt-5 pb-5 border rounded-xl border-[rgb(244,164,43,0.6)]">
                    <h1 className="text-[#EF9F27] text-4xl">2</h1>
                    <p className="text-2xl">Healthy</p>
                </div>
                <div className="flex flex-col gap-1 bg-[#532a0b] pl-5 pt-5 pb-5 border rounded-xl border-[rgb(244,164,43,0.6)]">
                    <h1 className="text-[#EF9F27] text-4xl">4</h1>
                    <p className="text-2xl">Normal</p>
                </div>
            
            </div>
            <div className="w-full p-10 bg-[#5e2c07] rounded-4xl  flex flex-col gap-5 ">
                <div className="w-full flex p-5 gap-4 items-center rounded-xl  bg-[rgba(200,200,200,0.1)]  border border-gray-500 drop-shadow-[0px_0px_200px_rgba(0, 255, 0, 0.5)] ">
                    <h1 className="text-2xl">🔍</h1>
                    <input type="text" placeholder="Search your recipes.." className="w-full text-white pl-5 pt-2 pb-2 text-xl bg-mist-600 rounded-xl focus:outline-blue-400/80 focus:shadow-[0px_0px_7px_rgba(255,255,255,1)] focus focus:outline-3  " />
                </div>
                <div className="flex justify-between items-center">
                    <div className="flex h-full items-center gap-3">
                        <div className="w-2 h-full bg-[#EF9F27]"></div>
                        <h1 className="text-3xl">My Recipes</h1>
                    </div>
                    <div className="flex gap-3">
                            <button className="flex justify-center items-center p-3 pr-5 pl-5 text-xl border border-gray-500 rounded-xl active:bg-gray-800 hover:bg-gray-800">
                                All
                            </button>
                            <button className="flex justify-center items-center p-3 pr-5 pl-5 text-xl border border-gray-500 rounded-xl active:bg-gray-800 hover:bg-gray-800">
                                Healthy
                            </button>
                            <button className="flex justify-center items-center p-3 pr-5 pl-5 text-xl border border-gray-500 rounded-xl active:bg-gray-800 hover:bg-gray-800">
                                Normal
                            </button>
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-5">
                    <Card title="Mediterranean Salad" info="Fresh veggies, olives, feta and herbs in olive oil dressing." duration="15min" difficulty="Easy" serving="2 serving" />
                    <Card title="Creamy Mushroom Pasta" info="Rich pasta with sautéed mushrooms in a creamy parmesan sauce." duration="30min" difficulty="Medium" serving="4 serving" />
                    <Card title="Mediterranean Salad" info="Fresh veggies, olives, feta and herbs in olive oil dressing." duration="15min" difficulty="Easy" serving="2 serving" />
                    <Card title="Creamy Mushroom Pasta" info="Rich pasta with sautéed mushrooms in a creamy parmesan sauce." duration="30min" difficulty="Medium" serving="4 serving" />
                    <div className="flex flex-col rounded-4xl shadow-lg bg-[rgba(200,200,200,0.1)] ">
                        <div className="w-full h-full rounded-4xl  flex flex-col justify-center items-center gap-3 border-[rgb(244,151,11,0.6)] border-dotted border-4">
                            <div className="hover:bg-[#8d5400] hover:border-[rgb(244,151,11,1)] w-32 h-32 text-[#EF9F27] rounded-full border-2 border-dotted border-[rgb(244,151,11,0.6)] flex justify-center items-center text-6xl ">+</div>
                            <h1 className="text-2xl">Add new recipe</h1>
                        </div>
                </div>
                </div>
            </div>
        </div>
    )
}