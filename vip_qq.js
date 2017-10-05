var inum = 1,
vipOption = "";
var vipChannl = new Array("http://vip.jlsprh.com/index.php?url=", "http://vip.jlsprh.com/5.php?url=", "http://www.viyun.me/jiexi.php?url=", "http://yun.mt2t.com/yun?url=", "http://jx.vgoodapi.com/jx.php?url=", "http://q.z.vip.totv.72du.com/?url=", "https://api.vparse.org/?url=");
for (x in vipChannl) {
    vipOption = vipOption + '<option value="' + vipChannl[x] + '">VIP通道' + inum+++'</option>';
}
function insVIPssl(emID, wID) {
    var gemID = document.getElementsByClassName(emID)[0];
	
	///////////检测本页是否已存在，存在则删除///////////
	var child=document.getElementById("vip-select");
    if(child) {gemID.removeChild(child)};
	////////////////////
	
    var newNode = document.createElement("select");
    newNode.setAttribute("title", "Modified by YUEYU.");
    newNode.setAttribute("style", "border:2px solid #f07816;color:#f07816;background:#2d2d2d;outline:0");
    gemID.appendChild(newNode);
    newNode.setAttribute("onchange", "newWinPlayer(this,'" + wID + "')");
    newNode.innerHTML = '<option selected="selected" value="1" disabled="disabled">切换VIP通道</option>' + vipOption;
	
	///////////添加select的id/////////
	newNode.setAttribute("id", "vip-select");
	////////////////检测本页是否已存在，存在则删除/////
	child=document.getElementById("vip-text");
    if(child) {gemID.removeChild(child)};
    //////////////添加插入当前-VIP通道-文本指示框////////////////
	
	var newNode2 = document.createElement("input");
	gemID.appendChild(newNode2);
	newNode2.setAttribute("id", "vip-text");
	newNode2.setAttribute("type", "text");
	newNode2.setAttribute("style","text-align:center; border:2px; color:red; font-weight:bold;");
    newNode2.setAttribute("value", "VIP通道指示");
	newNode2.setAttribute("disabled", "disabled");	
	/////////////////////////////////////////////////////////////
}
function newWinPlayer(e, wID) {
    var playerID = document.getElementById(wID);
    var thisURL = window.location.href.match('http[^\?]*')[0];
    playerID.innerHTML = '';
    window.open(e.value + thisURL, wID, 'width=1051,height=592,location=0,menubar=0,scrollbars=0,status=0,toolbar=0');
    
		
	/////////////////插入点击选择VIP通道后，select恢复默认状态//////////
	var sid=document.getElementById("vip-select");
    //alert(sid.options[sid.selectedIndex].text)
	document.getElementById("vip-text").value="当前：" + sid.options[sid.selectedIndex].text;
	sid.value="1";
	////////////////////////////////////////////////////////////////////
}