import React from 'react'

const Itemlist = ({items,handleClick,handleDelete}) => {
  return (
    <p>
    {items.map((item)=>(
      <p className="" key={item.id}>
        <label class="heart-checkbox">
        <input 
            type="checkbox"
            checked={item.checked} 
            onChange={()=>handleClick(item.id)}
            />
            <span class="checkmark"></span>
            <label>{item.item}</label>
            </label>
            <button className="button" onClick={()=>handleDelete(item.id)}>Delete</button>
      </p>
    ))}
</p>
  )
}

export default Itemlist
