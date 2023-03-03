const testimonialPromise = new Promise((resolve, reject) => {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://api.npoint.io/73b1fafa8c193fb391e8", true);
  xhr.onload = function () {
    if (xhr.status === 200) {
      resolve(JSON.parse(xhr.response));
    } else {
      reject("Data Error");
    }
  };

  xhr.onerror = () => reject("Network Error");
  xhr.send();
});

async function getAllTestimonials() {
  const response = await testimonialPromise;
  console.log(response);

  let testimonial = "";

  response.forEach((listBaru) => {
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

getAllTestimonials();

async function testimonialFiltered(rating) {
  const response = await testimonialPromise;

  let testimonial = "";
  let filterRating = response.filter((itemFiltered) => {
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
