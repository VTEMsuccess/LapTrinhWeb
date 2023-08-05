function setLang(langCode){
	window.localStorage.setItem('lang', langCode);
  	window.location.reload();
}

function getLang(){
	var langSetting = window.localStorage.getItem('lang');
  	if(typeof(langSetting) === 'undefined'){
    	setLang('vi-VN');
    	return 'vi-VN';
 	} 
  	else {
    	return langSetting;
    }	
}

function changeLang(){	
	var lang = getLang();

	var obj = document.querySelectorAll('span.multilang');
	for (var i = 0; i < obj.length; i++){
	    $("#" + obj[i].id).html(labels[obj[i].id][lang]).attr("title",labels[obj[i].id][lang]);
	}
}