const fs = require ('fs');
const path = require ('path');

const diretory = process.argv[2];
const extension = `.${process.argv[3]}`;

fs.readdir(diretory, (err, list) => {
    if (err) return consol.error(err);
    list.forEach(file => {
        if (path.extname(file) === extension) {
            console.log(file);
        }
    });
});