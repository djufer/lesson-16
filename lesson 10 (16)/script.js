const getS = (selector) => document.querySelector(selector);

getS(".btn-edit").addEventListener("click", () => {
    getS(".edit-block").classList.add("show");
    getS(".style-block").classList.remove("show");
    getS(".edit-area").value = getS(".top-block").innerHTML;
});
getS(".btn-save").addEventListener("click", () => {
    getS(".edit-block").classList.remove("show");
    getS(".top-block").innerHTML = getS(".edit-area").value;
});

getS(".btn-style").addEventListener("click", () => {
    getS(".style-block").classList.add("show");
    getS(".edit-block").classList.remove("show");
});
//-------------------------------------------------------
function fontSize() {
    getS(".top-block").style.fontSize = event.target.value;
}
//---------------------------------------------------------

let fF = document.getElementById("fontFamily");
fF.addEventListener("change", (e) => {
    getS(".top-block").style.fontFamily = e.target.value;
    fF[0].style.display = "none";
});
//  hide option 'Choose option'
fF.addEventListener("mouseover", () => {
    fF[0].style.display = "none";
    fF.addEventListener("mouseout", () => {
        fF[0].textContent = "Choose option";
        fF[0].style.display = "block";
    });
});

// ========================================================
//        styling text and background color
function showColors() {
    getS(".colors").classList.remove("hide");
}
function hideColors() {
    getS(".colors").classList.add("hide");
}
let getColor = (e) => getComputedStyle(e.target).backgroundColor;

let property;
getS(".btn-text-color").addEventListener("click", () => {
    property = "textColor";
    showColors();
});
getS(".btn-background-color").addEventListener("click", () => {
    property = "backgroundColor";
    showColors();
});
getS(".colors").addEventListener("click", (e) => {
    if (property === "textColor") {
        getS(".top-block").style.color = getColor(e);
    } else {
        getS(".top-block").style.backgroundColor = getColor(e);
    }
    hideColors();
});

// ==========================================================
// start function text bold
getS(".fontBold").addEventListener("change", (e) => {
    if (e.target.checked) {
        getS(".top-block").classList.add("bold");
    } else {
        getS(".top-block").classList.remove("bold");
    }
});

// end function text bold
// =========================================================

getS(".fontCursive").addEventListener("click", (e) => {
    if (e.target.checked) {
        getS(".top-block").classList.add("cursive");
    } else {
        getS(".top-block").classList.remove("cursive");
    }
});
// -----------------------------------
getS(".btn-add").addEventListener("click", () => {
    getS(".first").classList.remove("show");
    getS(".second").classList.add("show");
});
// -------------------------------------------------------
//    show create-list block
getS(".list-radio").addEventListener("click", () => {
    getS(".create-table").classList.add("hide");
    getS(".create-list").classList.remove("hide");
});

// -------------------------------------------------------

const list = document.forms["form-list"];

list["btn-create"].addEventListener("click", () => {
    const countLi = list.count.value;
    const typeLi = list.type.value;
    getS(".edit-area").value += `<ul style="list-style-type: ${typeLi}">`;
    for (let i = 0; i < countLi; i++) {
        getS(".edit-area").value += `<li>${i + 1}item</li>`;
    }
    getS(".edit-area").value += `</ul>`;
    getS(".first").classList.add("show");
    getS(".second").classList.remove("show");
});

// -----------------------------------------------------
//    show create-table block
getS(".table-radio").addEventListener("click", () => {
    getS(".create-list").classList.add("hide");
    getS(".create-table").classList.remove("hide");
});
// -------------------------------------------------------
const table = document.forms["form-table"];

//
table.button.addEventListener("click", () => {
    const tr = table["countTR-input"].value;
    const td = table["countTD-input"].value;
    const width = table["widthTD-input"].value;
    const height = table["heightTD-input"].value;
    const borderWidth = table["border-width-input"].value;
    const borderType = table["border-type-input"].value;
    const borderColor = table["border-color-input"].value;
    //   create table
    getS(".edit-area").value +=
        "<table style= 'border-collapse: collapse; empty-cells: show'>";
    for (let i = 0; i < tr; i++) {
        getS(".edit-area").value += "<tr>";
        for (let j = 0; j < td; j++) {
            getS(".edit-area").value += `<td style = 'width: ${width}px;
                height: ${height}px;
                border: ${borderWidth}px ${borderType} ${borderColor}'></td>`;
        }
        getS(".edit-area").value += "</tr>";
    }
    getS(".edit-area").value += "</table>";

    //  hide second and show first
    getS(".first").classList.add("show");
    getS(".second").classList.remove("show");
});
