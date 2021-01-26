const fs = require ('fs');
const path = require ('path');


module.exports = (dir, ext, callback) => {
    ext = `.${ext}`;
    fs.readdir(diretory, (err, list) => {
        if (err) return consol.error(err);

        const filtred = list.filtre( file => file.extname(file) === ext);

        return callback (null, filtred);
});
}