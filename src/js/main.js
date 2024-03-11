// переменные пк выбор города
const changeСity = document.querySelector(".header_city")
const tableCity = document.querySelector(".city-desctop")
const headerCity = document.querySelector(".header_city_city")

// переменные мобилки выбор города
const changeСityMobile = document.querySelector(".header_city")
const tableCityMobile = document.querySelector(".city-mobile")
const headerCityMobile = document.querySelector(".header_city_city")



const cityConfirmationModal = document.getElementById(".header-planka");
const confirmCityBtn = document.getElementById(".header-planka__options__yes");
const changeCityBtn = document.getElementById(".header-planka__options__change");
const currentCitySpan = document.getElementById("currentCity");




  



// для пк выбор города
changeСity.addEventListener("click",() => {
    tableCity.classList.toggle("visible")
})

tableCity.onclick = function(event){
tableCity.classList.remove("visible");
// body.classList.remove("modal-open");
headerCity.innerHTML = event.target.innerHTML;
};


// для мобилки выбор города
changeСityMobile.addEventListener("click",() => {
    tableCityMobile.classList.toggle("visible")
})

tableCityMobile.onclick = function(event){
tableCityMobile.classList.remove("visible");
// body.classList.remove("modal-open");
headerCityMobile.innerHTML = event.target.innerHTML;
};

