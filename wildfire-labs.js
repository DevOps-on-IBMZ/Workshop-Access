var lines = [];

$(document).ready(function () {
    $.ajax({
        url: "labs.csv",
        dataType: "text",
        success: function (data) {
            var allTextLines = data.split(/\r\n|\n/);
            var titles = allTextLines[0].split(',');
            var headers = allTextLines[1].split(',');
            for (var i = 1; i < allTextLines.length; i++) {
                var data = allTextLines[i].split(',');
                if (data.length == headers.length) {
                    var tarr = [];
                    for (var j = 0; j < headers.length; j++) {
                        tarr.push(data[j]);
                    }
                    lines.push(tarr);
                }
            }
            //            console.log(lines);
        }
    });
});

function validate() {
    document.getElementById('btn-submit').disabled=(document.getElementById('registration-email').value=='');
}
function getLab(email) {
    var hash = String(CryptoJS.MD5(email.trim().toLowerCase()));
    var index = -1;
    for (var i = 1; i < lines.length; i++)
        if (lines[i][0] == hash)
            index = i;
    var table_data = '<div class="alert alert-warning" role="alert">Email not found.</div>'
    if (index != -1) {
        table_data =  '<p>Below is the information you will need to access the exercises:</p>';
        table_data += '<h5>Using a web browser </h5>';
        table_data += '<p>Enter this URL address in the browser’s URL area: <br><mark>'+lines[index][1]+'</mark></p>';
        table_data += '<p>Authentication with username: <mark>'+lines[index][2]+'</mark></p>';
        table_data += '<p>Using password: <mark>'+lines[index][5]+'</mark></p>';


        table_data += '<h5>Exiting the lab</h5>';
        table_data += '<p><strong>IMPORTANT: <br>Please DO NOT shutdown remote Windows system, just close the session. Otherwise you won&apos;t be able to reconnect.</strong></p>';
    }
    $('#lab').html(table_data);
}
