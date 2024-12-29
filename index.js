let left_btn = document.getElementsByClassName('bi-chevron-left')[0];
let right_btn = document.getElementsByClassName('bi-chevron-right')[0];
let cards = document.getElementsByClassName('cards')[0];
let input_search = document.getElementsByClassName('input_search')[0];
let search_input = document.getElementById('search_input');

left_btn.addEventListener('click', () => {
    cards.scrollLeft -= 140;
})

right_btn.addEventListener('click', () => {
    cards.scrollLeft += 140;
})


let json_url = "movie.json"

fetch(json_url).then(Response => Response.json())
    .then((data) => {
        data.forEach((ele, i) => {
            let { name, imdb, date, sposter, bposter, genre, url } = ele;
            let card = document.createElement('a');
            card.classList.add('card');
            card.href = url;
            card.innerHTML = `
                    <img src="${sposter}" alt="${name}" class="posture">
                    <div class="rest_card">
                        <img src="${bposter}" alt="">
                        <div class="cont">
                            <h4> ${name}</h4>
                            <div class="sub">
                                <p>${genre} , ${date}</p>

                                <h3><span>IMDB</span><i class="bi bi-star-fill"> ${imdb} </i></h3>
                            </div>
                        </div>
                    </div>
            `
            cards.appendChild(card);
        });
        document.getElementById('title').innerText = data[0].name;
        document.getElementById('gen').innerText = data[0].genre;
        document.getElementById('date').innerText = data[0].date;
        document.getElementById('rate').innerHTML = `<span>IMDB</span><i class="bi bi-star-fill"></i>${data[0].imdb}`;

        // for search uses :-
        data.forEach((ele, i) => {
            let { name, imdb, date, sposter, genre, url } = ele;
            let card = document.createElement('a');
            card.classList.add('card');
            card.href = url;
            card.innerHTML = `
                    <img src="${sposter}" alt="">
                        <div class="cont">
                            <h3>${name}</h3>
                            <p>${genre} , ${date} ,<span>IMDB</span><i class="bi bi-star-fill"></i>${imdb}
                            </p>
                        </div>
            `
            input_search.appendChild(card);
        });

        //  search filter
        search_input.addEventListener('keyup', () => {
            let filter = search_input.value.toUpperCase();
            let a = input_search.getElementsByTagName('a');

            for (let index = 0; index < a.length; index++) {
                let b = a[index].getElementsByClassName('cont')[0];

                //console.log(a.texcontent);

                let TextValue = b.textContent || b.innerText;

                if (TextValue.toUpperCase().indexOf(filter) > - 1) {
                    a[index].style.display = "flex";
                    input_search.style.visibility = "visible";
                    input_search.style.opacity = 1;
                } else {
                    a[index].style.display = "none";
                }
                if (search_input.value == 0) {
                    input_search.style.visibility = "hidden";
                    input_search.style.opacity = 0;
                }
            }
        })
        let video = document.getElementsByTagName('video')[0];
        let play = document.getElementById('play');
        play.addEventListener('click', () => {
            if (video.paused) {
                video.play();
                play.innerHTML = ` Play <i class="bi bi-pause-fill"></i>`
            } else {
                video.paused();
                play.innerHTML = ` watch <i class="bi bi-play-fill"></i>`
            }
        })
        let series = document.getElementById('series');
        let movies = document.getElementById('movies');


        series.addEventListener('click', () => {
            cards.innerHTML = '';
            let series_array = data.filter(ele => {
                return ele.type === "series";
            });

            series_array.forEach((ele, i) => {
                let { name, imdb, date, sposter, bposter, genre, url } = ele;
                let card = document.createElement('a');
                card.classList.add('card');
                card.href = url;
                card.innerHTML = `
                        <img src="${sposter}" alt="${name}" class="posture">
                        <div class="rest_card">
                            <img src="${bposter}" alt="">
                            <div class="cont">
                                <h4> ${name}</h4>
                                <div class="sub">
                                    <p>${genre} , ${date}</p>
    
                                    <h3><span>IMDB</span><i class="bi bi-star-fill"> ${imdb} </i></h3>
                                </div>
                            </div>
                        </div>
                `
                cards.appendChild(card);
            });
        })
        movies.addEventListener('click', () => {
            cards.innerHTML = '';
            let movies_array = data.filter(ele => {
                return ele.type === "movie";
            });

            movies_array.forEach((ele, i) => {
                let { name, imdb, date, sposter, bposter, genre, url } = ele;
                let card = document.createElement('a');
                card.classList.add('card');
                card.href = url;
                card.innerHTML = `
                        <img src="${sposter}" alt="${name}" class="posture">
                        <div class="rest_card">
                            <img src="${bposter}" alt="">
                            <div class="cont">
                                <h4> ${name}</h4>
                                <div class="sub">
                                    <p>${genre} , ${date}</p>
    
                                    <h3><span>IMDB</span><i class="bi bi-star-fill"> ${imdb} </i></h3>
                                </div>
                            </div>
                        </div>
                `
                cards.appendChild(card);
            });
        })
    });