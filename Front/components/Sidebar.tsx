

export default function Sidebar (){
    const list = [];
    return(
        <section className="bg-[#2A1505] h-screen ">
            <div className="px-10 py-15">
                <h1 className="text-5xl text-amber-400">🍳 Foody Admin</h1>
            </div>
            
            <hr className=" opacity-10 w-full" />
            <div className="px-10 py-15 flex flex-col gap-1">
                <h1 className="text-2xl text-gray-300">Overview</h1>
                <ul className="list-disc list-inside marker:text-4xl">
                    <li className="flex items-center gap-3 py-4">
                        <span className="w-2.5 h-2.5 bg-amber-400 rounded-full"></span>
                        <span className="text-2xl">Dashboard</span>
                    </li>
                </ul>
                <h1 className="text-2xl opacity-80">Mangement</h1>
                <ul className="list-disc list-inside marker:text-4xl">
                    <li className="flex items-center gap-3 py-4">
                        <span className="w-2.5 h-2.5 bg-amber-400 rounded-full"></span>
                        <span className="text-2xl">Recipes</span>
                    </li>
                     <li className="flex items-center gap-3 py-4">
                        <span className="w-2.5 h-2.5 bg-amber-400 rounded-full"></span>
                        <span className="text-2xl">Users</span>
                    </li>
                     
                    
                </ul>
                <h1 className="text-2xl opacity-80">Account</h1>
                <ul className="list-disc list-inside marker:text-4xl">
                    <li className="flex items-center gap-3 py-4">
                        <span className="w-2.5 h-2.5 bg-amber-400 rounded-full"></span>
                        <span className="text-2xl">Logout</span>
                    </li>
                </ul>
                
            </div>
        </section>
    );
}