import React from 'react'
import { BiSearch } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'

const SearchBar = () => {
   const n = useNavigate()

   const keyEvent = (e: React.KeyboardEvent) => {
      const t = e.target as HTMLInputElement
      const { value } = t
      const { key } = e

      if(key === 'Enter' && value) {
         n(`/search/${ value }`, { state: { query: value } })
      }
   }
   
   return (
      <div className="search-bar">

         <input onKeyDown={ keyEvent } type='text' spellCheck='false' />
         <span> <BiSearch /> </span>

      </div>
   )
}

export default SearchBar