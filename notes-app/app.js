//const add=require('./utilis.js');
///const sum=add(5,6)
//const name='khushi';
//console.log(sum);
//const validator=require('validator')

const yargs = require('yargs')
const chalk = require('chalk');
const { demandOption } = require('yargs');
const error = chalk.bold.blue;
const warning = chalk.keyword('orange');
yargs.version('1.1.0');
const notes = require('./notes.js');
//const print= require('./notes.js');
//const simple=print();
//console.log(simple);
//console.log(validator.isEmail('SpeechGrammarList.com'));
//console.log(chalk.red('i am boss baby'));
//console.log(error('Error!'));
//console.log(warning('orange'));
//console.log(chalk.keyword('orange')('Yay for orange colored text!'));
//console.log(process.argv);

//const command= process.argv[2];
yargs.command({
    command: 'add',
    describe: 'Add a note',
    builder: {
        title: {
            describe: 'notes title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Body doing',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        notes.addNotes(argv.title, argv.body)
    }
})
yargs.command({
    command: 'remove',
    describe: 'removinga note',

    builder: {
        title: {
            describe: 'removing a note',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        notes.removeNote(argv.title)
    }

});
yargs.command({
    command:'list',
    describe:'List your notes',
    handler(){
        notes.listNotes()
    }
})
yargs.command({
    command: 'read',
    describe: 'read a note',
    builder: {
        title: {
            describe: 'notes title',
            demandOption: true,
            type: 'string'
        },
        
    },
    handler:function (argv) {
        notes.readNotes(argv.title)
    }
})
yargs.parse();
//console.log(yargs.argv)
