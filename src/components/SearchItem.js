import React from 'react'

function SearchItem({search,setSearch}) {
  return (
    <form onSubmit={e => e.preventDefault()}>
     <input
        placeholder="Search Item"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      /><br/><br/><br/>
    </form>
  )
}

export default SearchItem
