const posts = [
    {
        username: "faithax",
        profilePic: "./images/profile-pic.png",
        text: "Who else has visited the new water park in Abuja that just opened? well, i have and i had so much fun there.",
        likes: 40,
        replies: 35,
        shares: 10,
        time: 10,
        hasImage: false,
    },

    {
        username: "okoyemary",
        profilePic: "./images/profile-pic.png",
        image: "./images/image-post.png",
        text: "Found a new spot to work !",
        likes: 92,
        replies: 43,
        shares: 13,
        time: 13,
        hasImage: true,
    },

    {
        username: "davidade",
        profilePic: "./images/profile-pic.png",
        text: "Who else has visited the new water park in Abuja that just opened? well, i have and i had so much fun there",
        likes: 92,
        replies: 43,
        shares: 13,
        time: 13,
        hasImage: false,
    },

    {
        username: "tundeednot",
        profilePic: "./images/profile-pic.png",
        image: "./images/image-post-2.png",
        text: "Found a new spot to work !",
        likes: 92,
        replies: 43,
        shares: 13,
        time: 13,
        hasImage: true,
    },
]

const setStoryHtml = () => {
    let storyHtml = ''

    posts.forEach((post) => {
        if (post != posts[0]){
            storyHtml += `
            <div>
                <img class="mx-auto ring-primaryOrange w-12 h-12 p-1 rounded-full ring-2" src="${post.profilePic}" alt="">
                <span class="block mt-2">${post.username}</span>
            </div>
        `
        }
        
    })

    return storyHtml
}

const renderStoryHtml = () => {
    document.getElementById("story").innerHTML += setStoryHtml()
}

renderStoryHtml()

const setPostsHtml = () =>{
    let postsHtml = ''

    posts.forEach((post) => {
        postsHtml += `
        <div class="mb-12">
        <div class="flex items-center justify-between">
            <div class="flex items-center gap-1">
                <img class="mx-auto ring-primaryOrange w-12 h-12 p-1 rounded-full ring-2"
                    src="./images/profile-pic.png" alt="">
                <span class="text-myBlack text-sm ml-2 font-medium">@${post.username}</span>
                <span class="text-xs font-light ml-3 text-grayBg">${post.time} minutes ago</span>
            </div>

            <img src="./images/ellipsis.svg" alt="">
        </div>

        <p class="text-sm mt-5">
            ${post.text}
        </p>

        <img src="${post.hasImage ? post.image : ""}" class="w-full my-3">

        <div class="flex justify-start gap-3">
            <span class="flex gap-1 items-center">
                <img src="./images/like.svg" alt="" class="w-3.5 h-3.5">
                <span class="text-grayBg text-xs">${post.likes} Likes</span>
            </span>

            <span class="flex gap-1 items-center">
                <img src="./images/replies.svg" alt="" class="w-3.5 h-3.5">
                <span class="text-grayBg text-xs">${post.replies} replies</span>
            </span>

            <span class="flex gap-1 items-center">
                <img src="./images/share.svg" alt="" class="w-3.5 h-3.5">
                <span class="text-grayBg text-xs">${post.shares} shares</span>
            </span>
        </div>
    </div>
        `
    })

    return postsHtml
}

const renderPostsHtml = () => {
    document.getElementById("posts").innerHTML = setPostsHtml()
}

renderPostsHtml()