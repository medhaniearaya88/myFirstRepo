$(()=>{

    $('#btn').on('click',(event)=>{
        event.preventDefault();
      var reqword=document.getElementById('term').value;
       $.post("http://localhost:5000/getAll",{word:reqword})
       .done((data)=>{
           showresult(data);
           console.log(data[0]['word']);
       })
       .fail((err)=>{
           console.log(err);
       });
  
    });
});
showresult=(val)=>{
    $('#displayresult').empty();
    for (let i=0;i<val.length;i++){
        $('#displayresult').append(`<li> (${val[i].wordtype})::${val[i].definition}</li>`)
    }    
}