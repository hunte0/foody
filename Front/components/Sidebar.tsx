

export default function Sidebar (){
    const list = [];
    return(
        <section className="bg-[#2A1505] w-100">
            <div className="px-10 py-10">
                <h1 className="text-3xl text-amber-400">🍳 Foody Admin</h1>
            </div>
            
            <hr className=" opacity-10 w-full" />
            <div className="px-10 py-10 flex flex-col gap-1">
                <h1 className="text-xl text-gray-300">Overview</h1>
                <ul className="list-disc list-inside marker:text-4xl">
                    <li className="flex items-center gap-3 py-4">
                        <span className="w-2.5 h-2.5 bg-amber-400 rounded-full"></span>
                        <span className="text-xl">Dashboard</span>
                    </li>
                </ul>
                <h1 className="text-xl opacity-80">Mangement</h1>
                <ul className="list-disc list-inside marker:text-4xl">
                    <li className="flex items-center gap-3 py-4">
                        <span className="w-2.5 h-2.5 bg-amber-400 rounded-full"></span>
                        <span className="text-xl">Recipes</span>
                    </li>
                     <li className="flex items-center gap-3 py-4">
                        <span className="w-2.5 h-2.5 bg-amber-400 rounded-full"></span>
                        <span className="text-xl">Users</span>
                    </li>
                     
                    
                </ul>
                <h1 className="text-xl opacity-80">Account</h1>
                <ul className="list-disc list-inside marker:text-4xl">
                    <li className="flex items-center gap-3 py-4">
                        <span className="w-2.5 h-2.5 bg-amber-400 rounded-full"></span>
                        <span className="text-xl">Logout</span>
                    </li>
                </ul>
                
            </div>
        </section>
    );
}