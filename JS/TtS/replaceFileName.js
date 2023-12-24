const fs = require('fs');
const path = require("path")
const replaceThis = "sample"
const replaceWith = "sample1"
const folder = __dirname
let preview = true

try {
    // const data1 = fs.readdir("data", (err, data) => {
     fs.readdir(folder, (err, data) => {
        console.log(data);
        // renaming file 
        for (let i = 0; i < data.length; i++) {
            const iteam = data[i];
            const newFileName =path.join(folder , iteam.replaceAll(replaceThis, replaceWith))
            // TODO: use basename to check condtion
            // const newFile =path.basename(``)
            const oldFile =path.join(folder, iteam)
            // console.log(iteam, newFileName)
            if (!preview) {
                fs.rename(oldFile, newFileName, (err) => {
                    console.log("rename Sucess!!")
                })
            }
            else if(oldFile==newFileName){   
                console.log(oldFile +" will reteian same as "+newFileName)
                console.log(path.basename(oldFile))
            }
            else{
                console.log(oldFile +" will be rename to "+newFileName)

            }
            // console.log(data);

        }
    })
} catch (err) {
    console.error(err);
}

/*
bat file for auto run windows'
@REM echo "hellow world"
@REM this will call this file using cmd
@REM start cmd /k call index.js 
@REM this will run this code
@REM start "Window title" /wait start cmd /k call %0/../index.js 
@REM to close this window
@REM cmd /c
@REM start index.js
@REM (index.js)
@REM start cmd "./index.js"

@REM cd  %~dp0data
@REM echo %0
echo off
cd replaceX
node index.js

*/
