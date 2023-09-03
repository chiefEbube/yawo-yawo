const landingContainer = document.getElementById("landing-page-container")
// const signInBtn = document.getElementById("sign-in")
const getStartedBtn = document.getElementById("get-started-btn")

const pages = [
    {
        id: 1,
        title: 'Discover and Connect',
        text: 'Explore and connect with travelers worldwide in a vibrant group.',
        image: './images/landing1.png',
    },

    {
        id: 2,
        title: 'Share Adventures',
        text: 'Share your moments and inspire others with your travel stories.',
        image: './images/landing2.png',
    },

    {
        id: 3,
        title: 'Travel Safe Anywhere',
        text: 'Enjoy peace of mind with our safety features, ensuring a secure journey.',
        image: './images/landing3.png',
    },
]

const getPageHtml = (page) => {
    console.log("well it works")

    return `
    <div class="h-screen grid place-items-center">
    <div>
        <img src="${page.image}" alt="" class="w-36 h-36">
        <h1 class="text-lightBg font-extrabold text-2xl mt-4">${page.title}</h1>
        <p>${page.text}</p>
    </div>
</div>

<button class="absolute right-4 bottom-10 underline text-lightBg text-sm cursor-pointer" id="${page.id}">Get started</button>`
}

const renderLandingPage = () => {
    document.body.style.backgroundColor = "white"
    landingContainer.innerHTML = getPageHtml(pages[0])
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
