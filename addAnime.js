// const fs = require("fs");
// const path = require("path");
// //const crypto = require("crypto");

// const pathJSON = path.join(__dirname, "data/db.json");

// const readJSON = () => {
//     const data = fs.readFileSync(pathJSON, "utf-8");
//     return JSON.parse(data);
// };

// const writeJSON = (data) => {
//     const template = {
//         animes: data,
//     };
//     fs.writeFileSync(pathJSON, JSON.stringify(template, null, 4), "utf-8");
// };

// const { animes } = readJSON();

// animes.push({
//     "animeName": "Fullmetal Alchemist",
// });

// writeJSON(animes);



const fs = require('fs')
const customer = {
    name: "Newbie Co.",
    order_count: 0,
    address: "Po Box City",
}
const jsonString = JSON.stringify(customer)fs.writeFileSync('./newCustomer.json', jsonString)
    if (err) {
        console.log('Error writing file', err)
    } else {
        console.log('Successfully wrote file')
    }
