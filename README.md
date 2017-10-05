## Welcome to Yueyu's GitHub Pages
https://yueyu5.github.io/video-v-i-p/

## 规则
<pre>
! 1.插入脚本。<br>
! 2.插入按钮，insVIP(id1,'id2)；id1是按钮要插入的位置的id，3指要替换的播放器的框架id。<br>

!优酷<br>
|http://v.youku.com/v_show/*$s@</head>@&lt;script  type="text/javascript" charset="utf-8" src="https://yueyu5.github.io/video-v-i-p/vip.js"></script&gt;</head>;@<br>
|http://v.youku.com/v_show/*$s@</body>@&lt;script&gt;insVIP('fns','player');</script&gt;</body>@<br>
||v.youku.com/v_show/*###player:not([style])>iframe{height:calc(100% - 50px)}csshack<br>

!爱奇艺<br>
|http://www.iqiyi.com/v_*$s@</head>@&lt;script  type="text/javascript" charset="utf-8" src="https://yueyu5.github.io/video-v-i-p/vip_iqiyi.js"></script&gt;</head>;@<br>
|http://www.iqiyi.com/v_*$s@</body>@&lt;script&gt;insVIP('mod-play-tit','flashbox');</script&gt;</body>@<br>
|http://www.iqiyi.com/v_*##div[style*="absolute";][style*="visibility"]<br>

!乐视<br>
|http://www.le.com/$s@</head>@&lt;script  type="text/javascript" charset="utf-8" src="https://yueyu5.github.io/video-v-i-p/vip.js"></script&gt;</head>;@<br>
|http://www.le.com/$s@</body>@&lt;script&gt;insVIP('j-video-name video-name','fla_box');</script&gt;</body>@<br>

!搜狐视频<br>
|http://tv.sohu.com/*/*.shtml$s@</head>@&lt;script  type="text/javascript" charset="utf-8" src="https://yueyu5.github.io/video-v-i-p/vip.js"></script&gt;</head>;@<br>
|http://tv.sohu.com/*/*.shtml$s@</body>@&lt;script&gt;insVIP('videoBox cfix','player_vipTips');</script&gt;</body>@<br>
|http://tv.sohu.com/*/*.shtml##.player-content-info>select{margin-top:20px;font-size: 15px}csshack<br>

!腾讯视频<br>
|https://v.qq.com/x/*$s@</head>@&lt;script  type="text/javascript" charset="utf-8" src="https://yueyu5.github.io/video-v-i-p/vip_qq.js"></script&gt;</head>;@<br>
|https://v.qq.com/x/*$s@</body>@&lt;script&gt;insVIPssl('action_wrap cf','tenvideo_player');</script&gt;</body>@<br>
|https://v.qq.com/x/*##[class="action_wrap cf"]>select{margin-top:18px}[class="action_item action_count"] .icon_text<br>

!芒果TV<br>
|http://www.mgtv.com/b/*$s@</head>@&lt;script  type="text/javascript" charset="utf-8" src="https://yueyu5.github.io/video-v-i-p/vip.js"></script&gt;</head>;@<br>
|http://www.mgtv.com/b/*$s@</body>@&lt;script&gt;insVIP("v-panel-count","mgtv-player-wrap");</script&gt;</body>@<br>
|http://www.mgtv.com/b/*##[class="c-player-paytips "]<br>
</pre>

## 第一种
http://oor9u24rg.bkt.clouddn.com/vip.js

## 第二种
http://koolshare.b0.upaiyun.com/vip/vip.js

http://koolshare.b0.upaiyun.com/vip/vip_iqiyi.js

https://koolshare.b0.upaiyun.com/vip/vip_qq.js
