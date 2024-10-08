import React from 'react';
import { CheckIcon } from "../icons/Checked";
import { DeleteIcon } from "../icons/Delete";


export function TodoItem(props){

    const[checked,setChecked]= React.useState(false)
    const[deleted,setDeleted]= React.useState(false)

const HandleCheck=()=>{
    setChecked(true);
    props.setChecked(checked)
}
    return(
        <div className={'m-3 px-4 py-[2px] rounded-lg border-[1px] transition-colors transition-tra border-purple-700 hover:border-white hover:shadow-xl flex hover:bg-[#0B0112]'}>
            <button className={'w-5 mt-[7px] mr-2 outline-none'} onClick={HandleCheck}><CheckIcon w={'20'} h={'20'}/></button>
            <p className={`text-2xl ${props.completed ? 'text-green-500 underline underline-offset-2' : 'text-white'} mb-1 grow`}>{props.text}</p>
            <button className={'w-5 h-[10px] mr-2 justify-end pt-[12px] outline-none'}><DeleteIcon w={'40'} h={'30'}/></button>
        </div>
    )
}