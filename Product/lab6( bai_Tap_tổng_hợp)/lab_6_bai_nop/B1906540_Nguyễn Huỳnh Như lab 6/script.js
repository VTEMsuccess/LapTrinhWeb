$(document).ready(function(){
    $('body').addClass('loaded');

    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl)
    });
    changeLang();
    showCourseList();
});

function setLang(LangCode){
	window.localStorage.setItem('lang', LangCode);
  window.location.reload();
}
  
function getLang(){
	var language = window.localStorage.getItem('lang');
  if(typeof(language) !== 'undefined'){
    return language;
  } 
  else {
    setLang('vi-VN');
    return 'vi-VN';
  }
  
}

function changeLang(){
  var lang = getLang();
  var obj = document.querySelectorAll('span.multilang');
  for (var i=0; i<obj.length; i++){
    $("#"+obj[i].id).html(labels[obj[i].id][lang]).attr("title",labels[obj[i].id][lang]);
}
}
function showCourseList(){ 
  var lang=getLang();
  $.each(courseList,function(i, obj) {
          btn="<td><div class='d-grid gap-2'><button class='btn btn-success btn-lg' onclick='regCourse(\""+i+"\")'><i class='far fa-check-square'></i></button></div></td>";
          $("#course_list").append("<tr><td>"+obj.code
          +"</td><td>"+obj.name[lang]
          +"</td></td><td class='text-end'>"
          +(new Date(obj.startDate)).toLocaleDateString(lang)
          +"</td><td class='text-end'>"+(new Date(obj.endDate)).toLocaleDateString(lang)
          +"</td><td class='text-end'>"+(new Intl.NumberFormat(lang, 
            { style: 'decimal'}).format(obj.fee[lang]))+"</td>"+btn+"</tr>");
});
}
  



