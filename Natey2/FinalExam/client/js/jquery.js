$(() => {
    $('#btn').on('click', function(event) {
        event.preventDefault();

        let inname = document.getElementById('user').value;
        let innumber = document.getElementById('account').value;
        let inbalance = document.getElementById('amount').value;
        let selectOperation = document.getElementById("operationList");
        var inoperation = selectOperation.options[selectOperation.selectedIndex].text;

        $.post("http://localhost:5000", { userName: inname, accountNumber: innumber, amount: inbalance, operation: inoperation })
            .done((data) => {
                //showResult(data);     ---select
                //   console.log(data);
                //   alert("New Customer is created with id:"+ innumber);   ---create
                // alert("Customer with id number deleted");

            }).fail((err) => {
                console.log('error occured' + err);
            })
            .always(() => {
                $('#loader').hide();
            });
        $('#loader').show();
        $('#result').empty();
    });
    $('#loader').hide();
});

function showResult(data, operation) {

    switch (operation) {
        case "deposit":

            break;
        case "withdraw":

            break;
        case "balance":
            $('#reuslt').empty();
            for (let i = 0; i < data.length; i++) {
                $('#result').append(`<p>${data[i].name} ${data[i].number} ${data[i].balance} </p>`);
            }

            break;
        default:
            //for new

            break;
    }
}