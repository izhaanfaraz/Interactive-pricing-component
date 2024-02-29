let view = document.getElementById("pageview");
let cost = document.getElementById("cost");
let cost2 = document.getElementById("cost2");
let slider = document.getElementById("price-slider");
let toggle = document.getElementById("billing")
let isYearly = false;
let pageview = ["10K", "50K", "100K", "500K", "1M"];
let permonth = [8, 12, 16, 24, 36];

slider.addEventListener("input", function() {
    updateValues();
    view.innerHTML = pageview[slider.value]

    let value = this.value *25
    this.style.background = `linear-gradient(to right,
        hsl(174, 77%, 80%)0%,
        hsl(174, 77%, 80%)${value}%,
        hsl(224, 65%, 95%)0%,
        hsl(224, 65%, 95%)100%
        )`
})
toggle.addEventListener("change", function() {
    if(isYearly == false) {
        isYearly = true;
    } else {
        isYearly = false;
    }
    updateValues();
})
function updateValues() {
    if(isYearly){
        cost.innerHTML = permonth[slider.value] * .75;
        cost2.innerHTML = permonth[slider.value] * .75;
    } else {
        cost.innerHTML = permonth[slider.value]
        cost2.innerHTML = permonth[slider.value]
    }
}

























