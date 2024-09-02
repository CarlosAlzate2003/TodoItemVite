import '../css/InputAddTodo.css'

const InputAddTodo = ({ searchValue, setSearchValue }) => {
  return (
    <input
      type="text"
      placeholder="Buscar"
      value={searchValue}
      onChange={(event) => {
        setSearchValue(event.target.value)
      }}
    />
  )
}

export { InputAddTodo }
