import React from 'react'

type Props = {
    open:() => void;
}

const Buttons = ({open}: Props ) => {
  return (
    <div className='my-8 flex gap-5 lg:hidden'>
        <button 
        className='flex-1 bg-white rounded-md p-2 px-4 flex gap-4
        items-center justify-between'
        onClick={open}
        >
            Filtreler
            <img src="filter.svg" alt="" />
            </button>
        <button className='flex-1 bg-white rounded-md p-2 px-4 flex gap-4
        items-center justify-between' >Sırala
        <img src="down.svg" alt="" />
        </button>
    </div>
  )
}

export default Buttons