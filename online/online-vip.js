var inum = 1,
vipOption = "";
var vipChannl = new Array(
"http://www.82190555.com/index/iqiyi.php?url=",
"https://api.47ks.com/webcloud/?v=",		
//去广告VIP，此链接不支持安卓

"http://yueyu5.gitee.io/v-i-p-edio/online/api.baiyug.cn/red.html?@http://api.baiyug.cn//vip_p_0bc6/index.php?url=",
"http://jx.vgoodapi.com/jx.php?url=",
"http://yun.mt2t.com/yun?url=",
"http://aikan-tv.com/?url=",
"http://j.zz22x.com/jx/?url=",
"http://www.52jiexi.com/x2/tong.php?url=",
"http://333c48-0.sh.1251081682.clb.myqcloud.com/?url=",
"http://jx.618g.com/?url="
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
   
 //document.getElementById("jmp").click();
		/////////////////插入点击选择VIP通道后，select恢复默认状态//////////
	var sid=document.getElementById("vip-select");
	document.getElementById("vip-text").value="当前：" + sid.options[sid.selectedIndex].text;
	sid.value="1";
	////////////////////////////////////////////////////////////////////
}

