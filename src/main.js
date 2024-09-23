const data = [
    {
        text: '학교다녀오기'
    },
    {
        text: '집에서 자습하기'
    }
]

const $app = document.querySelector('.app')

new TodoList({
    $target: $app,
    initialState: data
})