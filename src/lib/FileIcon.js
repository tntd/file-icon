import React from "react";
import { FILE_ICON_MAP } from "./constant";
import { getIconType, getExtname } from "./utils";

const FileIcon = ({ extname = "text", url, name }) => {
  if (url && getExtname(url)) {
    extname = getExtname(url);
  } else if (name && getExtname(name)) {
    extname = getExtname(name);
  }

  let fileImg = FILE_ICON_MAP[getIconType(extname)] || FILE_ICON_MAP["common"];

  return (
    <img src={fileImg} />
  )
};

export default FileIcon;
