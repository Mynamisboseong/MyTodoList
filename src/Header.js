export default function Header({ $target }) {
    const $header = document.createElement("h1")
    $target.appendChild($header)

    this.render = () => {
        $header.innerHTML = `
            Mynamisboseong TodoList
        `
    }

    this.render()
}