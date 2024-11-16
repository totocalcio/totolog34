export const SITE_TITLE: string = "うさ技術";

export const SITE_DESCRIPTION: string
  = "うさぎとフロントエンドが好きな技術ブログ。マークアップが一番好き。";

export const SITE_URL: string = "https://totolog34.com/";

type SocialInfo = {
  url: string;
  img: {
    path: string;
    alt: string;
  };
  id?: string;
}

export const SOCIAL_INFO_LIST: { [key: string]: SocialInfo } = {
  rss: {
    url: "https://totolog34.com/feed/rss.xml",
    img: {
      path: "/img/feed_icon.svg",
      alt: "RSS Feed アイコン",
    },
  },
  github: {
    url: "https://github.com/totocalcio",
    img: {
      path: "/img/github_logo.png",
      alt: "GitHub アイコン",
    },
  },
  x: {
    url: "https://twitter.com/dir20634",
    id: "dir20634",
    img: {
      path: "/img/x_logo.png",
      alt: "X アイコン",
    },
  },
};

export const DEFAULT_IMAGE_PATH: string = "/img/default.png";

export const PER_PAGE: number = 10;
