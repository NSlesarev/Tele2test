// переменные пк
const changeСity = document.querySelector(".header_city")
const tableCity = document.querySelector(".city-desctop")
const headerCity = document.querySelector(".header_city_city")

// переменные мобилки
const changeСityMobile = document.querySelector(".header_city")
const tableCityMobile = document.querySelector(".city-mobile")
const headerCityMobile = document.querySelector(".header_city_city")


// для пк
changeСity.addEventListener("click",() => {
    tableCity.classList.toggle("visible")
})

tableCity.onclick = function(event){
tableCity.classList.remove("visible");
// body.classList.remove("modal-open");
headerCity.innerHTML = event.target.innerHTML;
};


// для мобилки
changeСityMobile.addEventListener("click",() => {
    tableCityMobile.classList.toggle("visible")
})

tableCityMobile.onclick = function(event){
tableCityMobile.classList.remove("visible");
// body.classList.remove("modal-open");
headerCityMobile.innerHTML = event.target.innerHTML;
};

