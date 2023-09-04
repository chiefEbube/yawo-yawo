const posts = [
    {
        username: "faithax",
        profilePic: "./images/profile-pic.png",
        text: "Who else has visited the new water park in Abuja that just opened? well, i have and i had so much fun there.",
        likes: 40,
        replies: 35,
        shares: 10,
        time: 10
    },

    {
        username: "okoyemary",
        profilePic: "./images/profile-pic.png",
        image: "./images/image-post.png",
        text: "Found a new spot to work !",
        likes: 92,
        replies: 43,
        shares: 13,
        time: 13
    },

    {
        username: "davidade",
        profilePic: "./images/profile-pic.png",
        text: "Who else has visited the new water park in Abuja that just opened? well, i have and i had so much fun there",
        likes: 92,
        replies: 43,
        shares: 13,
        time: 13
    },

    {
        username: "tundeednot",
        profilePic: "./images/profile-pic.png",
        image: "./images/image-post-2.png",
        text: "Found a new spot to work !",
        likes: 92,
        replies: 43,
        shares: 13,
        time: 13
    },
]

const getStoryHtml = () => {
    let storyHtml = ''

    posts.forEach((post) => {
        storyHtml += `
            <div>
                <img class="mx-auto ring-primaryOrange w-12 h-12 p-1 rounded-full ring-2" src="${post.profilePic}" alt="">
                <span>${post.username}</span>
            </div>
        `
    })

    return storyHtml
}

const renderStoryHtml = () => {
    document.getElementById("story").innerHTML = getStoryHtml()
}

renderStoryHtml()