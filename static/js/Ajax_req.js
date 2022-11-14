// http://127.0.0.1:8000/request_info
function Ajax_req(){
    console.log('111222333')
    // var csrftoken = getCookie('csrftoken');
    var select_value = $("#select_novel_list option:selected").val();
    var key_word = $("#keyword").val()

      $.ajax({
        url:"http://127.0.0.1:8000/request_info",
        type:"POST",
        data:{
            'csrfmiddlewaretoken':$('[name="csrfmiddlewaretoken"]').val(),
            'drop_down': select_value,
            'key_word': key_word
        },
        success: function (data){
            console.log(data);
            document.getElementById('title_datavis').innerHTML = 'Relative frequency of ' + key_word + ' by group'
            datavisulization(data);
        },
    });
}