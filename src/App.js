import { useState } from 'react';
import './App.css';

import {DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const initialFood = 
[
	{ "nombre": "Papas Con Sal", "estatus": "activo", "fecha_registro": "9/8/2021 18:06:31", "id": "6ee8ef8002e706ede576bdb260bf1398", "precio": 0, "id_comercio": "1203e71e56a059c24f1a6692f3d42c7c", "fecha_registro_timestamp": 1628550391,        "orden": 6	},
	{ "nombre": "Salsa italiana", "estatus": "activo", "fecha_registro": "6/8/2021 16:27:04", "id": "78186fae0e64815078ef1d068d07c9d4", "precio": 15, "id_comercio": "1203e71e56a059c24f1a6692f3d42c7c", "fecha_registro_timestamp": 1628285224,        "orden": 1	},
	{ "nombre": "Ramona", "estatus": "activo", "fecha_registro": "9/8/2021 18:47:11", "id": "de71011113ee6fceb84c4a23cf2c2394", "precio": 0, "id_comercio": "1203e71e56a059c24f1a6692f3d42c7c", "fecha_registro_timestamp": 1628552831,        "orden": 2	},
	{ "nombre": "Bufalo", "estatus": "activo", "fecha_registro": "9/8/2021 17:42:04", "id": "0fa71f2fddbdd71357621ff8da991675", "precio": 0, "id_comercio": "1203e71e56a059c24f1a6692f3d42c7c", "fecha_registro_timestamp": 1628548925,        "orden": 3	},
	{ "nombre": "F Burger", "estatus": "activo", "fecha_registro": "9/8/2021 18:49:33", "id": "90be1858823b5725945a3a7959954ae6", "precio": 0, "id_comercio": "1203e71e56a059c24f1a6692f3d42c7c", "fecha_registro_timestamp": 1628552973,        "orden": 4	},
	{ "nombre": "Salsa BBQ", "estatus": "activo", "fecha_registro": "6/8/2021 16:27:41", "id": "0cdf1e13a01bfa7545496a091c65450c", "precio": 15, "id_comercio": "1203e71e56a059c24f1a6692f3d42c7c", "fecha_registro_timestamp": 1628285261,        "orden": 5	}
]

const reorder = (list, startIndex, endIndex) => {
  const result = [...list];
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

function App() {
  const [foods, setFood] = useState(initialFood)

  const orderByOrden = () => {
    
  const orderFood = initialFood.sort(function (a, b) {
      if (a.orden > b.orden) {
        return 1;
      }
      if (a.orden < b.orden) {
        return -1;
      }
      
      return 0;
    })
   
    setFood(orderFood)
  }

  return (
    <DragDropContext 
     onDragEnd={(result) => {
       const {source, destination} = result
       if(!destination) return
       if( source.index === destination.index && source.droppableId === destination.droppableId)  return
       setFood(prevFoods => reorder(prevFoods, source.index, destination.index))
     }}>

    <div className="app">
     <h1>Menu</h1>
     <Droppable  droppableId='foods'>
       {(droppableProvided) =>(
     <ul 
     {...droppableProvided.droppableProps}
     ref={droppableProvided.innerRef}
     className='food-container'
     >
           {foods.map((food,index) => (
             <Draggable key={food.id} draggableId={food.id} index={index}>
               {(draggableProvided) => (
             <li 
             {...draggableProvided.draggableProps}
             ref={draggableProvided.innerRef}
             {...draggableProvided.dragHandleProps}
             className='food-item' 
              >
               {food.nombre}
             </li>
             )}
             </Draggable>
           ))}
           {droppableProvided.placeholder}
     </ul>
     )}
     </Droppable>
    </div>
      <button className='button-19'  onClick={orderByOrden}>Ordenar</button>
      </div>

    </DragDropContext>
  );
}

export default App;
