import React from 'react';
import Itemlist from './Itemlist';

const Content = ({items,setItems,handleClick,handleDelete}) => {

   return (
    <main>
        {(items.length) ? (
          <Itemlist
            items={items}
            handleClick={handleClick}
            handleDelete={handleDelete} />
        ) : (
          <p>Your list is empty!</p>
        )}
    </main>
   )
}

export default Content
