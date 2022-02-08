const sharp = require('sharp')
import { v4 as uuidv4 } from 'uuid'
const path = require('path')

class Resize {
  constructor(folder, resize) {
    this.folder = folder
  }
  async save(buffer, resize) {
    const filename = Resize.filename()
    const filepath = this.filepath(filename)
    await sharp(buffer)
      .resize(resize, resize, {
        // size image 300x300
        fit: sharp.fit.inside,
        withoutEnlargement: true,
      })
      .toFile(filepath)

    return filename
  }
  static filename() {
    // random file name
    return `${uuidv4()}.png`
  }
  filepath(filename) {
    return path.resolve(`${this.folder}/${filename}`)
  }
}
module.exports = Resize
