var App = angular.module("YenNoteApp", ['ngRoute']);

App.controller("NoteController", function ($scope) {
console.log(1);
    
const fs = require('fs');
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
var dir = 'db';
if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
}
var dir = 'db/Document1';
if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
}
console.log(12);

const adapter = new FileSync('./db/Document1/db.json')
const db = low(adapter)

console.log(123);

// Set some defaults (required if your JSON file is empty)
db.defaults({
    "sheets": [
        {
            "name": "sheet1",
            "notes": [
                "Note1"
            ]
        }]})
  .write()

// Add a post
db.get('posts')
  .push({ id: 1, title: 'lowdb is awesome'})
  .write()

// Set a user using Lodash shorthand syntax
db.set('user.name', 'typicode')
  .write()
  
// Increment count
db.update('count', n => n + 1)
  .write()

    $scope.Note = {
        current : {
            "sheet": "",
            "note": ""
        },
        loadContent: function (Sheet, Note) {

        },
        notes : [],
        sheets:[],
        dataList : [],
        doc : {
            "sheets": [
                {
                    "name": "first sheet",
                    "notes": [
                        "Noteggggggggggggg1",
                        "Note2",
                        "Note3",
                        "Note4"
                    ]
                },
                {
                    "name": "second sheet",
                    "notes": [
                        "Note1",
                        "Notggge2",
                        "Noggggggggte3",
                        "Note4"
                    ]
                }
            ]
        },
        onSheet: function (sheetName) {
            $scope.Note.notes = $scope.Note.doc.sheets.find(c => c.name === sheetName).notes;
            console.log("h",$scope.Note.notes);

        },
        onNote: function (n) {
            console.log(n);
        }
    }
});
