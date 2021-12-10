const fs = require('fs');
const chalk = require('chalk');
const { title } = require('process');
const getNotes = function () {
    return 'your...'
}
const addNotes = function (title, body) {
    const notes = loadNotes();
    const duplicates = notes.find(function (note) {
        return note.title === title;
    })
    debugger;
    if (duplicates.length == undefined) {
        notes.push({
            title: title,
            body: body
        })
        savedNotes(notes);
        console.log('new note');
    } else {
        console.log('new note taken');
    }


}
function savedNotes(notes) {
    const dataJson = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJson);
}
function loadNotes() {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJson = dataBuffer.toString();
        return JSON.parse(dataJson);
    } catch (e) {
        return [];
    }

}
const removeNote = function removeNote(title) {
    const notes = loadNotes();
    const dataremove = notes.filter(function (note) {
        return note.title !== title;
    })
    if (notes.length > dataremove.length) {
        console.log(chalk.green.inverse('Notes is removed'));
        savedNotes(dataremove);
    } else {
        console.log(chalk.red.inverse('No note found'));
    }
}
const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.inverse('your notes'))
    notes.forEach(function (note) {
        console.log(note.title);
    })

}
const readNotes= function readNotes (title){
    const notes= loadNotes();
    const note= notes.find(function(note){
        return note.title== title;
    })
    if(note){
        console.log(chalk.inverse(note.title))
        console.log(note.body)
    }else{
        console.log(chalk.red.inverse('notes not found'))
    }

}


module.exports = {
    getNotes: getNotes,
    addNotes: addNotes,
    removeNote: removeNote,
    listNotes: listNotes,
    readNotes: readNotes

}