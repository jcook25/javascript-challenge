// from data.js
const tableData = data;

// YOUR CODE HERE!
const tbody = d3.select("tbody");

function GenerateTable(input) {

    tbody.html("")

    input.forEach((item) => {
        var row = tbody.append("tr");
        Object.entries(item).forEach(([key, value]) => {
            var cell = row.append("td").text(value)
        });

    });
};

function handleClick() {
    var inputvalue = d3.select("#datetime").property("value");
    let filteredData = tableData;

    console.log(inputvalue);

    if (inputvalue) {
        filteredData = filteredData.filter(row => inputvalue === row.datetime)
    }

    GenerateTable(filteredData);
};

d3.selectAll("#filter-btn").on("click", handleClick);

GenerateTable(tableData);


 