import {createGzip} from 'zlib'
import fs from 'fs'

let read = fs.createReadStream('text.txt')
let write = fs.createWriteStream('text.txt')

let gzip = createGzip()

read.pipe(gzip).pipe(write)