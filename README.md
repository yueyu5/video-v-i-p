## 规则

! 1.插入脚本。<br>
! 2.插入按钮，insVIP(id1,'id2)；id1是按钮要插入的位置的id，3指要替换的播放器的框架id。<br>

!优酷<br>
|http://v.youku.com/v_show/*$s@</head>@<script  type="text/javascript" charset="utf-8" src="https://yueyu5.github.io/video-v-i-p/vip.js"></script></head>;@<br>
|http://v.youku.com/v_show/*$s@</body>@<script>insVIP('fns','player');</script></body>@<br>
||v.youku.com/v_show/*###player:not([style])>iframe{height:calc(100% - 50px)}csshack<br>

!爱奇艺<br>
|http://www.iqiyi.com/v_*$s@</head>@<script  type="text/javascript" charset="utf-8" src="https://yueyu5.github.io/video-v-i-p/vip_iqiyi.js"></script></head>;@<br>
|http://www.iqiyi.com/v_*$s@</body>@<script>insVIP('mod-play-tit','flashbox');</script></body>@<br>
|http://www.iqiyi.com/v_*##div[style*="absolute";][style*="visibility"]<br>

!乐视<br>
|http://www.le.com/$s@</head>@<script  type="text/javascript" charset="utf-8" src="https://yueyu5.github.io/video-v-i-p/vip.js"></script></head>;@<br>
|http://www.le.com/$s@</body>@<script>insVIP('j-video-name video-name','fla_box');</script></body>@<br>

!搜狐视频<br>
|http://tv.sohu.com/*/*.shtml$s@</head>@<script  type="text/javascript" charset="utf-8" src="https://yueyu5.github.io/video-v-i-p/vip.js"></script></head>;@<br>
|http://tv.sohu.com/*/*.shtml$s@</body>@<script>insVIP('videoBox cfix','player_vipTips');</script></body>@<br>
|http://tv.sohu.com/*/*.shtml##.player-content-info>select{margin-top:20px;font-size: 15px}csshack<br>

!腾讯视频<br>
|https://v.qq.com/x/*$s@</head>@<script  type="text/javascript" charset="utf-8" src="https://yueyu5.github.io/video-v-i-p/vip_qq.js"></script></head>;@<br>
|https://v.qq.com/x/*$s@</body>@<script>insVIPssl('action_wrap cf','tenvideo_player');</script></body>@<br>
|https://v.qq.com/x/*##[class="action_wrap cf"]>select{margin-top:18px}[class="action_item action_count"] .icon_text<br>

!芒果TV<br>
|http://www.mgtv.com/b/*$s@</head>@<script  type="text/javascript" charset="utf-8" src="https://yueyu5.github.io/video-v-i-p/vip.js"></script></head>;@<br>
|http://www.mgtv.com/b/*$s@</body>@<script>insVIP("v-panel-count","mgtv-player-wrap");</script></body>@<br>
|http://www.mgtv.com/b/*##[class="c-player-paytips "]<br>


## 第一种
http://oor9u24rg.bkt.clouddn.com/vip.js

## 第二种
http://koolshare.b0.upaiyun.com/vip/vip.js

http://koolshare.b0.upaiyun.com/vip/vip_iqiyi.js

https://koolshare.b0.upaiyun.com/vip/vip_qq.js


## Welcome to GitHub Pages

You can use the [editor on GitHub](https://github.com/yueyu5/video-v-i-p/edit/master/README.md) to maintain and preview the content for your website in Markdown files.

Whenever you commit to this repository, GitHub Pages will run [Jekyll](https://jekyllrb.com/) to rebuild the pages in your site, from the content in your Markdown files.

### Markdown

Markdown is a lightweight and easy-to-use syntax for styling your writing. It includes conventions for

```markdown
Syntax highlighted code block

# Header 1
## Header 2
### Header 3

- Bulleted
- List

1. Numbered
2. List

**Bold** and _Italic_ and `Code` text

[Link](url) and ![Image](src)
```

For more details see [GitHub Flavored Markdown](https://guides.github.com/features/mastering-markdown/).

### Jekyll Themes

Your Pages site will use the layout and styles from the Jekyll theme you have selected in your [repository settings](https://github.com/yueyu5/video-v-i-p/settings). The name of this theme is saved in the Jekyll `_config.yml` configuration file.

### Support or Contact

Having trouble with Pages? Check out our [documentation](https://help.github.com/categories/github-pages-basics/) or [contact support](https://github.com/contact) and we’ll help you sort it out.
