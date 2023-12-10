import remarkGfm from 'remark-gfm'

import YouTube from "../components/youtube"

export function getMdxOptions(){
    return {
        mdxOptions: {
          remarkPlugins: [remarkGfm]
        }
    }
}

export function GetAllMDXComponents(){
  return {YouTube}//, code: Code}
}