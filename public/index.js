const cars1 = document.querySelector("#cars1");
const cars2 = document.querySelector("#cars2");
const button = document.querySelector("#compareButton");
const result = document.querySelector("#result");

cars1.innerHTML = `<option value="">Select car</option>`
cars2.innerHTML = `<option value="">Select car</option>`

window.addEventListener("load", () => {
    fetch("/cars", {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then((res) => res.json())
    .then((data) => {
        data.forEach(elem => {
            cars1.innerHTML += `<option value="${elem._id}">${elem.brand + " " + elem.name}</option>`
            cars2.innerHTML += `<option value="${elem._id}">${elem.brand + " " + elem.name}</option>`
        });
    })
})

button.addEventListener("click", () => {
    let car1 = cars1.value;
    let car2 = cars2.value;
    fetch("/cars", {
        body: JSON.stringify({car1, car2}),
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then((res) => res.json())
    .then((data) => {
        result.innerHTML = "";

        data.carsArray.forEach(elem => {
            result.innerHTML += `<h3>
                                    ${elem.name}
                                </h3>
                                <table class="col table table-bordered">
                                    <tbody>
                                        <tr>
                                            <th>Year</th>
                                            <td>${elem.year}</td>
                                        </tr>
                                        <tr>
                                            <th>Engine</th>
                                            <td>${elem.engine}</td>
                                        </tr>
                                        <tr>
                                            <th>Displacement(L)</th>
                                            <td>${elem.displacement}</td>
                                        </tr>
                                        <tr>
                                            <th>HP</th>
                                            <td id="p${elem._id}_hp">${elem.horsepower}</td>
                                        </tr>
                                        <tr>
                                            <th>Torque (Nm)</th>
                                            <td id="p${elem._id}_tor">${elem.torque}</td>
                                        </tr>
                                        <tr>
                                            <th>Top Speed (Km/h)</th>
                                            <td id="p${elem._id}_tp">${elem.top_speed}</td>
                                        </tr>
                                        <tr>
                                            <th>0-100 Km/h (s)</th>
                                            <td id="p${elem.zero_to_onehundred}_z">${elem.zero_to_onehundred}</td>
                                        </tr>
                                    </tbody>
                                </table>
                                
                                `;
        });
        data.comparison.forEach(elem => {
            document.querySelector("#p" + elem.horsepower_winner.car + "_hp").innerHTML += " (+" + elem.horsepower_winner.diff + ")";
            document.querySelector("#p" + elem.horsepower_winner.car + "_hp").style = "color: green";

            document.querySelector("#p" + elem.horsepower_loser.car + "_hp").innerHTML += " (-" + elem.horsepower_winner.diff + ")";
            document.querySelector("#p" + elem.horsepower_loser.car + "_hp").style = "color: red";

            document.querySelector("#p" + elem.torque_winner.car + "_tor").innerHTML += " (+" + elem.torque_winner.diff + ")";
            document.querySelector("#p" + elem.torque_winner.car + "_tor").style = "color: green";

            document.querySelector("#p" + elem.torque_loser.car + "_tor").innerHTML += " (-" + elem.torque_winner.diff + ")";
            document.querySelector("#p" + elem.torque_loser.car + "_tor").style = "color: red";

            document.querySelector("#p" + elem.top_speed_winner.car + "_tp").innerHTML += " (+" + elem.top_speed_winner.diff + ")";
            document.querySelector("#p" + elem.top_speed_winner.car + "_tp").style = "color: green";

            document.querySelector("#p" + elem.top_speed_loser.car + "_tp").innerHTML += " (-" + elem.top_speed_winner.diff + ")";
            document.querySelector("#p" + elem.top_speed_loser.car + "_tp").style = "color: red";

            document.querySelector("#p" + elem.zero_to_onehundred_winner.car + "_z").innerHTML += " (+" + elem.zero_to_onehundred_winner.diff + ")";
            document.querySelector("#p" + elem.zero_to_onehundred_winner.car + "_z").style = "color: green";

            document.querySelector("#p" + elem.zero_to_onehundred_loser.car + "_z").innerHTML += " (-" + elem.zero_to_onehundred_winner.diff + ")";
            document.querySelector("#p" + elem.zero_to_onehundred_loser.car + "_z").style = "color: red";
        })
    })
})



// const car1Field = document.querySelector("#car1Field");
// const resultDiv = document.querySelector("#results");

// const car2Field = document.querySelector("#car2Field");
// const resultDiv2 = document.querySelector("#results2")

// car1Field.addEventListener("keyup", () => {
//     const searchValue = car1Field.value;
//     if(searchValue.trim().length > 0) {
//         fetch("/cars", {
//             body: JSON.stringify({searchValue}),
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json"
//             }
//         })
//         .then((res) => res.json())
//         .then((data) => {
//             console.log(data);
//             resultDiv.style.display = "block";
//             resultDiv.innerHTML = "";
//             data.forEach(elem => {
//                 resultDiv.innerHTML += `<p>${elem.name}</p>`
//             });
//         })
//     } else {
//         resultDiv.style.display = "none";
//     }
// })

// car2Field.addEventListener("keyup", () => {
//     const searchValue = car2Field.value;
//     if(searchValue.trim().length > 0) {
//         fetch("/cars", {
//             body: JSON.stringify({searchValue}),
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json"
//             }
//         })
//         .then((res) => res.json())
//         .then((data) => {
//             console.log(data);
//             resultDiv2.style.display = "block";
//             resultDiv2.innerHTML = "";
//             data.forEach(elem => {
//                 resultDiv2.innerHTML += `<p>${elem.name}</p>`
//             });
//         })
//     } else {
//         resultDiv2.style.display = "none";
//     }
// })

