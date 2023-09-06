const pagesEl = document.getElementById("pages")
const signInBtn = document.getElementById("sign-in")
const getStartedBtn = document.getElementById("get-started-btn")
const pageOneBtn = document.getElementById("page-one-btn")
const pageTwoBtn = document.getElementById("page-two-btn")
const pageThreeBtn = document.getElementById("page-three-btn")

const pages = [
    {
        id: 'page1',
        title: 'Discover and Connect',
        text: 'Explore and connect with travelers worldwide in a vibrant group.',
        image: './images/landing1.svg',
    },

    {
        id: 'page2',
        title: 'Share Adventures',
        text: 'Share your moments and inspire others with your travel stories.',
        image: './images/landing2.svg',
    },

    {
        id: 'page3',
        title: 'Travel Safe Anywhere',
        text: 'Enjoy peace of mind with our safety features, ensuring a secure journey.',
        image: './images/landing3.svg',
    },
]

const getPageHtml1 = () => {
    return `
        <div class="h-screen grid place-items-center px-4">
            <div>
                <img src="${pages[0].image}" alt="">
                <div class="mx-auto text-center">
                    <h1 class=" text-myBlack font-bold text-2xl mt-4">${pages[0].title}</h1>
                    <p class="text-grayBg">${pages[0].text}</p>
                </div>
            </div>
        </div>
    `
}

const getPageHtml2 = () => {
    return `
        <div class="h-screen grid place-items-center px-4">
            <div>
                <img src="${pages[1].image}" alt="">
                <div class="mx-auto text-center">
                    <h1 class=" text-myBlack font-bold text-2xl mt-4">${pages[1].title}</h1>
                    <p class="text-grayBg">${pages[1].text}</p>
                </div>
            </div>
        </div>
    `
}

const getPageHtml3 = () => {
    return `
        <div class="h-screen grid place-items-center px-4">
            <div>
                <img src="${pages[2].image}" alt="">
                <div class="mx-auto text-center">
                    <h1 class=" text-myBlack font-bold text-2xl mt-4">${pages[2].title}</h1>
                    <p class="text-grayBg">${pages[2].text}</p>
                </div>
            </div>
        </div>
    `
}

setTimeout(() => {
    document.body.style.backgroundColor = "white"
    pagesEl.innerHTML = getPageHtml1()
    getStartedBtn.style.visibility = "hidden"
    pageOneBtn.classList.remove("hidden")
    document.getElementById("skip").classList.remove("hidden")
}, 2500);

// const renderLandingPage1 = () => {
//     document.body.style.backgroundColor = "white"
//     pagesEl.innerHTML = getPageHtml1()
//     getStartedBtn.style.visibility = "hidden"
//     pageOneBtn.classList.remove("hidden")
//     document.getElementById("skip").classList.remove("hidden")
// }

const renderLandingPage2 = () => {
    document.body.style.backgroundColor = "white"
    pagesEl.innerHTML = getPageHtml2()
    pageOneBtn.style.visibility = "hidden"
    pageTwoBtn.classList.remove("hidden")
}

const renderLandingPage3 = () => {
    document.body.style.backgroundColor = "white"
    pagesEl.innerHTML = getPageHtml3()
    pageTwoBtn.style.visibility = "hidden"
    pageThreeBtn.classList.remove("hidden")
}

pageOneBtn.addEventListener('click', renderLandingPage2)
pageTwoBtn.addEventListener('click', renderLandingPage3)