#! /usr/bin/env node
import morgan from 'morgan'
import fetch from 'node-fetch'
import _ from 'lodash';
"use strict"; //gfdsghsdg
let processes = process.argv
_.map(processes,async val => { 
    if(val == 'sq'){
        const baseURLsq = "https://sq.wikipedia.org/";
        console.log(processes.slice(2))
        if (processes.slice(2).length >= 1) {
            processes.pop('sq')
            var searchQuery = processes.slice(2).join(" ")
            const res = await fetch(`${baseURLsq}w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=${searchQuery}`)
            let data = await res.json()
            const pageID = Object.keys(data.query.pages)[0]
            let title = data.query.pages[pageID].title
            let desc = data.query.pages[pageID].extract
            console.log(`Article title: ${title}`)
            console.log(`Article Description:${desc}`)
        
        
        }
    }
}) //comment 
_.map(processes,async val => { 
    if(val == 'en'){
        const baseURLsq = "https://en.wikipedia.org/";
        console.log(processes.slice(2))
        if (processes.slice(2).length >= 1) {
            processes.pop('en')
            var searchQuery = processes.slice(2).join(" ")
            const res = await fetch(`${baseURLsq}w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=${searchQuery}`)
            let data = await res.json()
            const pageID = Object.keys(data.query.pages)[0]
            let title = data.query.pages[pageID].title
            let desc = data.query.pages[pageID].extract
            console.log(`Article title: ${title}`)
            console.log(`Article Description:${desc}`)
        
        
        }
    }
})
if(processes[2] === 'help'){
    console.log("USAGE:")
    console.log("SearchWiki 'SearchQuery' sq or en ")
    console.log("last parameter is always the language English or Albanian")
}

