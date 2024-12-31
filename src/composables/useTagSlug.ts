import { kebabCase } from "scule";

type ConvertTagList = {
  [key: string]: string;
};

const convertTagList: ConvertTagList = {
  diary: "日記",
  other: "その他",
  learn: "学習",
  domain: "ドメイン",
  server: "サーバー",
  gatsby: "Gatsby",
  css: "CSS",
  javascript: "JavaScript",
  vue: "Vue.js",
  react: "React",
  "next.js": "Next.js",
  expo: "Expo",
  reactnative: "ReactNative",
  wordpress: "WordPress",
  nativescript: "NativeScript",
  html: "HTML",
};

export function getTagSlug(tag: string) {
  const tagPath = Object.keys(convertTagList).find(
    key => convertTagList[key] === tag,
  );
  return tagPath ? kebabCase(tagPath) : kebabCase(tag);
}

export function getTagName(tag: string) {
  return convertTagList[tag.replace(/-/g, ".")];
}
