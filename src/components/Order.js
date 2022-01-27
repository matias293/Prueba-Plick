import React from 'react'

export const Order = ({setFood}) => {

    const ordenar = (food) => {
   const foodOrdenada =food.sort(function (a, b) {
    if (a.orden > b.orden) {
      return 1;
    }
    if (a.orden < b.orden) {
      return -1;
    }
    return 0;
  })
  return foodOrdenada
    }

    const orderByOrden = () => {
      setFood(food => ordenar(food))
    }
  
      return (
          <div>
            <button className='button-19'  onClick={orderByOrden}>Ordenar</button>
          </div>
      )
  }