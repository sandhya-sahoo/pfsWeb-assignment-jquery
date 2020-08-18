function renderListItems(data) {
    let liStr = '';
    if(data && data.length) {
        data.map(item => {
            liStr += '<li>'+item.name+'</li>'
        });
        $('#listItems').append(liStr);
    }
    return;
}

function fetchDataAndRender(){
    $.ajax({
        url: 'https://jsonplaceholder.typicode.com/users',
        type: 'get',
        success: function(data){
            renderListItems(data);
        },
        error: function (xhr) {
            var errorMsg = 'Ajax request failed: ' + xhr.responseText;
            alert(errorMsg);
          }
    });
}

$( document ).ready(function() {
    fetchDataAndRender();
});