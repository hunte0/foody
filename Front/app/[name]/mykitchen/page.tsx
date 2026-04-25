"use client";
import Link from "next/link"
import Image from "next/image";
import {useState,useEffect} from "react"
import {getData} from "@/lib/getData"
import { Divide } from "lucide-react";


type card_info = {
    title : String
    info : String
    duration : String
    difficulty : String
    serving : String
    imageurl : String
    categorie : String
}
export function Card (props : card_info){
    if (!props.imageurl) {
        props.imageurl= '@/public/images/ma9rouna.jpg'
    }
   
    return (
        <div className="flex flex-col rounded-4xl bg-[#3d1e06] shadow-lg overflow-hidden h-150">
            <div className="w-full rounded-4xl relative">
               <Image 
                    src={props.imageurl}
                    alt="Discover Foody"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-full h-80 object-cover rounded-xl"
                />
                {props.categorie === 'healthy' ? <div className="absolute top-5 left-7 p-2 bg-emerald-900 rounded-2xl">Healthy</div> : <div className="absolute top-5 left-7 p-2 bg-amber-900 rounded-2xl">Normal</div>}
            </div>
            <div className="w-full h-full p-5 pb-10 flex flex-col gap-1">
                <h1 className="text-4xl">{props.title}</h1>
                <p className="text-xl opacity-70">{props.info}</p>
                    <ul className="flex justify-between items-center mt-5 gap-3 pl-7 pr-7 list-disc marker:text-[#EF9F27] marker:text-xl font-bold text-xl">
                        <li className="">{props.duration}</li>
                        <li className="">{props.difficulty}</li>
                        <li className="">{props.serving}</li>
                    </ul>

                <div className="w-full flex justify-center items-center gap-4 mt-10">
                    <button className="w-full border text-2xl border-gray-500 rounded-xl p-2 pl-5 pr-5 hover:drop-shadow-[0px_0px_8px_rgba(0,0,0,0.2)] hover:bg-taupe-600 hover:border-gray-300">Edit</button>
                    <button className="w-full border text-2xl border-gray-500 rounded-xl p-2 pl-5 pr-5 hover:drop-shadow-[0px_0px_8px_rgba(0,0,0,0.2)] hover:bg-taupe-600 hover:border-gray-300">Delete</button>
                </div>

            </div>
        </div>
    )
}





export default  function Mine (){
    const [category,setCategory] = useState('All')
    const [liste_recipe,setListe] = useState([]);
    const fetching = async (cat : string)=>{
        try{
            const data = await getData('/api/recipe/client/myKitchen',cat);
            
            setListe(data.recipes);
            console.log(liste_recipe[2].category)
        }
        catch (err){
            if (err instanceof Error) {
                console.error("Error:", err.message);
            } else {
                console.error("Unknown error:", err);
            }
        }
        
    }
      useEffect(() => {
            fetching(category);
        }, [category]);
    
   

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
                            <button className="flex justify-center items-center p-3 pr-5 pl-5 text-xl border border-gray-500 rounded-xl active:bg-gray-800 hover:bg-gray-800" onClick={() => setCategory("All")}>
                                All
                            </button>
                            <button className="flex justify-center items-center p-3 pr-5 pl-5 text-xl border border-gray-500 rounded-xl active:bg-gray-800 hover:bg-gray-800"  onClick={() => setCategory("Healthy")}>
                                Healthy
                            </button>
                            <button className="flex justify-center items-center p-3 pr-5 pl-5 text-xl border border-gray-500 rounded-xl active:bg-gray-800 hover:bg-gray-800" onClick={() => setCategory("Normal")}>
                                Normal
                            </button>
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-5">
                    {liste_recipe?.length > 0  && liste_recipe.map((item, index) => (
                        

                       
                            <Card
                                key={index}
                                title={item.title}
                                info={item.brief_description}
                                duration={item.preparation_time}
                                difficulty={item.difficulty}
                                serving={item.serving}
                                imageurl = {item.imageurl}
                                categorie ={item.category}
                                    />
                                
                        ))}
                    
                    
                    <div className="flex flex-col rounded-4xl shadow-lg bg-[rgba(200,200,200,0.1)]  h-150 ">
                        <div className="w-full h-full rounded-4xl  flex flex-col justify-center items-center gap-3 border-[rgb(244,151,11,0.6)] border-dotted border-4">
                            <Link href="mykitchen/add">
                            <div className="hover:bg-[#8d5400] hover:border-[rgb(244,151,11,1)] w-32 h-32 text-[#EF9F27] rounded-full border-2 border-dotted border-[rgb(244,151,11,0.6)] flex justify-center items-center text-6xl cursor-pointer  ">+</div>
                            </Link>
                            <h1 className="text-2xl">Add new recipe</h1>
                        </div>
                </div>
                </div>
            </div>
        </div>
    )
}