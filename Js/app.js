const uparrow = document.querySelector(".uparrow");
const dnarrow = document.querySelector(".dnarrow");
const frmlist = document.querySelector('.lstaa');
const lstg = document.querySelector('.lstg');
console.log(lstg);
const inpfield = document.getElementById("num");
let delet = document.querySelectorAll(".del");

function hasClass(element, className) {
    return (' ' + element.className + ' ').indexOf(' ' + className + ' ') > -1;
}

uparrow.addEventListener('click', e => {
    e.preventDefault();
    if (inpfield.value < 0) {
        inpfield.value = 0;
    }
    inpfield.value++;
});
dnarrow.addEventListener('click', e => {
    e.preventDefault();
    if (inpfield.value <= 0) {

    } else {
        inpfield.value--;
    }
});
frmlist.addEventListener('submit', e => {
    e.preventDefault();
    for (let i = 0; i < inpfield.value; i++) {
        let listitem = document.createElement("li");
        lstg.appendChild(listitem);
        listitem.classList.add('itm', 'list-group-item');
        listitem.innerHTML = 'Click here to edit<span class="del"><i class="fas delo  fa-trash-alt"></i></span>' +
            '<span class="k"><i class=" fas fa-check"></i></span>'
    }
    inpfield.value = 0;

});
lstg.addEventListener('click', e => {
    if ((e.target.tagName === "svg" && e.target.classList.contains("delo")) || (e.target.tagName === "span") && e.target.classList.contains("del")) {

        e.target.parentElement.parentElement.remove();
    }
    if (e.target.tagName === "path" && e.target.getAttribute("fill") == "currentColor" && e.target.parentElement.classList.contains("delo")) {
        e.target.parentElement.parentElement.parentElement.remove();
    }
});