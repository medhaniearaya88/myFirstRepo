$(()=>{
 $('#btn').on('click',function (event) {
    event.preventDefault();

     let inname=document.getElementById('name').value;
     let innumber=document.getElementById('number').value;
     let inbalance=document.getElementById('balance').value;

     $.post("http://localhost:5001/update",{name:inname,number:innumber,balance:inbalance})
     .done((data)=>{
        //showResult(data);     ---select
      //   console.log(data);
      //   alert("New Customer is created with id:"+ innumber);   ---create
      // alert("Customer with id number deleted");
      alert("balance updated");
     }).fail((err)=>{
         console.log('error occured'+err);
     })
     .always(()=>{
        $('#loader').hide();
     });
     $('#loader').show();
     $('#result').empty();
 });
 $('#loader').hide();
});

function showResult(data){
    $('#reuslt').empty();
 for (let i=0;i<data.length;i++){
    $('#result').append(`<p>${data[i].name} ${data[i].number} ${data[i].balance} </p>`);
 }


    
}