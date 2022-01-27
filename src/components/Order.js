import React from 'react'


export const Order = ({setFood}) => {

    const orderByOrden = () => {
        setFood(food => {
           const foodOredenada = food.sort(function (a, b) {
                if (a.orden > b.orden) {
                  return 1;
                }
                if (a.orden < b.orden) {
                  return -1;
                }
                
                return 0;
              })
              
              return foodOredenada
        })
    }
 
    return (
        <div>
        <button className='button-19' onClick={orderByOrden}>Order</button>
      </div>
    )
}

