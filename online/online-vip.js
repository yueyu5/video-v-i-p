var inum = 1,
vipOption = "";
var vipChannl = new Array(
"http://v.72du.com/api/?url=",
"http://www.82190555.com/index/iqiyi.php?url=",
"http://yyygwz.com/index.php?url=",
"http://api.baiyug.cn/vip/index.php?url=",
"http://www.sfsft.com/admin.php?url=",
"http://www.wmxz.wang/index.php?url=",
"http://2.jx.72du.com/video.php?url=",
"http://000o.cc/jx/ty.php?url=",
"http://www.vipjiexi.com/yun.php?url=",
"http://q.z.vip.totv.72du.com/?url=",
"http://aikan-tv.com/?url=",
"https://api.47ks.com/webcloud/?v=",
"http://api.wlzhan.com/sudu/?url=", 
"http://jx.vgoodapi.com/jx.php?url=",
"http://vip.jlsprh.com/index.php?url=",
"http://www.0335haibo.com/tong.php?url=",
"https://api.vparse.org/?url=",
"http://yun.mt2t.com/yun?url="
);
for (x in vipChannl) {
    vipOption = vipOption + '<option value="' + vipChannl[x] + '">VIP通道' + inum+++'</option>';
}
function insVIP(emID, rID, Url) {
    var gemID = document.getElementsByClassName(emID)[0];
	
	
    var newNode = document.createElement("select");
	newNode.setAttribute("class", "styled-select");
	newNode.setAttribute("style"," font-size:20px;"); 
    newNode.setAttribute("title", "Modified by YUEYU.");
    gemID.appendChild(newNode);
    newNode.setAttribute("onchange", "replacePlayer(this,'" + rID + "' ,'"+Url+"' )");
	///////////添加value=1
    newNode.innerHTML = '<option style:font-size:20px; selected="selected" value="1" disabled="disabled">步骤二: 选择VIP通道</option>' + vipOption;
	///////////添加select的id/////////
	newNode.setAttribute("id", "vip-select");
	
	//////////////添加插入当前-VIP通道-文本指示框////////////////
	var newNode2 = document.createElement("input");
	gemID.appendChild(newNode2);
	newNode2.setAttribute("id", "vip-text");
	newNode2.setAttribute("type", "text");
	newNode2.setAttribute("style","text-align:center;  color:red; font-size:20px; font-weight:bold;");
    newNode2.setAttribute("value", "VIP通道指示");
	newNode2.setAttribute("disabled", "disabled");	
	/////////////////////////////////////////////////////////////
	
}
function replacePlayer(e, rID, Url) {	
    var playerID = document.getElementById(rID);
	var tourl=document.getElementById(Url).value;
    playerID.href = e.value + tourl;
  //  window.open(e.value + tourl, rID, 'width=1051,height=592,location=0,menubar=0,scrollbars=0,status=0,toolbar=0')
    document.getElementById("jmp").click();
		/////////////////插入点击选择VIP通道后，select恢复默认状态//////////
	var sid=document.getElementById("vip-select");
	document.getElementById("vip-text").value="当前：" + sid.options[sid.selectedIndex].text;
	sid.value="1";
	////////////////////////////////////////////////////////////////////
}

