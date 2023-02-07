const fs = require("fs");

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

if (!fs.existsSync("./data")) {
  fs.mkdirSync("./data");
  console.log("Success create folder");
}

if (!fs.existsSync("./data/contacts.json")) {
  fs.writeFileSync("./data/contacts.json", "[]");
  console.log("Success create file");
}

readline.question("Name: ", (name) => {
  readline.question("Telephone: ", (telephone) => {
    readline.question("Email: ", (email) => {
      const myObj = { name: `${name}`, email: `${email}`, telephone: `${telephone}` };
      const file = fs.readFileSync("./data/contacts.json", "utf-8");
      const myData = JSON.parse(file);
      myData.push(myObj);
      const content = JSON.stringify(myData);
      fs.writeFileSync("./data/contacts.json", content);
      readline.close();
    });
  });
});
