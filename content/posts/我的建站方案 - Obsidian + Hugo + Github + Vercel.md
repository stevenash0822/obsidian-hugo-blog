---
title: 我的建站方案 - Obsidian + Hugo + Github + Vercel
tags:
  - 折腾
date: 2024-11-30T00:00:02
draft: false
toc: false
feature:
---

## Step1. 心理建设 —— Abandon
- Q：让一个静态博客站支棱起来一共需要几步？
- A：第一步，调研各类静态博客框架 (jekyll, hexo, hugo…)，第二步，调研各类花里胡哨的主题，第三步，定下方案，折腾建站，第四步，哦写个博客。**正常来说需要上述四步，但一般只用得到前三步，毕竟写博客讲究一个点到为止**

<!--more-->

## Step2. 找找现成 —— Clone
 [拉取我的仓库](https://github.com/stevenash0822/obsidian-hugo-blog)，但是你仍需要完成以下修改：

### 修改豆瓣 id
- 仓库路径`.github/workflows/douban.yml`中设置的是我的个人豆瓣 id，你需要修改为你的个人 id (个人 id 在豆瓣 app 的“我的”tab 页，展开“关于我”的那行小字就可以看到)。这个工作流的作用是每天自动从豆瓣获取你的已读已看数据，并增量保存至本地 csv 文件中
- 第一次执行该工作流之前，先删除仓库路径`static/douban`下保存的本地数据

### 修改评论系统
- 评论系统使用的是 twikoo 的方案，需要自建。若暂时不想自建评论系统，可以修改仓库路径`config.toml`中的配置项，关闭评论功能：
```toml
[params.twikoo]
  enable = false
```
- 若自建评论系统，可以参考[快速上手 | Twikoo 文档](https://twikoo.js.org/quick-start.html)完成后端云函数的部署。获取到个人的 twikoo 云函数地址之后，完成仓库路径`config.toml`对应位置的替换：
```toml
web_api_address = "xxx"
```

### 修改闲聊头像
- 个人头像使用的是 [Cravatar – 互联网公共头像服务](https://cravatar.cn/)的方案，你需要在上述网站使用邮箱地址注册并上传个人头像。修改仓库路径`config.toml`的对应位置为注册邮箱，可以实现个人闲聊头像的替换：
```toml
[params.cravatar]
  email_address = "xxx"
```
- (免注册方案) 由于 cravatar 网站收录了 QQ 头像，其实可以直接修改仓库路径`config.toml`的对应位置为个人的 QQ 邮箱，同样可以实现个人闲聊头像的替换

### 修改远端仓库配置
- 远端 github 仓库的`Settings - Action - General`设置页的 "Workflow permissions" 选项修改为 "Read and write permissions"，这样才可以让每天自动执行的工作流具备写入本地文件的权限

### 移除博客内容
- 删除仓库路径`content/posts`与`content/posts/chat`下方，除了`_index.md`之外的所有文件
- 删除仓库路径`content/about.md`中的内容

## Step3. 跃跃欲试 —— Deploy
*TO BE CONTINUED*

## Step4. 本地编辑 —— Write
*TO BE CONTINUED*

TODO：
- 解释 obsidian 的 frontmatter (yaml 区域)
- 本地内链与本地图片如何同时兼容 hugo 和 obsidian 的配置方案
- 嵌入豆瓣条目，游戏条目，内链条目的 hugo shortcode 配置方案
- 搜索改进方案
- dev 分支不提了，默认大家是 master 分支一条路走到黑
- vercel 的仓库配置，包括环境变量，domain 设置等等