//Level 1:

//Making buttons----------------------------------------------
// target the place "table" where data will be appended into
var tbody = d3.select("#target-table-display");

// select the " button" & "input field"
var dateButton = d3.select("#filter-btn-date");
var dateInput = d3.select("#datetime");

// select city buttons
var cityButton = d3.select("#filter-btn-city");
var cityinput = d3.select("#cityname");

// select state buttons
var stateButton = d3.select("#filter-btn-state");
var stateinput = d3.select("#statename");

// select country buttons
var countryButton = d3.select("#filter-btn-country");
var countryinput = d3.select("#countryname");

// select shape buttons
var shapeButton = d3.select("#filter-btn-shape");
var shapeinput = d3.select("#shapename");
//------------------------------------------------------------

// make a table in the html file and insert each object
data.forEach((date) => {
    var dateRow = tbody.append("tr");

    Object.entries(date).forEach(([key,value]) => {
        console.log(`key:${key} and value ${value}`);
        
        var dateData = dateRow.append("td");
        dateData.text(value);
    });
});

// implementing fuction to " button"
dateButton.on("click", function() {
   
    // shows current search; stops page from refreshing
    tbody.html("");
    d3.event.preventDefault();
    
    var dateInput = d3.select("#datetime");
    var inputElement = dateInput.property("value");
    console.log(inputElement);

    var inputArray = data.filter(one => one.datetime === inputElement);

    // object iteration using Big arrow, loop through table and than show filter data
    inputArray.forEach((selection) => {
        var row = tbody.append("tr");

        Object.entries(selection).forEach(([key,value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });      
});

// Level 2: ----------------------------------------------------
// queries for other filter searches

//city----------------
cityButton.on("click", function() {

    // shows current search and stops page from refreshing
    tbody.html("");
    d3.event.preventDefault();

    var cityinputElement = cityinput.property("value");
    var cityArray = data.filter(two => two.city === cityinputElement);  
    
    // object iteration using Big arrow, loop through table and than show filter data
    cityArray.forEach((selects) => {
        var Cityrow = tbody.append("tr");

        Object.entries(selects).forEach(([key,value]) => {
            var Citycell = Cityrow.append("td");
            Citycell.text(value);
        });
    });      
});

//state-----------
stateButton.on("click", function() {

    // shows current search and stops page from refreshing
    tbody.html("");
    d3.event.preventDefault();

    var stateinputElement = stateinput.property("value");
    // use the "field input" to filter the data by "state" only
    var stateArray = data.filter(three => three.state === stateinputElement);
    console.log(stateArray)

    
    // object iteration using Big arrow, loop through table and than show filter data
    stateArray.forEach((selectsState) => {
        var Staterow = tbody.append("tr");

        Object.entries(selectsState).forEach(([key,value]) => {
            var Statecell = Staterow.append("td");
            Statecell.text(value);
        });
    });      
});


countryButton.on("click", function() {

    // shows current search and stops page from refreshing
    tbody.html("");
    d3.event.preventDefault();

    var countryinputElement = countryinput.property("value");
    var countryArray = data.filter(four => four.country === countryinputElement);
  
    // object iteration using Big arrow, loop through table and than show filter data
    countryArray.forEach((selectscountry) => {
        var Countryrow = tbody.append("tr");

        Object.entries(selectscountry).forEach(([key,value]) => {
            var Countrycell = Countryrow.append("td");
            Countrycell.text(value);
        });
    });      
});



shapeButton.on("click", function() {

// shows current search and stops page from refreshing    
    tbody.html("");
    d3.event.preventDefault();

    var shapeinputElement = shapeinput.property("value");
    var shapeArray = data.filter(five => five.shape === shapeinputElement);
  
    // object iteration using Big arrow, loop through table and than show filter data
    shapeArray.forEach((selectshape) => {
        var Shrow = tbody.append("tr");
        Object.entries(selectshape).forEach(([key,value]) => {
            var Shapecell = Shaperow.append("td");
            Shapecell.text(value);
        });
    });      
});