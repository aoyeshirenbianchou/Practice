//联想搜索框version1//////////////////////////////
	var searchUnit=document.getElementsByClassName("search")[0],
		searchText=document.querySelector(".search input[type='text']");
//输入框失焦隐藏联想框
	searchText.onblur=hiddenTips;
//输入框输入有效值，创建JSONP请求，无效隐藏联想框
	searchText.oninput=function(){
		var searchValue=searchText.value.replace(/^\s+|\s+$/g,"");
		searchValue?creatScript(searchValue):hiddenTips();
	}
//创建请求
	function creatScript(searchValue){
		//删除之前的请求标签
		remove(".search script");
		//拼接请求信息创建请求
		var script=document.createElement("script");
		searchUnit.appendChild(script);
		script.src="https://suggest.taobao.com/sug?code=utf-8&_ksTS=1556877747858_288&area=c2c&bucketid=8&callback=getJsonp&q="+searchValue;
	}
//获取响应处理数据
	function getJsonp(data){
		//提取有用部分组成数组
		var searchResult=new Array();
		for(var i=0;i<data["result"].length;i++){
			searchResult[i]=data["result"][i][0];
		}
		//搜索结果非空则显示结果，否则隐藏
		searchResult.length>0?showTips(creatTips()):hiddenTips();
	//创建联想框
		function creatTips(){
			remove(".tips");
			var tips=document.createElement("div");
			searchUnit.appendChild(tips);
			tips.className="tips";
			return tips;
		}
	//添加联想词条
		function showTips(tips){
			for(var i=0;i<searchResult.length;i++){
				var li=document.createElement("li");
				tips.appendChild(li);
				var allLi=document.querySelectorAll(".tips li");
				allLi[i].innerHTML=searchResult[i].replace(/<b>|<\/b>/g,"");
				allLi[i].onmousedown=function(){
					searchText.value=this.innerHTML;
					hiddenTips;
				}
				allLi[i].onmouseover=function(){
					this.style.backgroundColor="#eee";
				}
				allLi[i].onmouseout=function(){
					this.style.backgroundColor="transparent";
				}
			}
		}
	};
//
	function hiddenTips(){
		remove(".tips")
	}

	function remove(selector){
		var node=document.querySelector(selector);
		node&&searchUnit.removeChild(node);
	}
