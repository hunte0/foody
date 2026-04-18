import Image from "next/image";
import recipe from  "./recipe.module.css"
export default function Recipe() {
  return (
    <div className="w-full h-full flex flex-col items-center gap-10  ">
            <div className="flex flex-col justify-center p-5 items-center mt-30 mb-10">
              <div className="flex w-full mb-2 gap-7 ">
                <div className="text-lg rounded-4xl bg-[#F4D03F] w-20 h-7 flex justify-center items-center text-black">Dinner</div>
                <div className="text-lg">⏱ 25 mins</div>
                <div className="text-lg">👨‍🍳 Easy</div>
                <div className="text-lg">🔥 410 kcal</div>
              </div>
              <div className="flex flex-col gap-3"  >
                <h1 className="text-6xl font-serif">Zesty Lemon Garlic Salmon</h1>
                 <p className="text-xl w-full md:w-150">A restaurant-quality dish featuring perfectly seared salmon fillets bathed in a buttery lemon-garlic sauce, served with roasted asparagus and sweet cherry tomatoes.</p>

              </div>
            </div>
              <div className="w-full flex justify-center items-center h-full bg-[#FAF8F5] p-7 pt-0 text-blackw-full  bg-[#FAF8F5] md:p-7 text-black ">
                <div className={`w-[1200px] flex flex-col rounded-4xl bg-white  ${recipe.container} shadow-lg md`}>
                  <div className="w-full h-[450px] relative overflow-hidden ">
                    <Image src="/images/la7ma.jpg" alt="Salmon" fill className="object-cover hover:scale-105 transition-transform duration-700 shadow-lg"/>
                  </div>
                  <div className="flex w-full max-[1063px]:flex-col p-7 gap-4 ">
                    <div className="flex flex-col p-10 w-[30rem] h-fit bg-[#3d1e06] text-white gap-4 rounded-4xl max-[1063px]:w-full">
                      <h1 className="text-3xl">📊 Macro Profile</h1>
                      <div className="flex flex-col w-full items-center justify-center rounded-lg p-2 bg-[#F4D03F] text-lg text-black gap-3">
                        <h1 className="text-5xl ">410</h1>
                        <p>kcal per serving</p>
                      </div>
                      <div className="flex flex-col justify-center items-center w-full mt-7 text-lg gap-10">
                        <div className="flex w-full gap-1 items-center">
                          <div className="flex gap-1">
                                <span>🥩 </span> 
                                <span>Protein</span>
                          </div>
                          <div className="">34g</div>
                          <div className="w-full bg-gray-400 h-1">
                            <div className="h-1 w-[85%]  bg-[#F4D03F]"></div>
                          </div>
                          
                        </div>
                        <div className="flex w-full gap-1 items-center">
                          <div className="flex gap-1">
                                <span>🥑 </span> 
                                <span>Fat</span>
                          </div>
                          <div className="">28g</div>
                          <div className="w-full bg-gray-400 h-1">
                            <div className="h-1 w-[75%]  bg-[#F4D03F]"></div>
                          </div>
                          
                        </div>
                        <div className="flex w-full gap-1 items-center"> 
                          <div className="flex gap-1">
                                <span>🍞 </span> 
                                <span>Carbs</span>
                          </div>
                          <div className="">2g</div>
                          <div className="w-full bg-gray-400 h-1">
                            <div className="h-1 w-[10%]  bg-[#F4D03F]"></div>
                          </div>
                          
                        </div>  
                        
                      </div>
                      <hr className=" mt-3 opacity-60"/>
                      <div className="flex w-full justify-center items-center rounded-lg bg-[#F4D03F] mt-5 text-black text-xl font-bold hover:bg-[#f5d450] cursor-pointer p-2">Start Cooking</div>
                    </div>
                    <div className="flex flex-col max-[1063px]:w-full">
                      <h1 className="text-3xl mb-4">⚡ The Process</h1>
                      <div className="flex  justify-between gap-4 w-full max-[1063px]:flex-col max-[1063px]:w-full">
                        
                        <div className="flex w-[230px] max-[1063px]:w-full flex-col p-6 bg-[#FAF8F5] rounded-2xl border-amber-200 border-1 hover:scale-104 duration-500 hover:border-amber-400 hover:shadow-lg cursor-pointer">
                        
                          <h1 className="text-5xl mb-7  ">🥩</h1>
                          <h2 className="text-2xl mb-2">Prep</h2>
                        
                          <p>Pat salmon dry. Season generously with salt and pepper. Mince garlic finely.</p>
                        </div>
                        <div className="flex w-[230px] max-[1063px]:w-full  flex-col p-6 bg-[#FAF8F5] rounded-2xl border-amber-200 border-1 hover:scale-104 duration-500 hover:border-amber-400 hover:shadow-lg cursor-pointer">
                        
                          <h1 className="text-5xl mb-7">🔥</h1>
                          <h2 className="text-2xl mb-2">SEAR</h2>
                        
                          <p>Heat olive oil in a skillet over medium-high heat. Add salmon, skin-side up, and cook for 4 minutes until golden.</p>
                        </div>
                        <div className="flex w-[230px] max-[1063px]:w-full flex-col p-6 bg-[#FAF8F5] rounded-2xl border-amber-200 border-1 hover:scale-104 duration-500 hover:border-amber-400 hover:shadow-lg cursor-pointer">
                        
                          <h1 className="text-5xl mb-7  ">🥄</h1>
                          <h2 className="text-2xl mb-2">BASTE</h2>
                        
                          <p>Flip salmon. Add butter, garlic, and lemon juice to the pan. Sauté 1 min. Constantly baste salmon with the sauce until cooked through.</p>
                        </div>
                      </div>
                      <div className="w-full mt-10 bg-[#FAF8F5] rounded-2xl p-6 shadow-lg">
                        <h1 className="text-4xl">🥬 Ingredients</h1>
                        <div className="flex flex-wrap gap-10 p-7 w-full justify-between items-center">
                          <div className="flex flex-col justify-center items-center">
                            <h1 className=" flex justify-center items-center w-16 h-16  bg-white rounded-full text-[3rem] pb-3 shadow-[0px_0px_20px_rgba(0,0,0,0.2)]">🐟</h1>
                            <h4 className="font-bold">Salmon Fillet</h4>
                            <p className="opacity-75">170g</p>
                          </div>
                          <div className="flex flex-col justify-center items-center">
                            <h1 className=" flex justify-center items-center w-16 h-16  bg-white rounded-full text-[3rem] pb-3 shadow-[0px_0px_20px_rgba(0,0,0,0.2)]">🐟</h1>
                            <h4 className="font-bold">Salmon Fillet</h4>
                            <p className="opacity-75">170g</p>
                          </div>
                          <div className="flex flex-col justify-center items-center">
                            <h1 className=" flex justify-center items-center w-16 h-16  bg-white rounded-full text-[3rem] pb-3 shadow-[0px_0px_20px_rgba(0,0,0,0.2)]">🐟</h1>
                            <h4 className="font-bold">Salmon Fillet</h4>
                            <p className="opacity-75">170g</p>
                          </div>
                              <div className="flex flex-col justify-center items-center">
                            <h1 className=" flex justify-center items-center w-16 h-16  bg-white rounded-full text-[3rem] pb-3 shadow-[0px_0px_20px_rgba(0,0,0,0.2)]">🐟</h1>
                            <h4 className="font-bold">Salmon Fillet</h4>
                            <p className="opacity-75">170g</p>
                          </div>
                           <div className="flex flex-col justify-center items-center">
                            <h1 className=" flex justify-center items-center w-16 h-16  bg-white rounded-full text-[3rem] pb-3 shadow-[0px_0px_20px_rgba(0,0,0,0.2)]">🐟</h1>
                            <h4 className="font-bold">Salmon Fillet</h4>
                            <p className="opacity-75">170g</p>
                          </div>
                           <div className="flex flex-col justify-center items-center">
                            <h1 className=" flex justify-center items-center w-16 h-16  bg-white rounded-full text-[3rem] pb-3 shadow-[0px_0px_20px_rgba(0,0,0,0.2)]">🐟</h1>
                            <h4 className="font-bold">Salmon Fillet</h4>
                            <p className="opacity-75">170g</p>
                          </div>
                           <div className="flex flex-col justify-center items-center">
                            <h1 className=" flex justify-center items-center w-16 h-16  bg-white rounded-full text-[3rem] pb-3 shadow-[0px_0px_20px_rgba(0,0,0,0.2)]">🐟</h1>
                            <h4 className="font-bold">Salmon Fillet</h4>
                            <p className="opacity-75">170g</p>
                          </div>
                           <div className="flex flex-col justify-center items-center">
                            <h1 className=" flex justify-center items-center w-16 h-16  bg-white rounded-full text-[3rem] pb-3 shadow-[0px_0px_20px_rgba(0,0,0,0.2)]">🐟</h1>
                            <h4 className="font-bold">Salmon Fillet</h4>
                            <p className="opacity-75">170g</p>
                          </div>
                           
                        </div>
                      </div>
                    </div>
                    
                  </div>
                </div>
              </div>  
    </div>
  );
}