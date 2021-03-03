const fs = require('fs');
const path = require('path');

const output_dir = '../public/vendor/';
const assets = [
  '../node_modules/react-datepicker/dist/react-datepicker.css',
  '../node_modules/react-quill/dist/quill.snow.css',
];

assets.forEach((asset_path) => {
  const filename = path.basename(asset_path);
  fs.createReadStream(path.resolve(__dirname, asset_path)).pipe(
    fs.createWriteStream(path.resolve(__dirname, output_dir, filename))
  );
});