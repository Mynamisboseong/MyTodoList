function TodoList($target, initialState) {
    const $todolist = document.createElement('div')
    $target.appendChild($todoList)

    this.state = initialState

    this.render = () => {
        $todolist.innerHTML = `
            <ul>
                ${this.state.map(({text}) => `<li>${text}</li>`).join('')}
            </ul>
        `
    }
    
    this.render()
}