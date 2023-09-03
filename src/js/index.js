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
    <div class="container max-w-lg min-w-min relative" id="landing-page-container">
        <div class="h-screen grid place-items-center px-4">
            <div>
                <img src="${page.image}" alt="">
                <div class="mx-auto text-center">
                    <h1 class=" text-myBlack font-bold text-2xl mt-4">${page.title}</h1>
                    <p class="text-grayBg">${page.text}</p>
                </div>
            </div>
        </div>

        <button class="absolute right-4 bottom-10 underline text-primaryOrange text-sm cursor-pointer" id="${page.id}">Next</button>
    </div>`
}

const renderLandingPage1 = () => {
    document.body.style.backgroundColor = "white"
    document.body.innerHTML = getPageHtml(pages[0])
}

const renderLandingPage2 = () => {
    document.body.style.backgroundColor = "white"
    document.body.innerHTML = getPageHtml(pages[1])
}

const renderLandingPage3 = () => {
    document.body.style.backgroundColor = "white"
    document.body.innerHTML = getPageHtml(pages[2])
}

getStartedBtn.addEventListener('click', renderLandingPage1)
document.getElementById('2').addEventListener('click', renderLandingPage2)
document.getElementById('3').addEventListener('click', renderLandingPage3)
