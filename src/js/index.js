const containerEl = document.getElementById("container")
const signInBtn = document.getElementById("sign-in")

const getHomeHtml = () => {
    return `
        <div>Home sweet home</div>
    `
}
const renderHomeHtml = () =>{
    containerEl.innerHTML = getHomeHtml()
}

signInBtn.addEventListener('click', () => {
    renderHomeHtml()
})