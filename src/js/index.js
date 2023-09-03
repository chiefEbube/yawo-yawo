const landingContainer = document.getElementById("landing-page-container")
// const signInBtn = document.getElementById("sign-in")
const getStartedBtn = document.getElementById("get-started-btn")

const Pages = [
    {
        id: 1,
        title: 'Discover and Connect',
        text: 'Explore and connect with travelers worldwide in a vibrant group.',
        image: '../images/landing1',
    },

    {
        id: 2,
        title: 'Share Adventures',
        text: 'Share your moments and inspire others with your travel stories.',
        image: '../images/landing2',
    },

    {
        id: 3,
        title: 'Travel Safe Anywhere',
        text: 'Enjoy peace of mind with our safety features, ensuring a secure journey.',
        image: '../images/landing3',
    },
]

const getPageHtml(page) {
    console.log("well it works")

    return `
    <div class="h-screen grid place-items-center">
    <div>
        <img src=${image} alt="" class="w-36 h-36">
        <h1 class="text-lightBg font-extrabold text-2xl mt-4">${title}</h1>
        <p>${text}</p>
    </div>
</div>

<button class="absolute right-4 bottom-10 underline text-lightBg text-sm cursor-pointer" id="${id}">Get started</button>`
}

// const renderLandingPage = () => {
//     document.body.style.backgroundColor = "white"
//     // landingContainer.innerHTML = landing1.getPageHtml()
// }

getStartedBtn.addEventListener('click', function(){
    console.log("clickeddddddddddddddddddd")
})

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


const landing1 = new Page(landingPageData.landing1)
// const landing2 = new Page(landingPageData.landing2)
// const landing3 = new Page(landingPageData.landing3)