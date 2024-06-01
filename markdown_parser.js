import fs from 'fs'
// eslint-disable-next-line @typescript-eslint/no-var-requires
import { load } from 'js-yaml'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
function parseMarkdown (content) {
// Regular expression to match YAML front matter
  const frontMatterRegex = /^---\n([\s\S]*?)\n---/
  const match = content.match(frontMatterRegex)

  if (match) {
    const yamlContent = match[1]
    const parsedData = load(yamlContent)
    const restOfContent = content.slice(match[0].length).trim()

    return {
      frontMatter: parsedData,
      content: restOfContent
    }
  }

  return {
    frontMatter: {},
    content: content.trim()
  }
}

export default parseMarkdown
