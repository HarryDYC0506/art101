// Author: Harry Chou (dechou@ucsc.edu)
// Date: Oct/26/2023
// License: Public Domain

// User name prompt
var userName = window.prompt("Please enter your name for sorting: ");
console.log("userName = ", userName);

function nameSorting(){
  // User name prompt
  // var userName = window.prompt("Please enter your name for sorting: ");
  // console.log("userName = ", userName);

  //String -> Array
  var nameArray = userName.split('');
  console.log("nameArray = ", nameArray);

  //Sort
  var nameArraySorted = nameArray.sort();
  console.log("nameArraySorted = ", nameArraySorted);

  //Array -> String
  var nameSorted = nameArraySorted.join();
  console.log("nameSorted = ", nameSorted);

  //return value
  return nameSorted;
}

function nameSortingCap(){
  var nameArray = userName.split('');
  console.log("nameArray = ", nameArray);

  var nameArrayUp = [];
  var nameArrayLo = [];
  for (i = 0; i < nameArray.length; i++){
    if (nameArray[i] == nameArray[i].toUpperCase()){
      nameArrayUp.push(nameArray[i]);
    }
    else {
      nameArrayLo.push(nameArray[i]);
    }
  }

  var nameSortUp = nameArrayUp.sort();
  var nameSortLo = nameArrayLo.sort();

  var nameSorted = nameSortUp.join() + nameSortLo.join();

  return nameSorted;
}

function nameSortingOmitSpace(){
  console.log("Name = " ,userName);
  var nameArray = userName.split('');
  console.log("nameArray = ", nameArray);

  for (i = 0; i < nameArray.length; i++){
    if (nameArray[i] == " "){
      nameArray.splice(i, 1);
    }
  }
  console.log("nameArray with no space = ", nameArray);

  //Sort
  var nameArraySorted = nameArray.sort();
  console.log("nameArraySorted = ", nameArraySorted);

  //Array -> String
  var nameSorted = nameArraySorted.join();
  console.log("nameSorted = ", nameSorted);

  //return value
  return nameSorted;
}

// Prints out information
document.writeln("Your entered name is: ", userName, ".<br>");
document.writeln("Your sorted name is: ", nameSorting(), ".<br>");
document.writeln("Your sorted name (cap's included) is: ", nameSortingCap(), ".<br>");
document.writeln("Your sorted name (with white space omitted) is: ", nameSortingOmitSpace(), ".<br>");

// let's get this party started
main();
