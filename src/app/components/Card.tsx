
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface Props {
    name : string,
    url : string,
}
export default function Card(props:Props) {
        
  return (
    <div key={props.name}>
        <Link href={`/recipe/${props.name}`}>
            <div className='w-64 border-solid border-2 border-black p-5 flex-column justify-center align-center shadow-inner' >
            <Image 
                src={props.url}
                
                height={100}
                width={100}
                alt=''
                style={{ width: '100%', height: 'auto', borderRadius: '10px' }}
            />
            <h4 className='text-center text-lg font-semibold pt-4'>{props.name}</h4>
            </div>
        </Link>
    </div>
  )
}
