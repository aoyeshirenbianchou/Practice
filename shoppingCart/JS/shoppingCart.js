    var data=[
			product1={
				imgsrc:"IMG/imga.jpg",
				describe:"【就业班】PHP小白零基础入门",
				unitprice:"658"
			},
			product2={
				imgsrc:"IMG/imgb.jpg",
				describe:"【就业班】响应式开发与常用框架",
				unitprice:"799"
			},
			product3={
				imgsrc:"IMG/imgc.jpg",
				describe:"【实战课程】热门框架Vue开发WebApp",
				unitprice:"499"
			},
			product4={
				imgsrc:"IMG/imgd.jpg",
				describe:"【就业班】组件化思想开发电商网页",
				unitprice:"680"
			},
			product5={
				imgsrc:"IMG/imge.jpg",
				describe:"【实战课程】Vue2.5开发去哪儿网App从零基础到入门实战项目",
				unitprice:"290"
			},
			product6={
				imgsrc:"IMG/imgf.jpg",
				describe:"【实战课程】剑指Java面试offer直通车",
				unitprice:"266"
			}
		];
	var itemList=document.getElementById("itemList");
	creatNode(data);
	shoppingCART(data);
	for(var i=0;i<data.length;i++){
		var delet=document.querySelectorAll("input[value='删除']");
		delet[i].index=i;
		delet[i].onclick=function(){
			var sure=confirm("删除后不可恢复,确定要删除吗？");
			if(sure){
				var totalPrice=document.querySelectorAll(".totalPrice"),
				    amountPayable=document.querySelector("#amountPayable"),
				    selectEach=document.querySelectorAll("input[name='selectEach']");
				if(selectEach[this.index].checked){
					amountPayable.innerHTML=parseInt(amountPayable.innerHTML)-parseInt(totalPrice[this.index].innerHTML);
				}
				data.splice(this.index,1);
				var deletnode=document.querySelector('#product'+this.index);
				itemList.removeChild(deletnode);

				//更新index
				for(var i=0;i<data.length;i++){
					var delet=document.querySelectorAll("input[value='删除']");
					delet[i].index=i;
					var product=document.querySelectorAll("div[id*='product']");
					product[i].id="product"+i;
				};
				shoppingCART(data);
				if(data.length==0){
					var tip=document.getElementsByTagName("em")[0];
					tip.style.display="block";
				}
			}
		}
	};

	function creatNode(data){
		for(var i=0;i<data.length;i++){
			document.write(
				"<div id='product"+i
				+"'><input type='checkbox' name='selectEach'><img src='"+data[i].imgsrc
				+"'><h6>"+data[i].describe
				+"</h6><span>￥</span><span class='totalPrice'>"+data[i].unitprice+"</span><span>￥"+data[i].unitprice
				+"</span><div><input type='button' value='+'><input type='text' value='1' class='quantity'><input type='button' value='-'></div><input type='button' value='删除'></div>"
				);
			var node=document.getElementById("product"+i);
			itemList.appendChild(node);
		}
	}
	function shoppingCART(data){
		var btnAdd=document.querySelectorAll("input[value='+']"),
		    btnSub=document.querySelectorAll("input[value='-']"),
		    selectAll=document.querySelector("input[name='selectAll']"),
			selectEach=document.querySelectorAll("input[name='selectEach']"),
			btnQuantity=document.querySelectorAll(".quantity"),
			totalPrice=document.querySelectorAll(".totalPrice"),
			checkedAmount=null,
			amountPayableNum=0,
			amountPayable=document.querySelector("#amountPayable");
		selectAll.onclick=selectedAll;
		for(var i=0;i<data.length;i++){
			btnAdd[i].index=i;
			btnSub[i].index=i;
			selectEach[i].index=i;
			btnAdd[i].onclick=addQuantity;
			btnSub[i].onclick=subQuantity;
			selectEach[i].onclick=selectedOne;
		}
		function addQuantity(){
			btnQuantity[this.index].value=+btnQuantity[this.index].value+1;
			totalPrice[this.index].innerHTML=btnQuantity[this.index].value*data[this.index].unitprice;
			if(selectEach[this.index].checked){
				amountPayableNum+=parseInt(data[this.index].unitprice);
				amountPayable.innerHTML=amountPayableNum;
			}
			
		}
		function subQuantity(){
			if(btnQuantity[this.index].value>=2){
				btnQuantity[this.index].value-=1;
				totalPrice[this.index].innerHTML=btnQuantity[this.index].value * data[this.index].unitprice;
				if(selectEach[this.index].checked){
					amountPayableNum-=parseInt(data[this.index].unitprice),
					amountPayable.innerHTML=amountPayableNum;
				}
			}
		}
	    function selectedOne(){
			if(this.checked){
				checkedAmount+=1;
				checkedAmount!=selectEach.length?
				selectAll.checked=false:
				selectAll.checked=true;
				amountPayableNum+=parseInt(totalPrice[this.index].innerHTML);
				amountPayable.innerHTML=amountPayableNum;
			}else{
				checkedAmount-=1;
				checkedAmount!=selectEach.length?
				selectAll.checked=false:
				selectAll.checked=true;
				amountPayableNum-=parseInt(totalPrice[this.index].innerHTML);
				amountPayable.innerHTML=amountPayableNum;
			}
		}
		function selectedAll(){
			if(selectAll.checked){
				amountPayableNum=0;
				for(var i=0;i<selectEach.length;i++){
					selectEach[i].checked=true;
					amountPayableNum+=parseInt(totalPrice[i].innerHTML);
					amountPayable.innerHTML=amountPayableNum;
				}
			}else{
				for(var i=0;i<selectEach.length;i++){
					selectEach[i].checked=false;
					amountPayableNum=0;
					amountPayable.innerHTML=amountPayableNum;
				}
			}
		}
	}