function TodoList(Params) {
    const $todolist = document.createElement('div')
    const $target = Params.$target
    $target.appendChild($todoList)

    this.state = Params.initialState

    this.render = () => {
        $todolist.innerHTML = `
            <ul>
                ${this.state.map(todo => `<li>${todo.text}</li>`).join}
            </ul>
        `
    }
    this.render()
}