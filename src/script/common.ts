import kebabCase from 'lodash/kebabCase'

type ConvertTagList = {
  [key: string]: string
}

const convertTagList: ConvertTagList = {
  diary: '日記',
  other: 'その他',
  road: '道のり',
  domain: 'ドメイン',
  server: 'サーバー',
}

export const getTagPath = (tag: string) => {
  const tagPath = Object.keys(convertTagList).find(
    (key) => convertTagList[key] === tag
  )
  return tagPath ? kebabCase(tagPath) : kebabCase(tag)
}
