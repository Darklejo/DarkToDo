import React from 'react';
import { SearchIcon } from "./icons/Serch";

export function TodoSearch(props) {

    const [search, setSearch] = React.useState('')

    const handleChange = (event) => {
        setSearch(event.target.value);
        props.setValue(search)
    }

    return (
        <div className='px-10'>
            <div className='flex items-start border-[1px] border-purple-700 rounded-full mt-6 w-full hover:border-white hover:fill-purple-700 transition-colors '>
                <input
                    type='text'
                    placeholder='Buscar...'
                    className='pl-2 bg-transparent grow rounded-full border-none text-xl pt-[2px] outline-none text-white hover:bg-[#0B0112]'
                    onChange={handleChange}
                    value={search}
                />
                <div className='p-2'>
                    <SearchIcon w='20' h='15' />
                </div>
            </div>
        </div>
    )
}