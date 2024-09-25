const data = [
    {
        text: '학교다녀오기'
    },
    {
        text: '집에서 자습하기'
    }
]

//추가된 코드
const data1 = [
    {
        text: '점심밥 챙겨먹기'
    },
    {
        text: '저녁밥 챙겨먹기'
    }
]

const $app = document.querySelector('.app')

new Header({
    $target: $app
})

new TodoForm({
    $target: $app,
    //onSubmit: 해당 속성에 코드설정 시 사용자가 폼을 제출할 때 해당 코드 실행
    onSubmit: (text) => {
        const nextState = [...todoList.state, { text }]
        todoList.setState(nextState)
    }
})

new TodoList({
    $target: $app,
    initialState: data
})

//추가된 코드
const todoList = new TodoList({
    $target: $app,
    initialState: data1
})