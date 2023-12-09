
import remarkGfm from 'remark-gfm'

import rehypeSlug from 'rehype-slug'


export function getMdxOptions(){
    return {
        mdxOptions: {
          remarkPlugins: [remarkGfm]
        }
    }
}