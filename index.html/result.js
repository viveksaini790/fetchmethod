const myapi = {
  articles: [

    {
      id: 1,
      title: "Sports Update",
      description: "India wins the match",
      url: "https://www.youtube.com/results?search_query=sports+yaari",
      urlToImage: "./images/image.png",
      category: "Sports"
    },
    {
      id: 2,
      title: "Sports Update",
      description: "India wins the match",
      url: "https://www.youtube.com/results?search_query=sports+yaari",
      urlToImage: "./images/sports1.jpg",
      category: "Sports"
    },
    {
      id: 3,
      title: "Sports Update",
      description: "India wins the match",
      url: "https://www.youtube.com/results?search_query=sports+yaari",
      urlToImage: "./images/sports2.jpg",
      category: "Sports"
    },
    {
      id: 4,
      title: "Sports Update",
      description: "India wins the match",
      url: "https://www.youtube.com/results?search_query=sports+yaari",
      urlToImage: "./images/sports3.webp",
      category: "Sports"
    },
    {
      id: 1,
      title: "Business Growth",
      description: "Startup funding increases",
      url: "https://www.youtube.com/results?search_query=business+news",
      urlToImage: "./images/business1.webp",
      category: "Business"

    },
    {
      id: 2,
      title: "Business Growth",
      description: "Startup funding increases",
      url: "https://www.youtube.com/results?search_query=business+news",
      urlToImage: "./images/business2.jpg",
      category: "Business"

    },
    {
      id: 3,
      title: "Business Growth",
      description: "Startup funding increases",
      url: "https://www.youtube.com/results?search_query=business+news",
      urlToImage: "./images/business3.avif",
      category: "Business"

    },
    {
      id: 4,
      title: "Business Growth",
      description: "Startup funding increases",
      url: "https://www.youtube.com/results?search_query=business+news",
      urlToImage: "./images/business4.avif",
      category: "Business"

    },
  ]
};

document.addEventListener('DOMContentLoaded', function () {
  let mylink = document.querySelectorAll("a");

  mylink[0].addEventListener("click", function (event) {
    event.preventDefault();
    // getdata('All News');
    getdata();
  });

  mylink[1].addEventListener("click", function (event) {
    event.preventDefault();
    getdata('Sports');

  });
  mylink[2].addEventListener("click", function (event) {
    event.preventDefault();
    getdata('Business');

  });

});

function getdata(cat) {

  let data = myapi.articles;

  if (cat) {
    data = data.filter(item => item.category === cat);
  }

  let totalresult = data.map(item => {
    return `
      <div class="news">
        <img src="${item.urlToImage}">
        
        <div class="data">
          <h2>${item.title}</h2>
          <p>${item.description}</p>
          <a href="${item.url}" target="_blank">More News</a>
        </div>
      </div>
    `;
  });

  document.getElementById("myrow").innerHTML = totalresult.join('');
}

getdata();

