


$(function() {
    //loader will show whenever any ajax call is made on this page
   // $("#loader").hide();
    // $(document).ajaxStart(function() { $("#loader").show(); })
    // .ajaxStop(function() { $("#loader").hide(); });
    // $("#mybutton").click(function() {
    // $.get("http://foo.com")
    // .done(function)
    // .fail(function);
    // });

    $("#submit").click(function() { 
        $.get("http://localhost:8097")
        .done(addhtml)
        .fail(erro); });
    }); 
function addhtml(data){


}

function erro(){
    console.log("error");
}