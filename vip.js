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
function insVIP(emID, rID) {
    var gemID = document.getElementsByClassName(emID)[0];
	
	///////////检测本页是否已存在，存在则删除///////////
	var child=document.getElementById("vip-select");
    if(child) {gemID.removeChild(child)};
	////////////////////
    var newNode = document.createElement("select");
    newNode.setAttribute("title", "Modified by YUEYU.");
    newNode.setAttribute("style", "border:2px solid #0088f5;color:#0088f5;outline:0");
    gemID.appendChild(newNode);
    newNode.setAttribute("onchange", "replacePlayer(this,'" + rID + "')");
	///////////添加value=1
    newNode.innerHTML = '<option selected="selected" value="1" disabled="disabled">选择VIP通道</option>' + vipOption;
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
	newNode2.setAttribute("style","text-align:center;  color:red; font-size:5; font-weight:bold;");
    newNode2.setAttribute("value", "VIP通道指示");
	newNode2.setAttribute("disabled", "disabled");	
	/////////////////////////////////////////////////////////////
	
} 
function replacePlayer(e, rID) {	
    var playerID = document.getElementById(rID);
    var thisURL = window.location.href.match('http[^\?]*')[0];
    playerID.innerHTML = '';

    /////检测网页类型，若是https则直接弹出网页；若http则直接替换框架
    if(window.location.protocol=="https:"){
      window.open(e.value + thisURL, rID, 'width=1051,height=592,location=0,menubar=0,scrollbars=0,status=0,toolbar=0');
    }else{
      var newplayerID = document.createElement("iframe");
      playerID.appendChild(newplayerID);
      newplayerID.setAttribute("border", "0");
      newplayerID.setAttribute("frameborder", "no");
      newplayerID.setAttribute("scrolling", "no");
      newplayerID.setAttribute("marginwidth", "0");
      newplayerID.setAttribute("width", "80%");
      newplayerID.setAttribute("height", "80%");
      newplayerID.src = e.value + thisURL;
    }
	
		/////////////////插入点击选择VIP通道后，select恢复默认状态//////////
	var sid=document.getElementById("vip-select");
    //alert(sid.options[sid.selectedIndex].text)
	document.getElementById("vip-text").value="当前：" + sid.options[sid.selectedIndex].text;
	sid.value="1";
	////////////////////////////////////////////////////////////////////
}

var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?f1429b4d04f0b7286f0e057552b4ac21";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();
