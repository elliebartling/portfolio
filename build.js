var fs = require('graceful-fs')
var path = require('path')
var posts = []

var list = fs.readdirSync('./blog')

for (p in list) {
  var filename = list[p]

  // Only get markdown files, not folders
  if (path.extname(filename) == '.md') {
    var stats = fs.statSync('./blog/' + filename)
    var date = stats.mtime

    posts[p] = {}
    posts[p].date = date
    posts[p].path = filename
  }
}

fs.writeFileSync('blog/manifest.json', JSON.stringify(posts))
