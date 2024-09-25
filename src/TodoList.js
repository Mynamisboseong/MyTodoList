function TodoList({ $target, initialState }) {
    const $todolist = document.createElement('div')
    $target.appendChild($todolist)

    this.state = initialState

    this.setState = nextState => {
        this.state = nextState
        this.render()
    }

    this.render = () => {
        $todolist.innerHTML = `
            <ul>
                ${this.state.map(({text}) => `<li>${text}</li>`).join('')}
            </ul>
        `
    }
    
    this.render()
}