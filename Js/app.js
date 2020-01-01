const uparrow = document.querySelector(".uparrow");
const dnarrow = document.querySelector(".dnarrow");
const frmlist = document.querySelector('.lstaa');
const lstg = document.querySelector('.lstg');
let h;
const inpfield = document.getElementById("num");
let inputs = document.querySelectorAll(".npt");
let g;
let body = document.querySelector('body');
let inp = document.querySelectorAll('.pt');
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
        listitem.innerHTML = '<p class="npt">Click here to edit</p><span class="del"><i class="fas delo  fa-trash-alt"></i></span>' +
            '<span class="k"><i class="ado fas fa-check"></i></span>'
        inputs = document.querySelectorAll(".npt");


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

        e.target.innerHTML = '<input  class="pt" autofocus type="text" value="' + c + '" name="list" id="">'
       e.target.firstChild.select().focus();
        inp = document.querySelectorAll('.pt');

        inputs = document.querySelectorAll(".npt");

    }
    else {

    }


    lstg.addEventListener('click', c => {
        if (c.target.tagName == "P")
            h = c.target.innerHTML;
        g = c.target;
    });
    lstg.addEventListener('mouseout', c => {
        if (c.target.tagName == "INPUT")
            h = c.target.value;
        g = c.target;
    });
    lstg.addEventListener('change', c => {
        if (c.target.tagName == "INPUT")
            h = c.target.value;
        g = c.target;
    });

    if ((g.parentElement.parentElement === e.target.parentElement.parentElement && e.target.tagName === "svg" && e.target.classList.contains("ado")) || (e.target.tagName === "span") && e.target.classList.contains("k") && g.parentElement.parentElement === e.target.parentElement) {
        e.target.parentElement.parentElement.firstChild.innerHTML = h;
    } else if (g.parentElement.parentElement === e.target.parentElement.parentElement.parentElement && e.target.tagName === "path" && e.target.getAttribute("fill") == "currentColor" && e.target.parentElement.classList.contains("ado")) {
        e.target.parentElement.parentElement.parentElement.firstChild.innerHTML = h;
    } else if (e.target.tagName === "LI" && g.parentElement.parentElement == e.target && e.target.firstChild.firstChild.tagName === "INPUT") {
        e.target.firstChild.innerHTML = h;
    } else if (e.target.tagName === "LI" && e.target.firstChild.firstChild.tagName === "INPUT") {
        e.target.parentElement.children.firstChild.innerHTML = e.target.parentElement.children.firstChild.firstChild.value;
    }
});
body.addEventListener('click', ev => {
    inputs = document.querySelectorAll(".npt");
    inp = document.querySelectorAll('.pt');

    inputs.forEach((put) => {
        inp.forEach((inut) => {
            if ((ev.target != inut && !(ev.target.classList.contains("npt") && ev.target.firstCild.tagName == "INPUT")) || (ev.target.classList.contains("npt") && !(ev.target.firstCild.tagName == "INPUT") && ev.target.ParentElement.siblings().firstChild.firstChild.tagName == "INPUT")) {
                inut.parentElement.innerHTML = inut.value;
            }
        })
    })
});