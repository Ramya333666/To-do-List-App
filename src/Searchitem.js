import React from 'react'

const Searchitem = ({search,setSearch}) => {
  return (
   <form className='' onSubmit={(e)=> (e.preventDefault())}>
     <label htmlFor='search'></label>
     <input
     className='input'
     id='search'
     type="text"
     role='searchbox'
     placeholder='Find It'
     value={search}
     onChange={(e)=>setSearch(e.target.value)}
      />
   </form>
  )
}

export default Searchitem
