import React from 'react'
import { AccordionItem } from './AccordionItem'
import data from "../data/celebrities.json"

const HomePage = () => {
  return (
    <div>
        {data.map((item, index)=>{
            return(

                <AccordionItem key={index} user={item} />
            )
        })}
    </div>
  )
}

export default HomePage