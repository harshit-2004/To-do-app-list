var but1 = document.getElementById('but1');
but1.addEventListener('click',function(){
    var clickedbuttonlist  = [];
    var checkbox1 = document.getElementsByClassName('madefor');
    for(var check of checkbox1){
        if(check.checked)
        {
            clickedbuttonlist.push(check.id);
            console.log(check.id);
        }
    }
    $.ajax({
        url:'/delete-item',
        method:'post',
        data:{list:clickedbuttonlist},
        success:function(data){
            for(var da of data.message){
                $(`#item-${da}`).remove();
            }
        }
    })
})