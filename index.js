import { transformSync } from '@babel/core'
import plugin from './plugin.js'


const code = `
foo === bar
`

const result = transformSync(code, {
    ast: true,
    plugins: [plugin],
})

// nodejs 打印完整信息
// console.dir(result.ast, {depth: null})
console.log(result)



