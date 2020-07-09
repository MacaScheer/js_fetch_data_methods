
$(document).ready(function () {
    $.ajax({
        type: "GET",
        url: "data.txt",
        dataType: "text",
        success: function (data) { processData(data);}
    })
})

function processData(allText) {
    let allTextLines = allText.split(/\r\n|\n/);
    let headers = allTextLines[0].split(',');
    let lines = [];
    for (let i = 1; i < allTextLines.length; i++){
        let data = allTextLines[i].split(',');
        if (data.length === headers.length) {
            let tarr = [];
            for (let j = 0; j < headers.length; j++){
                tarr.push(headers[j]+":"+data[j])
            }
            lines.push(tarr)
        }
    }
    // console.log(lines)
    return lines
}

