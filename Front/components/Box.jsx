export default function Box(){
    return(
        
        <div className=" flex flex-col aspect-[8/4] w-96 border rounded-xl bg-amber-900 overflow-hidden  ">
            <div className="h-[130px] relative ">
                <img src="salad.jpg" alt=""  className="w-full h-full object-cover  "/>
                <div className=" flex justify-center absolute bottom-0 bg-amber-700/90 w-full text-emerald-600 text-center gap-5 ">
                    <p >10 min</p>   
                    <p> easy</p>
                    <p>2 serving</p>
                </div>                
            </div>
            <div className="w-full h-10 text-black grow p-2 font-bold text-2xl">
                <p>Salade Tunisa</p>
            </div>
        </div>


    );
}