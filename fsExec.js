/**
 * Node.js FILE SYSTEM MODULE
 * Node.js as a File Server
 * The Node.js file system module allows you to work with the file system on your computer.
 * Common use for the File System module:
 * Read files - fs.readFile()
 * Create files - fs.appendFile(), fs.open(), fs.writeFile()
 * Update files - fs.appendFile(), fs.writeFile()
 * Delete files
 * Rename files
 */

// To include the File System module, use the require() method:
const fs = require('fs');
const http = require('http');
const { StringDecoder } = require('node:string_decoder');
const decoder = new StringDecoder('utf8');

function fsExec(funcType, path, content, returnedData) {

    //The fs.readFile() method is used to read files on your computer.
    if (funcType === 'read') {
        // Create a Node.js file that reads the HTML file, and return the content:
        fs.readFile(path, function (err, data) {
            if (err) throw err;
            // const bb = 'ABC: '   +   decoder.write(Buffer.from('abc'))
            //         +'\ncent: ' +   decoder.write(Buffer.from([0xC2, 0xA2]))
            //         +'\neuro: ' +   decoder.write(Buffer.from([0xE2, 0x82, 0xAC]));
            // console.log(bb); // Prints & write decoded buffer: ¢, €, abc
            returnedData(decoder.write(data));
        });
    }

    //The fs.appendFile() method appends specified content to a file. If the file does not exist, the file will be created:
    else if (funcType === 'append') {
        //Create a new file using the appendFile() method:
        fs.appendFile(path, content, function (err) {
            if (err) throw err;
            console.log('Saved!');
        });
    }

    //The fs.open() method takes a "flag" as the second argument, if the flag is "w" for "writing", the specified file is opened for writing. If the file does not exist, an empty file is created:
    else if (funcType === 'open') {
        // Create a new, empty file using the open() method:
        fs.open(path, 'w', function (err, file) {
            if (err) throw err;
            console.log('Saved!');
        });
    }

    // The fs.writeFile() method replaces the specified file and content if it exists. If the file does not exist, a new file, containing the specified content, will be created:
    else if (funcType === 'write') {
        // Create a new file using the writeFile() method:        
        fs.writeFile(path, 'Hello content!', function (err) {
            if (err) throw err;
            console.log('Saved!');
        });
    }

    // The fs.appendFile() method appends the specified content at the end of the specified file:
    else if (funcType === 'updateAppend') {
        // Append "This is my text." to the end of the file "mynewfile1.txt":        
        fs.appendFile(path, ' This is my text.', function (err) {
            if (err) throw err;
            console.log('Updated!');
        });
    }

    // The fs.writeFile() method replaces the specified file and content:
    else if (funcType === 'updateWrite') {
        // Replace the content of the file "mynewfile3.txt":
        fs.writeFile(path, 'This is my text', function (err) {
            if (err) throw err;
            console.log('Replaced!');
        });
    }

    // To delete a file with the File System module,  use the fs.unlink() method. The fs.unlink() method deletes the specified file:
    else if (funcType === 'delete') {
        // Delete "mynewfile2.txt":
        fs.unlink(path, function (err) {
            if (err) throw err;
            console.log('File deleted!');
        });
    }

    //To rename a file with the File System module,  use the fs.rename() method. The fs.rename() method renames the specified file:
    else if (funcType === 'rename') {
        // Rename "mynewfile1.txt" to "myrenamedfile.txt":
        fs.rename(path, 'myrenamedfile.txt', function (err) {
            if (err) throw err;
            console.log('File Renamed!');
        });
    }
    return 'ok'
}

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    // var d = []
    // res.on('data', function (chunk) {
    //     d.append(chunk);
    //     // process utf8 text chunk
    // });

    // fsExec('read', 'softs.json', '', x => {res.write(x);
    //     fsExec('read', 'softs.json', '', x => {res.write(x);
    //     fsExec('read', 'softs.json', '', x => {res.write(x);
    //     fsExec('read', 'softs.json', '', x => {res.write(x);
    //     fsExec('read', 'softs.json', '', x => {res.write(x);
    //     fsExec('read', 'softs.json', '', x => {res.write(x);
    //     fsExec('read', 'softs.json', '', x => {res.write(x);
    //     fsExec('read', 'softs.json', '', x => {res.write(x);
    //         x?res.end():false
    //     }); }); }); });
    //     }); }); }); });

    // fsExec('read', 'softs.json', '', x => console.log(x));
    // fsExec('read', 'softs.json', '', x => {res.write(x); x?res.end():false});

    // fsExec('read', 'softs.json', '', x => { console.log(x); res.write(x); x ? res.end() : false });
    
    fsExec('read', 'softs.json', '', x => x ? !function () { console.log(x); res.write(x); res.end(); }() : false);

}).listen(8080);