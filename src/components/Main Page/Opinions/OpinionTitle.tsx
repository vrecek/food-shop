import React from 'react'
import { AiFillHeart, AiOutlineQuestion } from 'react-icons/ai'

const OpinionTitle = () => {
   return (
      <h1 className="title">

         What 
         <span className='customers'>            
            <span className="heart"><AiFillHeart /></span>
            customers
         </span>    
         say about us

         <span className='question-mark'><AiOutlineQuestion /></span>

      </h1>
   )
}

export default OpinionTitle