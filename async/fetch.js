fetch("https://api.github.com/users").then((res) =>{
    console.log(res);
    if(!res.ok){
        throw new Error(`Something went wrong${res.status}`)
    }
    return res.json()
})
.then((data)=> showGithubUsers(data)).catch((hata) => {
    console.log(hata);
    const userArticle = document.querySelector(".users")
    userArticle.innerHTML = `<h2 class="text-warning display-6>${hata}</h2>`
})

const showGithubUsers = (users) => {
    console.log(users);
    const userArticle = document.querySelector(".users")

    users.forEach((user)=>{
        // console.log(user);
        userArticle.innerHTML += `<h2 class="h6 text-warning">${user.login}</h2>
        <img class="w-25 mb-4" src=${user.avatar_url} alt"" />
        `
    })
}