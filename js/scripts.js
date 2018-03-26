$(document).ready(function(){
  $("form").submit(function(event){
    var array = [];
    var food = array.push($("#food").val());
    var animal = array.push($("#animal").val());
    var drink = array.push($("#drink").val());
    console.log(array);

    var array2 = [array[1], array[0], array[2]];

    $("#index0").append(array2[0]);
    $("#index1").append(array2[1]);
    $("#index2").append(array2[2]);




  event.preventDefault();
  });
});
