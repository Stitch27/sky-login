import React, { useState } from "react"
import { ArrowDownIcon } from "@heroicons/react/24/solid"
import { useNavigate } from "react-router-dom"

export const Item = ({align = 'pl-2', title, icon, items }) => {
  const navigate = useNavigate();
  const [collapse, setCollapse] = useState(false);

  return (
    <li>
      <button onClick={() => setCollapse(!collapse)} type="button" className={`flex items-center w-full pt-2 pb-2 pr-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-200 dark:text-white dark:hover:bg-gray-700 ${align}`} >
        {icon}
        <span className="flex-1 ml-3 text-left whitespace-nowrap" >{title}</span>
        <ArrowDownIcon className="h-4 w-4" />
      </button>
      <ul className={`py-2 ml-6 space-y-2 ${!collapse && 'hidden'}`}>
        {
          items.map(({ name, link, items }) =>{

          return items ? <Item align='pl-6' key={name} title = {name} icon = "" items={items}></Item> : <li key={name} >
            <button onClick={() => navigate(link)} className="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg pl-8 group hover:bg-gray-200 dark:text-white dark:hover:bg-gray-700">{name}</button>
          </li>
          
          })
        }
      </ul>
    </li>
  )
}
