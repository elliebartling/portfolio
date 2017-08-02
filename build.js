const fs = require('graceful-fs')
const path = require('path')
const marked = require('marked')
const cheerio = require('cheerio')


//
// var posts = []
//
// var list = fs.readdirSync('./blog')
//
// for (p in list) {
//   var filename = list[p]
//
//   // Only get markdown files, not folders
//   if (path.extname(filename) == '.md') {
//     var stats = fs.statSync('./blog/' + filename)
//     var date = stats.mtime
//
//     posts[p] = {}
//     posts[p].date = date
//     posts[p].path = filename
//   }
// }
//
// fs.writeFileSync('blog/manifest.json', JSON.stringify(posts))


// --------------------------
// Get work pages
// --------------------------

var index = fs.readdirSync('./work')
var work = []

for (w in index) {
  // console.log(index[w])
  var filename = index[w]

  // Only get markdown files, not folders (where images are stored)
    if (path.extname(filename) == '.md') {
      // Declare a blank object to store our data in
      var data = {}

      // Load our content with marked, and create a phantom DOM with Cheerio
      var content = marked(fs.readFileSync('./work/' + index[w]).toString())
      var $ = cheerio.load(content)

      // Grab title & tags
      var title = $('h1').html()
      var tags = []

      $('ul:first-of-type').children().each(function() {
        tags.push($(this).html().toLowerCase())
      })

      // var w = $.replace(new RegExp('\/images', 'g'), 'images')

      $('img').each(function() {
        var src = $(this).attr('src')
        console.log(src)
        $(this).attr('src', 'images/' + src)
      })

      console.log(title)
      console.log(tags)

      // Set data for this object
      data.slug = filename.substring(0, filename.length - 3)
      data.title = title
      data.tags = tags
      data.content = $.html()

      work.push(data)
    }
}

fs.writeFileSync('src/javascripts/work-manifest.json', JSON.stringify(work))

// for (var i in app.index) {
//   var s = require(`../../../work/${app.index[i]}.md`)
//
//   // Fix relative path issues with Marked's image import
//   var w = s.replace(new RegExp('\/images', 'g'), 'images')
//
//   work[i] = { index: i, slug: app.index[i], body: w }
// }
// console.log(work)
// return work
