import remarkGfm from 'remark-gfm'

export function getMdxOptions(){
    return {
        mdxOptions: {
          remarkPlugins: [remarkGfm]
        }
    }
}