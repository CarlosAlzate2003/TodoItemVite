import '../css/CreateTodoButton.css'

function CreateTodoButton() {
  return (
    <button
      onClick={(event) => {
        console.log('Le diste click')
        console.log(event)
        console.log(event.target)
      }}
    >
      +
    </button>
  )
}

export { CreateTodoButton }
