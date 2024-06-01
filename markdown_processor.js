import { readFileSync } from 'fs'
import { join } from 'path'
import parseMarkdown from './utils/markdownParser'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
function processMarkdownFile (filePath) {
  const content = readFileSync(filePath, 'utf-8')
  return parseMarkdown(content)
}

// Example usage
const filePath = join(__dirname, 'example.md')
const result = processMarkdownFile(filePath)
console.log(result)
