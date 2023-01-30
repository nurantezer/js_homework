//*hangi apiden veri cekiyorsam dönüş değerine bakmam lazım burada mesela articles dan çekiyor,data da başka birşey
//*de yazabilirdi.
//*node.js tabanlı uygulamalarda .env(environment)-gitignore yapılıp saklanır
 https://newsapi.org/v2/top-headlines?country=us&apiKey=b8f4e7e8a30e4be9919e6e131c6d63c4

const getNews = async () => {
  const API_KEY = "b8f4e7e8a30e4be9919e6e131c6d63c4"
  const URL = `https://newsapi.org/v2/top-headlines?country=us&apiKey${API_KEY}`

  try {
    const res = await fetch(URL)
    if (!res.ok) {
      throw new Error("Something went wrong")
    }
    const data = await res.json()
    //  console.log(data.articles)
    renderNews(data.articles)
  } catch (error) {
    renderError(error)
  }
}
const renderNews = (news) => {
  console.log(news)
  const newsDiv = document.getElementById("news")

  news.forEach((item) => {
    const { title, description, urlToImage, url } = item //? dest
    newsDiv.innerHTML += `
    <div class="col-md-6 col-lg-4 col-xl-3">
      <div class="card">
         <img src="${urlToImage}" class="card-img-top" alt="...">
         <div class="card-body">
            <h5 class="card-title">${title}</h5>
            <p class="card-text">${description}</p>
            <a href="${url}" target="_blank" class="btn btn-warning">Detail</a>
         </div>
      </div>
   </div>
  
  `
  })
}

const renderError = (err) => {
  console.log(err)
  const newsDiv = document.getElementById("news")
  newsDiv.innerHTML = ` 
   <h2 class="text-danger">News cannot be fetched</h2>
   <img src="./img/404.png" alt="" />
  `
}

getNews()