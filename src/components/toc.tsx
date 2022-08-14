import * as React from "react";

type Props = {
  html?: string
}

export const Toc: React.FC<Props> = ({html}) => {
  if(html) {
    return  (
      <div className="table-of-contents" dangerouslySetInnerHTML={{ __html: html }} />
    )
  }
  return <></>
};
