# 文件图标
这是一个内置了常用图标的npm库，可以很方便的调用，图标格式为svg，宽高相等，扁平化的设计，适合现在我们常用的系统风格；

## 安装
```bash
npm install @tntx/file-icon --save-dev
```

## 使用
```
import { FileIcon } from "@tntd/file-icon";

我们提供三种方式调用图标：
1、传入后缀名：<FileIcon extname="jpeg"/>
2、传入文件名称：<FileIcon name="README.md"/>
2、传入文件链接：<FileIcon url="https://www.baidu.com/cdn/demo.key"/>
```