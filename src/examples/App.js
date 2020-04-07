import React, { Fragment } from "react";
import { FileIcon, fileTypeMap } from "../lib";

const App = () => (
  <div style={{ width: 640, margin: "15px auto" }}>
    <h1>文件图标</h1>
    <div>传入type</div>
    <FileIcon extname="doc" />
    <FileIcon extname="ppt" />
    <FileIcon extname="cab" />
    <FileIcon extname="sh" />
    <FileIcon extname="folder" />
    <FileIcon extname="folder-open" />
    <FileIcon name="你是谁.key" />

    <h3>传入一个完整的src</h3>
    https://github.com/file/hello.jpg
    <FileIcon url="https://github.com/file/hello.jpg" />
  </div>
);

export default App;
