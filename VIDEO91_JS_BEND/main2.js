const fs=require('fs');
const path=require('path');

const sourceDir = 'C:/Users/Jit Chakraborty/OneDrive/Desktop/WEB DEV(HARRY)/VIDEO91_JS_BEND/Assets2';
fs.readdir(sourceDir,(err,files)=>{
    if(err){
        console.log("Error in reading directory : ",err);
    }

    files.forEach(file=>{
        const sourcePath=path.join(sourceDir,file);
        const ext=path.extname(file).toLowerCase();

        if(ext==='.pdf' || ext==='.jpg' || ext==='.zip' || ext==='.txt'){
            const destDir=path.join(sourceDir,ext.substring(1));
            const destPath=path.join(destDir,file);

            if(!fs.existsSync(destDir)){
                fs.mkdirSync(destDir);
            }

            fs.rename(sourcePath,destPath,err=>{
                if (err) {
                    console.log("Trouble in reading files\n");
                }else{
                    console.log(`Moved ${file} to ${destDir}\n`);
                }
            })
        }
        else{
            console.log("Something unexpected files are come")
        }
    })
})