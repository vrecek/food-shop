import React from 'react'
import { ImQuotesLeft, ImQuotesRight } from 'react-icons/im'

const OpinionText = ({ txt }: { txt: string }) => {
   return (
      <div className="text-wrap">

         <p>
            <span><ImQuotesLeft /></span>
            { txt }
            <span><ImQuotesRight /></span>
         </p>

      </div>
   )
}

export default OpinionText