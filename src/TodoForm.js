//form을 생성하는 부분
function TodoForm({ $target, onSubmit }) {
    const $form = document.createElement('form')
    $target.appendChild($form)

    //render가 실행될 때 마다 이벤트가 발생하는것을 막기 위한 플래그코드
    let isInit = false

    //실제로 input그리는 부분
    this.render = () => {
        $form.innerHTML = `
            <input type = "text" name = "todo"/>
            <button>Add</button>
        `

        //이벤트
        if (!isInit) {
            //Form에 값 입력시 URL 변경방지
            $form.addEventListener("submit", e => {
                e.preventDefault()

                const text = $form.querySelector('input[name = todo]').value
                onSubmit(text)
            })
        }
    }

    this.render()
}