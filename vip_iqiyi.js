var inum = 1,
vipOption = "";
var vipChannl = new Array("http://vip.jlsprh.com/index.php?url=", "http://000o.cc/jx/ty.php?url=", "http://aikan-tv.com/?url=", "http://q.z.vip.totv.72du.com/?url=");
for (x in vipChannl) {
    vipOption = vipOption + '<option value="' + vipChannl[x] + '">VIP通道' + inum+++'</option>';
}
function insVIP(emID, rID) {
    var gemID = document.getElementsByClassName(emID)[0];
	
	///////////检测本页是否已存在，存在则删除///////////
	var child=document.getElementById("vip-select");
    if(child) {gemID.removeChild(child)};
	////////////////////
	
    var newNode = document.createElement("select");
    newNode.setAttribute("title", "Modified by YUEYU.");
    newNode.setAttribute("style", "border:2px solid #5aa700;color:#5aa700;background:#292929;font-size:1;outline:0");
    gemID.appendChild(newNode);
    newNode.setAttribute("onchange", "replacePlayer(this,'" + rID + "')");
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
	newNode2.setAttribute("style","text-align:center; border:2px;  font-size:5; color:red; font-weight:bold;");
    newNode2.setAttribute("value", "VIP通道指示");
	newNode2.setAttribute("disabled", "disabled");	
	/////////////////////////////////////////////////////////////
}
function replacePlayer(e, rID) {
    var playerID = document.getElementById(rID);
    if (document.getElementsByClassName('btn-pause')[0]) {
        document.getElementsByClassName('btn-pause')[0].click();
    }
    playerID.innerHTML = '';
    var newplayerID = document.createElement("iframe");
    playerID.appendChild(newplayerID);
    newplayerID.setAttribute("border", "0");
    newplayerID.setAttribute("frameborder", "no");
    newplayerID.setAttribute("scrolling", "no");
    newplayerID.setAttribute("marginwidth", "0");
    newplayerID.setAttribute("width", "100%");
    newplayerID.setAttribute("height", "100%");
    var getcurid = window.location.href.match(/.*curid=(\d*)_/);
    if (getcurid !== null) {
        Q.get('http://mixer.video.iqiyi.com/jp/mixin/videos/' + getcurid[1],
        function(result) {
            newplayerID.src = e.value + tvInfoJs.url;
        },
        'script')
    } else {
        newplayerID.src = e.value + window.location.href.match('http[^\?]*')[0];
    }
		
	/////////////////插入点击选择VIP通道后，select恢复默认状态//////////
	var sid=document.getElementById("vip-select");
    //alert(sid.options[sid.selectedIndex].text)
	document.getElementById("vip-text").value="当前：" + sid.options[sid.selectedIndex].text;
	sid.value="1";
	////////////////////////////////////////////////////////////////////
}