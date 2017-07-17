var fs = require('graceful-fs')
var posts = {}

var p = fs.readdirSync('./blog')
console.log(p)

for (post in p) {
  var filename = p[post]
  var stats = fs.statSync('./blog/' + filename)
  var date = stats.mtime

  posts[filename] = {}
  posts[filename].date = date
  posts[filename].path = 'blog/' + filename
  console.log(posts[filename])
}

fs.writeFileSync('blog-manifest.json', JSON.stringify(posts))
