// function requestAPI(id, callback) {
//     let request = new XMLHttpRequest();
//     request.onreadystatechange = function() {
//         if (this.readyState == 'complete') {
//             callback();
//         }
//     }
//
//     request.onload = callback;
//     request.open("GET", "https://georgeeliotarchive.org/api/files?item=" + id);
//     request.send(null);
// }

async function file_info() {

    // 1. Get the value from select tag
    // this.data_value = $("#select_novel_list option:selected").val();
    // this.data_title = $("#select_novel_list option:selected").text();
    var myselect = $("#select_novel_list option:selected");
    var data_value_temp = parseInt(myselect.val());
    // alert(data_value_temp);
    var data_text = myselect.text();
    var api = "https://georgeeliotarchive.org/api/files?item="
    var url = api + data_value_temp;
    let response = await fetch (url);
    let json = await response.text();
    var data_value = JSON.parse(json)[0].file_urls.original;

    // document.getElementById("p_novel_file_name").innerHTML = "Selected file name: " + data_value + ", type of file is:" + typeof data_value;
    // 2. Read the value(URL) and get the txt content
    if (data_value == "0") {
        document.getElementById('novel_content').innerHTML = "Choose a novel from the drop-down list"
    } else {
        var txtFile = new XMLHttpRequest();
        // alert(data_value);
        txtFile.open("GET", data_value, false);
        txtFile.onreadystatechange = function () {
            if (txtFile.readyState === 4) {  // Makes sure the document is ready to parse.
                if (txtFile.status === 200) {  // Makes sure it's found the file.
                    allText = txtFile.responseText;
                }
                else alert('Error: Can not found file')
            }
        }
        txtFile.send(null);
        document.getElementById("novel_content").innerHTML = allText;
    }
    // var extract_result = keyword_extract(allText);
    // alert(extract_result);
    this.arr_allText= allText.split("\n");
    document.getElementById("total_text_lines").innerHTML = "Total text lines : " + "  " + this.arr_allText.length;
    document.getElementById("total_word_count").innerHTML = "Total word count : " + "  " + allText.length;
    $( '#query_results' ).empty();
    $( '#query_results_title' ).empty();
}