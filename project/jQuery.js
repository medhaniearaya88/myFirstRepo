$("#submit").click(findword);

function handleResponse(responseObj) {
    console.log("response is "+responseObj.status+" and "+responseObj.text);
     
       $("#main").html(responseObj).css("color","red");
    
}

function findword () {
    var where = $("#form").attr("action");
    
    var fe = $("#wordSearch").val();
    var what = { wordSearch: fe };
    $.get( where, what, handleResponse, "json");
}  