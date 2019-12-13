const uparrow = document.querySelector(".uparrow");
const dnarrow = document.querySelector(".dnarrow");
const frmlist = document.querySelector('.lstaa');
const lstg = document.querySelector('.lstg');
let h;
const inpfield = document.getElementById("num");
let inputs = document.querySelectorAll(".npt");
let g;
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
        listitem.innerHTML = '<p>Click here to edit</p><span class="del"><i class="fas delo  fa-trash-alt"></i></span>' +
            '<span class="k"><i class="ado fas fa-check"></i></span>'
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
    if (e.target.tagName === "P") {
        let c = e.target.textContent;
        e.target.innerHTML = '<input class="npt" type="text" value="' + c + '" name="list" id="">'
        // e.target.parentElement.removeChild(e.target)
    }
    inputs = document.querySelectorAll(".npt");

    inputs.forEach((input) => {
        input.addEventListener('change', c => {
            g = input;
            h = input.value;
        })
    })
    if ((g.parentElement.parentElement === e.target.parentElement.parentElement && e.target.tagName === "svg" && e.target.classList.contains("ado")) || (e.target.tagName === "span") && e.target.classList.contains("k") && g.parentElement.parentElement === e.target.parentElement) {
        {

            e.target.parentElement.parentElement.firstChild.innerHTML = '<p>' + h + '</p>'
        }
    }

    if (g.parentElement.parentElement === e.target.parentElement.parentElement.parentElement && e.target.tagName === "path" && e.target.getAttribute("fill") == "currentColor" && e.target.parentElement.classList.contains("ado")) {

        e.target.parentElement.parentElement.parentElement.firstChild.innerHTML = '<p>' + h + '</p>'

    }

});
