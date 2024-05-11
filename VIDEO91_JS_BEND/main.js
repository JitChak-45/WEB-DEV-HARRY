const fs = require('fs');
const path = require('path');

const sourceDir = '/Users/jitchakraborty/Desktop/WEB-DEV-HARRY/VIDEO91_JS_BEND/Assets'; // Replace this with the actual source directory path

fs.readdir(sourceDir, (err, files) => {
  if (err) {
    console.error('Error reading directory:', err);
    return;
  }

  files.forEach(file => {
    const sourcePath = path.join(sourceDir, file);
    const ext = path.extname(file).toLowerCase();
    
    if (ext === '.jpg' || ext === '.png' || ext === '.pdf' || ext === '.zip') {
      const destDir = path.join(sourceDir, ext.substring(1));
      const destPath = path.join(destDir, file);

      if (!fs.existsSync(destDir)) {
        fs.mkdirSync(destDir);
      }

      fs.rename(sourcePath, destPath, err => {
        if (err) {
          console.error('Error moving file:', err);
        } else {
          console.log(`Moved ${file} to ${destPath}`);
        }
      });
    } else {
      console.log(`Skipped ${file} (unsupported file type)`);
    }
  });
});
