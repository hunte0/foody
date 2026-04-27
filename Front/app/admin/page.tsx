import Sidebar from '@/components/Sidebar'
import {Card} from '@/app/[name]/mykitchen/page'

    

function Content() {
    return(
        <div className='w-full  flex flex-col gap-4 '>
            <div className='flex justify-between w-full bg-[#311704] px-10 py-6.5'>
                <div>
                    <h1 className='text-3xl'>Dashboard</h1> 
                    <h1 className='text-xl opacity-60'>Welcome back, Admin</h1> 
                </div>
                <div>
                    <button className='flex justify-center items-center py-3 px-7  text-xl border border-gray-500 rounded-xl active:bg-gray-700 hover:bg-gray-800'>
                    +Add Recipe
                    </button>
                </div>
                
            </div>
            <div className='flex flex-col w-full'>
                <div className='w-full flex px-10 gap-6'>
                    <div className='w-1/3 bg-[linear-gradient(to_right,#311704,#391704)] flex flex-col items-center rounded-2xl py-10'>
                        <h1 className='text-5xl text-amber-400'>124</h1>
                        <p className='opacity-60 mt-1'>Total recipes</p>
                        <p className='text-green-600 flex items-center gap-3'>↑ +12 this week<span className='text-3xl'>🍽️  </span></p>
                    </div>
                    <div className='w-1/3 bg-[linear-gradient(to_right,#311704,#392707)] flex  flex-col items-center rounded-2xl py-10'>
                        <h1 className='text-5xl text-amber-400'>67</h1>
                        <p className='opacity-60 mt-1'>Healthy recipes</p>
                        <p className='text-green-600 flex items-center gap-3'>↑ 54% of total<span className='text-3xl'>🥗</span></p>
                    </div>
                    <div className='w-1/3 bg-[linear-gradient(to_right,#311704,#491709)] flex flex-col items-center rounded-2xl py-10'>
                        <h1 className='text-5xl text-amber-400'>57</h1>
                        <p className='opacity-60 mt-1'>Healthy recipes</p>
                        <p className='text-green-600 flex items-center gap-3'>↓ 46% of total<span className='text-3xl'>🍖</span></p>
                    </div>
                    
                </div>
                <div className='w-full flex flex-col px-10 bg-[#311704] rounded-4xl my-5'>
                    <div className='w-full p-4 flex justify-between'>
                        <h1 className='h-fit flex gap-1 text-4xl items-center'><span className='h-full text-2xl bg-amber-400 text-amber-400'> a</span>All Recipes</h1>
                        <div className='flex gap-2'>
                            <button className='flex justify-center items-center py-3 px-7  text-xl border border-gray-500 rounded-xl active:bg-gray-700 hover:bg-gray-800'>
                                All
                            </button>
                            <button className='flex justify-center items-center py-3 px-7  text-xl border border-gray-500 rounded-xl active:bg-gray-700 hover:bg-gray-800'>
                                Healthy
                            </button>
                            <button className='flex justify-center items-center py-3 px-7  text-xl border border-gray-500 rounded-xl active:bg-gray-700 hover:bg-gray-800'>
                                Normal
                            </button>
                            <button className='flex justify-center items-center py-3 px-7  text-xl border border-gray-500 rounded-xl active:bg-gray-700 hover:bg-gray-800'>
                                +Add Recipe
                            </button>
                        </div>
                        
                    </div>
                    <div className='flex flex-wrap gap-20 justify-center py-10'>
                        <Card title="Mediterranean Salad" info="Fresh veggies, olives, feta and herbs in olive oil dressing." duration="15min" difficulty="Easy" serving="2 serving" />
                        <Card title="Mediterranean Salad" info="Fresh veggies, olives, feta and herbs in olive oil dressing." duration="15min" difficulty="Easy" serving="2 serving" />
                        <Card title="Mediterranean Salad" info="Fresh veggies, olives, feta and herbs in olive oil dressing." duration="15min" difficulty="Easy" serving="2 serving" />
                        <Card title="Mediterranean Salad" info="Fresh veggies, olives, feta and herbs in olive oil dressing." duration="15min" difficulty="Easy" serving="2 serving" />    
                    </div>
                </div>

            </div>
        </div>

        
    );
}


export default function Main() {
    return (
        <div className="flex">
            <Sidebar />
            <Content /> 
        </div>
    );
}