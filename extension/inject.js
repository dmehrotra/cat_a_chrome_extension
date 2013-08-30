$(document).ready(function() {

$("body *").addClass("catify");

var elems = document.getElementsByTagName('img');
for(var i = 0; i < elems.length; i++) { 
 var width = elems[i].offsetWidth;
 var height= elems[i].offsetHeight;
 if (width == null || height == null){
  width = 300;
  height=400;
 }
 elems[i].setAttribute("src", "http://placekitten.com/"+width+"/"+height);

 }

});


$(document).ajaxComplete(function() {
$("body *").addClass("catify");

var elems = document.getElementsByTagName('img');
for(var i = 0; i < elems.length; i++) { 
 var width = elems[i].offsetWidth;
 var height= elems[i].offsetHeight;

 elems[i].setAttribute("src", "http://placekitten.com/"+width+"/"+height);

 }

});
