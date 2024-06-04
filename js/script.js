document.addEventListener("DOMContentLoaded", () => {
    const gallery = document.querySelector('.container');
    const images = [
        {
            linkImage: 'https://www.mensjournal.com/.image/t_share/MjA1Mjc2NTA4NjAyNzcwOTY0/grizzly-bear-katmai-national-park-alaska.jpg',
            name: "BEAR",
            type: "SLOTH",
            country: "usa"
        },
        {
            linkImage: 'https://upload.wikimedia.org/wikipedia/commons/6/66/Polar_Bear_-_Alaska_%28cropped%29.jpg',
            name: "BEAR HYBRID",
            type: "GRIZZLY-POLAR",
            country: "usa"
        },
        {
            linkImage: 'https://cdn.britannica.com/18/235818-050-9246E9F3/American-black-bear-ursus-americanus-close-up.jpg',
            name: "BEAR",
            type: "AMERICAN BLACK",
            country: "usa"
        },
        {
            linkImage: 'https://www.pbs.org/wnet/nature/files/2014/10/BrownBear-Main-1280x720.jpg',
            name: "BEAR",
            type: "BROWN",
            country: "usa"
        }
    ];

    images.forEach(src => {
        const list = document.createElement('div');
        list.className = 'img';  // Correctly assign the class name

        list.innerHTML = `
                <div class="container">
                <img src="${src.linkImage}" alt="${src.name}"/>
                <div class="specifications">
                    <p class="title">${src.name}</p>
                    <p class="title">${src.type}</p>
                    <p>${src.country}</p>
                </div>
                </div>
           
        `;

        gallery.appendChild(list);  // Append the list to the gallery
    });
});