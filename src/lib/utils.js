import { FILE_TYPE_MAP } from "./constant";

export const getIconType = (extname) => {
    let fileType = "common";
    Object.keys(FILE_TYPE_MAP).map(type => {
        FILE_TYPE_MAP[type].map(name => {
            if (name === extname) {
                fileType = type;
            }
        })
    })
    return fileType;
}


export const getExtname = (filename) => {
    if (!filename || typeof filename !== "string") {
        return false;
    };
    let a = filename.split("").reverse().join("");
    let b = a.substring(0, a.search(/\./)).split("").reverse().join("");
    return b;
};