import '../css/InputAddTodo.css'

const InputAddTodo = () => {
  return (
    <input
      type="text"
      placeholder="Add a new todo"
      onChange={(event) => {
        console.log(event.target.value)
      }}
    />
  )
}

export { InputAddTodo }
