import React, { useEffect, useState } from 'react'
import { AccordionItem } from './AccordionItem'
import data from "../data/celebrities.json"
import Searchbar from './Searchbar';

const HomePage = () => {
  const [user, setUser] = useState(data);
  const [searchString, setSearchString] = useState("")
  const [expanded, setExpanded] = useState(-1)
  const deleteUser = (index:number)=>{
    let upadatedUsers = user.filter((_,x:any)=> x !== index)
    setUser(upadatedUsers)
  }
  // useEffect(()=>{
  //   console.log(searchString)
  // },[searchString])
  const onChanged = (id:number)=>{
    setExpanded(id)
  }

  useEffect(()=>{
    // const tempData = user;
    const lowerCaseStr = searchString.toLowerCase().trim();
    if(lowerCaseStr !== ""){
      const filteredData = user.filter(item =>{
        // console.log("item", item)
       
        return item.first.toString().toLowerCase().includes(lowerCaseStr) || item.last.toString().toLowerCase().includes(lowerCaseStr) 
    });
    setUser(filteredData)
    } else{
      setUser(data)
    }
  },[searchString])
  return (
    <div>
      <Searchbar setSearchString={setSearchString} />
        {user.map((item, index)=>{
            return(

                <AccordionItem key={item.id} user={item}  deleteUser={()=>deleteUser(index)} onChange={()=>onChanged(item.id)} expanded={expanded === item.id} setExpanded={setExpanded}/>
            )
        })}
    </div>
  )
}

export default HomePage