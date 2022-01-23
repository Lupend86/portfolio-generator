const fs = require('fs');
const generatePage = require('./src/page-template.js');

const profileDataArgs = process.argv.slice(2, process.argv.length);

const [name, github] = profileDataArgs;

console.log(profileDataArgs);

fs.writeFile('index.html', generatePage(name, github), err => {
    if (err) throw new Error (err);

    console.log('Portfolio complete! Checkout index.html to see the output!');
});


/* const printProfileData = profileDataArr => {
    // This...
    for (let i = 0; i < profileDataArr.length; i+= 1) {
      console.log(profileDataArr[i]);
    }

    console.log('================');

    // is the same as this...
    profileDataArr.forEach(profileItem => console.log(profileItem));
}

printProfileData(profileDataArgs);  */