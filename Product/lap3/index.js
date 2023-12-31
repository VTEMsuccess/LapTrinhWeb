function sentData(){
    var x = document.forms['search']['works'].value;
    if(x==''){
        alert('Vui lòng nhập nội dung cần tìm!');
        return false;
    } 
    
}

function Invalid(frm){ 
    var emailReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if(frm.email){
        if(emailReg.test(frm.email.value) == false){
            alert('Vui lòng nhập đúng định dạng EMAIL');
            return false;
        }
        
    }

    if(frm.psw){
        if(frm.psw.value.length<8){
            alert('Vui lòng nhập MẬT KHẨU ít nhất 8 ký tự');
            return false;
        }
    }

    if(frm.psw1){
        if(frm.psw1.value.length<8 || frm.psw.value != frm.psw1.value){
            alert('Vui lòng nhập lại mật khẩu chính xác');
            return false;
        }
    }

    if(frm.yourName){
        if(frm.yourName.value.length<4){
            alert('Vui lòng nhập đủ HỌ VÀ TÊN');
            return false;
        }
    }

    if(frm.note){
        if(frm.note.value.length<10){
            alert('Vui lòng nhập NỘI DUNG CẦN LIÊN HẸ ít nhất 10 ký tự');
            return false;
        }
    }

    alert('Dữ liệu đã được gửi thành công!');
    return true;
}

function goToCart(){
    window.location.href = "donhang.html";
    return false;
}


var itemList={
    "sp001":{ "name":"Sữa Chua Vị Kiwi",
        "price":21000,
        "photo":"images/sanpham/kiwi.jpg"},
    "sp002":{ "name":"Sữa Chua Vị Xoài",
        "price":22000,
        "photo":"images/sanpham/mango.jpg"},
    "sp003":{ "name":"Sữa Chua Vị Dưa lưới",
        "price":23000,
        "photo":"images/sanpham/cantaloupe.jpg"},
    "sp004":{ "name":"Sữa Chua Vị Mâm Xôi",
        "price":24000,
        "photo":"images/sanpham/blackberry.jpg"},
    "sp005":{ "name":"Sữa Chua Vị Dâu Tây",
        "price":25000,
        "photo":"images/sanpham/strawberry.jpg"},
    "sp006":{ "name":"Sữa Chua Vị Việt Quất",
        "price":26000,
        "photo":"images/sanpham/blueberry.jpg"},
    "sp007":{ "name":"Sữa Chua Vị Bưởi",
        "price":27000,
        "photo":"images/sanpham/grapes.jpg"},
    "sp008":{ "name":"Sữa Chua Vị Táo Xanh",
        "price":28000,
        "photo":"images/sanpham/green-apple.jpg"},
    "sp009":{ "name":"Sữa Chua Vị Dứa",
        "price":29000,
        "photo":"images/sanpham/pineapple.jpg"}
    };


    function addCart(code){
        var number = parseInt(document.getElementById(code).value);
        var current = parseInt(window.localStorage.getItem(code));
        var item = itemList[code];
        if(typeof localStorage[code] === "undefined"){
            if(number<=100){
                window.localStorage.setItem(code,number);
                alert("Đã thêm sản phẩm " + item.name + " với số lượng là " + number + " vào giỏ hàng. " + "Tổng sản phẩm " + item.name + " đã đặt là " + number + ".");

             }
            else{
                window.localStorage.setItem(code,100);
                alert("Mỗi mặt hàng chỉ có thể đặt được 100 sản phẩm cho mỗi đơn hàng. Bạn đã đặt 100 sản phẩm " + item.name + " này.");
            }
        }
        
        else{
            if((number+current)>100){  
                window.localStorage.setItem(code,100);
                alert("Mỗi mặt hàng chỉ có thể đặt được 100 sản phẩm cho mỗi đơn hàng. Bạn đã đặt 100 sản phẩm " + item.name + " này.");
            }
            else{
                window.localStorage.setItem(code,current+number) 
                alert("Đã thêm sản phẩm " + item.name + " với số lượng là " + number + " vào giỏ hàng. " + "Tổng sản phẩm " + item.name + " đã đặt là " + (number+current) + ".");
            }
            
        } 
    }

// -------BAI4-------

function showCart(){
	var TotalPreTax = 0;
	var priceTdExchange;
	var tbodyCart = document.getElementById('tbodyCart');
	for (var i = 0; i < localStorage.length; i++){
		var key = localStorage.key(i); 
		var item = itemList[key]; //Thông tin sản phẩm
		var photo = item.photo; //Hình sản phẩm
		var name = item.name; //Tên
		var price = item.price; //Giá 
		var orderNumber= localStorage.getItem(key); 
		var total = price*orderNumber;

		TotalPreTax += total;
		
		var remove = document.createElement("a");
		remove.innerHTML = '<i class="fa fa-trash icon-pink"></i>';
		remove.style.cursor = 'pointer';
		remove.style.width = '35px';
		remove.style.height = '27px'; 
		remove.style.background = "#cddc39"; 	
		remove.style.width = '30px';
		remove.style.padding = '4px 10px';
		remove.style.color = "#ed4190";
		
		remove.dataset.code = key;

		remove.onclick = function (){
			removeCart(this.dataset.code);
		}

		priceTdExchange = (new Intl.NumberFormat('de-DE', {style : 'currency', currency : 'VND'}).format(price));
		totalExchange = (new Intl.NumberFormat('de-DE', {style : 'currency', currency : 'VND'}).format(total));

		var tr = document.createElement("tr");

		var photoTd = document.createElement("td");
		var nameTd = document.createElement("td");
		var priceTd = document.createElement("td");
		var orderNumberTd = document.createElement("td");
		var totalTd = document.createElement("td");
		var removeTd = document.createElement("td");

		photoTd.innerHTML="<img src='"+ photo +"'width='100px'/>";
		photoTd.align='center';
		tr.appendChild(photoTd);

		nameTd.textContent = name;
		tr.appendChild(nameTd);

		orderNumberTd.textContent = orderNumber;
		tr.appendChild(orderNumberTd);

		priceTd.textContent = priceTdExchange;
		tr.appendChild(priceTd);

		totalTd.textContent = totalExchange;
		tr.appendChild(totalTd);

		removeTd.appendChild(remove);
		tr.appendChild(removeTd);

		tbodyCart.appendChild(tr);
		
	}
	
	var tfDiscount = 0;
	var tfTax = 0;
	var tfTotal = 0;

	var dhTotalCost = document.getElementById('dh-totalCost');
	var dhDiscount = document.getElementById('dh-discount');
	var dhTax = document.getElementById('dh-tax');
	var dhTotalCart = document.getElementById('dh-totalCart');


		if(getDiscountRate()){
			tfDiscount = 0.1*TotalPreTax;
		}
		tfTax = 0.1*(TotalPreTax - tfDiscount);
		tfTotal = TotalPreTax - tfDiscount + tfTax;

		TotalPreTaxExchange = (new Intl.NumberFormat('de-DE', {style : 'currency', currency : 'VND'}).format(TotalPreTax));
		tfDiscountExchange = (new Intl.NumberFormat('de-DE', {style : 'currency', currency : 'VND'}).format(tfDiscount));
tfTaxExchange = (new Intl.NumberFormat('de-DE', {style : 'currency', currency : 'VND'}).format(tfTax));
		tfTotalExchange = (new Intl.NumberFormat('de-DE', {style : 'currency', currency : 'VND'}).format(tfTotal));
	

	
	function getDiscountRate(){
 		var d = new Date();//lấy ngày hiện tại của máy tính
 		var weekday = d.getDay();//lấy ngày trong tuần 
 		var totalMins = d.getHours()*60 + d.getMinutes();//đổi thời gian hiện tại ra số phút tương đối trong ngày 
		if(weekday>=1 && weekday<=3 && ((totalMins>=420 && totalMins<=660)||(totalMins>=780 && totalMins<=1020)))
 			return 1;
 		return 0;
	}

	var dhTotalCostSpan = document.createElement("span");
	var dhDiscountSpan = document.createElement("span");
	var dhTaxSpan = document.createElement("span");
	var dhTotalCartSpan = document.createElement("span"); 

	dhTotalCostSpan.textContent = TotalPreTaxExchange;
	dhTotalCost.appendChild(dhTotalCostSpan);
	dhDiscountSpan.textContent = tfDiscountExchange;
	dhDiscount.appendChild(dhDiscountSpan);
	dhTaxSpan.textContent = tfTaxExchange;
	dhTax.appendChild(dhTaxSpan);
	dhTotalCartSpan.textContent = tfTotalExchange;
	dhTotalCart.appendChild(dhTotalCartSpan);

	
	window.onstorage = () => {
		document.getElementById("dh-totalCost").innerHTML="";
		document.getElementById("dh-discount").innerHTML="";
		document.getElementById("dh-tax").innerHTML="";
		document.getElementById("dh-totalCart").innerHTML="";
		document.getElementById("tableCart").getElementsByTagName('tbody')[0].innerHTML="";
		showCart();
	}

	function removeCart(code){
		if(typeof window.localStorage[code] !== "undefined"){
			window.localStorage.removeItem(code);
			document.getElementById("dh-totalCost").innerHTML="";
			document.getElementById("dh-discount").innerHTML="";
			document.getElementById("dh-tax").innerHTML="";
			document.getElementById("dh-totalCart").innerHTML="";
			document.getElementById("tableCart").getElementsByTagName('tbody')[0].innerHTML="";
			showCart();
		}
	}
}