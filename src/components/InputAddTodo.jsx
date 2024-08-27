import '../css/InputAddTodo.css'
import React from 'react'

const InputAddTodo = ({ searchValue, setSearchValue }) => {
  console.log(searchValue)
  return (
    <input
      type="text"
      placeholder="Add a new todo"
      value={searchValue}
      onChange={(event) => {
        setSearchValue(event.target.value)
      }}
    />
  )
}

export { InputAddTodo }
