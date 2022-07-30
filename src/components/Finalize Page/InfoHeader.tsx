import React from 'react'

const InfoHeader = ({ children }: { children: string }) => {
   const styles: React.CSSProperties = {
      textTransform: 'uppercase' as 'uppercase',
      fontWeight: '700',
      marginBottom: '.25em',
      letterSpacing: '1px',
      fontSize: 'clamp(.85rem, 4vw, 1rem)'
   }

   return (
      <h2 style={ styles }>{ children }</h2>
   )
}

export default InfoHeader