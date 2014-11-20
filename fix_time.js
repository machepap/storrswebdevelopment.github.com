#!/usr/bin/env node

// Reads JSON from stdin and writes equivalent
// updates the ms epoch date/time stamp from meetup to HRF

var stdin = process.stdin,
    stdout = process.stdout,
    chunks = '';

stdin.resume();
stdin.setEncoding( 'utf8' );

stdin.on( 'data', function ( chunk ) {
    chunks += chunk;
} );

stdin.on( 'end', function () {
    var parsedData = JSON.parse( chunks );
    var d;

    if ( parsedData.next_event && parsedData.next_event.time ) {
        d = new Date( parsedData.next_event.time );
        parsedData.next_event.time = d.toLocaleDateString() + ' ' + d.toLocaleTimeString();
    }
    stdout.write( JSON.stringify( parsedData ) );
} );