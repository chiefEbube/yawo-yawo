const landingContainer = document.getElementById("landing-page-container")
const signInBtn = document.getElementById("sign-in")
const getStartedBtn = document.getElementById("get-started-btn")

const getFirstLandingPageHtml = () => {
    return `
    <div class="h-screen grid place-items-center">
        <div>
            <img src="./images/logo.png" alt="" class="w-36 h-36">
            <h1 class="text-lightBg font-extrabold text-2xl mt-4">Yawo Yawo</h1>
        </div>
    </div>

    <button class="absolute right-4 bottom-10 underline text-lightBg text-sm cursor-pointer" id="get-started-btn">Get started</button>
    `
}

const renderLandingPage = () => {
    document.body.style.backgroundColor = "white"
    landingContainer.innerHTML = getFirstLandingPageHtml()
}

getStartedBtn.addEventListener('click', renderLandingPage)

// const getHomeHtml = () => {
//     return `
//         <div>Home sweet home</div>
//     `
// }
// const renderHomeHtml = () =>{
//     containerEl.innerHTML = getHomeHtml()
// }

// signInBtn.addEventListener('click', () => {
//     renderHomeHtml()
// })