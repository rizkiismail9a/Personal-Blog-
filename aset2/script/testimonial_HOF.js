// Metode HoF

let testimonialData = [
  { nama: "Asep", quote: "Gokil!", rating: 4, image: `https://images.unsplash.com/photo-1600891406749-c179609d8475?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dHJpYmV8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60` },
  { nama: "Endang", quote: "Penipuan!", rating: 1, image: `https://images.unsplash.com/photo-1533645782036-997947a9d529?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80` },
  {
    nama: "Cucu",
    quote: "GG Geming! Tapi Boong",
    rating: 3,
    image: `https://images.unsplash.com/photo-1627394679983-b6cff2bd5c25?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fHRyaWJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60`,
  },
  { nama: "Aang", quote: "Mantap abiez", rating: 5, image: `https://images.unsplash.com/photo-1537706388178-55c10865b82e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8dHJpYmV8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60` },
  { nama: "Usep Surasep", quote: "Keren, Bang!", rating: 4, image: `https://images.unsplash.com/photo-1600891406749-c179609d8475?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dHJpYmV8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60` },
];

function allTestimonials() {
  let testimonial = "";

  testimonialData.forEach((listBaru) => {
    testimonial += `<div class="container1">
          <div class="container2">
               <img src="${listBaru.image}" />
               <p style="text-align: left; font-style: italic">${listBaru.quote}</p>
               <p style="text-align: right">~${listBaru.nama}</p>
               <div class="rating2">
                <p style=" text-align: right;">${listBaru.rating}<i class="fa-solid fa-star"></i></p>
              </div>
             </div>
           </div>`;
  });

  document.getElementById("container").innerHTML = testimonial;
}

allTestimonials();

function testimonialFiltered(rating) {
  // chain
  let testimonial = "";
  let filterRating = testimonialData.filter((itemFiltered) => {
    return itemFiltered.rating === rating;
  });
  if (filterRating.length === 0) {
    testimonial += `<h1>Data Not Found</h1>`;
  } else {
    filterRating.forEach((itemFiltered) => {
      testimonial += `<div class="container1">
        <div class="container2">
             <img src="${itemFiltered.image}" />
             <p font-style: italic">${itemFiltered.quote}</p>
             <p style="text-align: right">~${itemFiltered.nama}</p>
             <div class="rating2">
                  <p >${itemFiltered.rating}<i class="fa-solid fa-star"></i></p>
                </div>
           </div>
         </div>`;
    });
  }
  document.getElementById("container").innerHTML = testimonial;
}
