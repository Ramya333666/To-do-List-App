import React from 'react'



const Additem = ({newItem,setNewItem,handleSubmit}) => {
  return (
    <form className='addForm' onSubmit={handleSubmit}>
        <label htmlFor='addItem'></label>
        <input
        className='input'
          autoFocus
          id= 'addItem'
          type="text"
          placeholder='Quick Add '
          required
          value={newItem}
          onChange={(e)=> setNewItem(e.target.value)}
        />
        <button
        className='button'
          type = 'submit'
          aria-label='Add Item'
        >SUBMIT</button>
    </form>
  )
}

export default Additem
