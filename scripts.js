document.addEventListener('DOMContentLoaded', function() {
    var news = [
        {
            title: "Inauguración de la nueva temporada",
            img: "https://www.buzzwebzine.fr/wp-content/uploads/2018/06/disco-foot-01.jpg",
            description: "La nueva temporada de Dance Football se inaugurará la próxima semana, con equipos de todo el mundo compitiendo por la supremacía en este emocionante deporte."
        },
 {
            title: "Dance Football ha sido parido",
            img: "https://live.staticflickr.com/4746/39743614582_b824aa91d4_z.jpg",
            description: "Dominos Pizza ha sido testigo del nacimiento de este gran deporte."
        },
       
        // Añade aquí las demás noticias
        // ...
    ];

    var newsCarousel = document.getElementById('news-carousel').querySelector('.carousel-inner');
    for (var i = 0; i < news.length; i++) {
        var newsItem = document.createElement('div');
        newsItem.classList.add('carousel-item');
        newsItem.setAttribute('data-interval', 10000);
        if (i === 0) {
            newsItem.classList.add('active');
        }
        newsItem.innerHTML = `
            <img src="${news[i].img}" class="d-block w-100" alt="${news[i].title}">
            <div class="carousel-caption d-none d-md-block">
                <h5>${news[i].title}</h5>
                <p>${news[i].description}</p>
            </div>
        `;
        newsCarousel.appendChild(newsItem);
    }
});
