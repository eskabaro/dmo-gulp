// const selectedAll = document.querySelectorAll(".select_box__dropdown");
// const submitBtn = document.getElementById("form-submit-btn");

// let state = {
//     regions: [],
//     package: "",
//     licences: 0,
// };

// const setRegions = (newRegions) => {
//     state.regions = newRegions;
//     // some logic here ...
// };

// const setLicences = (newLicences) => {
//     state.licences = newLicences;
//     // some logic here ...
// };

// selectedAll.forEach((selected) => {
//     const optionsContainer = selected.children[2];
//     const optionsList = selected.querySelectorAll("#item");

//     selected.addEventListener("click", () => {
//         let arrow = selected.children[1];

//         if (selected.classList.contains("active")) {
//             handleDropdown(selected, arrow, false);
//         } else {
//             let currentActive = document.querySelector(
//                 ".select_box__dropdown.active"
//             );

//             if (currentActive) {
//                 let anotherArrow = currentActive.children[1];
//                 handleDropdown(currentActive, anotherArrow, false);
//             }

//             handleDropdown(selected, arrow, true);
//         }
//     });

//     for (let o of optionsList) {
//         o.addEventListener("click", () => {
//             if (o.parentElement.id in state) {
//                 if (o.parentElement.id == "regions") {
//                     console.log(o.children[0]);
//                 } else {
//                     state[o.parentElement.id] = o.innerHTML;
//                 }
//             }

//             selected.querySelector(".selected_display").innerHTML = o.innerHTML;
//         });
//     }
// });

// window.addEventListener("click", (e) => {
//     if (e.target.closest(".select_box__dropdown") === null) {
//         closeAllDropdowns();
//     }
// });

// function closeAllDropdowns() {
//     const selectedAll = document.querySelectorAll(".select_box__dropdown");
//     selectedAll.forEach((selected) => {
//         const optionsContainer = selected.children[2];
//         let arrow = selected.children[1];

//         handleDropdown(selected, arrow, false);
//     });
// }

// function handleDropdown(dropdown, arrow, open) {
//     const list = dropdown.children[2];

//     if (open) {
//         list.style.top = `${dropdown.offsetHeight + 10}px`;
//         dropdown.classList.add("active");
//     } else {
//         dropdown.classList.remove("active");
//     }
// }

// const toggleDisableClass = () => {
//     const elements = document.querySelectorAll("#is-disable");

//     elements.forEach((item) => {
//         item.classList.toggle("is_disable");
//     });
// };

// submitBtn.addEventListener("click", () => {
//     const isValid = Object.values(state).every((field) => field == true);

//     if (isValid) {
//         console.log(state);
//     }
// });
