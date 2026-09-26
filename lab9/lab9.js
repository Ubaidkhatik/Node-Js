const fs= require('fs');
 
//1.Write data to a file
fs.writeFile('demo.txt','This file system module demo.\n', function(err){
    if(err) throw err;
    console.log('File created and data written.');

    //2.Append data to a file
    fs.appendFile('demo.txt','Data appended to fs nodule.\n', function(err){
        if(err) throw err;
        console.log('Data appended.');

        //3.Read data From a file 
        fs.readFile('demo.txt','utf8', function(err, data){
            if(err) throw err;
            console.log('File Content:\n'+ data);

            //4.Delete a file
            fs.unlink('demo.txt', function(err){
                if(err) throw err;
                console.log('File deleted.');
            })
        })
    })
})