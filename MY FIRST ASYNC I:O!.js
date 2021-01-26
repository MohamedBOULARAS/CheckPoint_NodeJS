const fs = require ('fs');

fs.readFile(process.argv[2], 'utf8', (err, string) => {
    if (err) return consol.error(err);
    const result = buffer.toString().split('\n').length - 1;

    console.log(result);
})

console.log("i'm in the buttom of the file")