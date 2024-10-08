export function  TodoTitle(){
    return(
        <div className='flex font-semibold grow p-2 text-white bg-black border-b-[2px] border-b-purple-700 '>
            <h2 className='text-2xl text-center w-full'>♰ DarkToDo ♰</h2>
            <button className='hover:text-purple-700 transition-colors justify-end mr-2 text-2xl'>+</button>
        </div>
    )
}