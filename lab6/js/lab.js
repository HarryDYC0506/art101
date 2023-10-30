// Author: Harry Chou (dechou@ucsc.edu)
// Date: Oct/26/2023
// License: Public Domain

// Variable declaration
myTransport = ["car", "bus", "my friend's car", "walk"];

// Object declaration
myMainRide = {
  make: "Toyota",
  model: "RAV4",
  color: "black",
  year: 2020,
  age: function() {
    return 2023 - this.year;
  }
}

// Prints out information
document.writeln("Kinds of transportation I use: ", myTransport, ".<br>");
document.writeln("My Main Ride: <pre>", 
  JSON.stringify(myMainRide, null, '\t'), "</pre>");

// let's get this party started
main();
