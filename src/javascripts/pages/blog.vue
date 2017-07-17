<template>
  <section id="work" class="">
    <div class="body">
      <div class="work-item" v-for="p in posts" :id="p.slug">
        <div class="blog-date">{{ p.date | date }}</div>
        <div class="blog-body" v-html="p.body"></div>
      </div>
      <div class="sidebar">
        <div class="sidebar-item">
          <h5>Jump To</h5>
        </div>
        <div v-for="p in posts" :id="p.slug" class="sidebar-item" >
          <a href="#" v-scroll-to="{ el: '#' + p.slug, offset: -20, onDone: onScrollDone() }" v-html="p.title"></a>
        </div>
        <div class="sidebar-item">
          <a href="#" v-scroll-to="{ el: '#work', offset: -80, onDone: onScrollDone() }">Back to Top</a>
        </div>
      </div>
      <a href="#" v-scroll-to="{ el: '#work', offset: -80, onDone: onScrollDone() }">Back to Top</a>
    </div>
  </section>
</template>

<script>
var S = require('string')
var moment = require('moment')

export default {
  name: 'hi',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed: {
    posts: function() {
      var app = this
      var list = require('../../../blog/manifest.json')
      var posts = []

      console.log(list)

      for (var p = 0; p < list.length; p++) {
        posts[p] = []
        posts[p].date = list[p].date
        console.log(list[p].path)

        var s = require(`../../../blog/${list[p].path}`)

        // Fix relative path issues with Marked's image import
        var w = s.replace(new RegExp('\/images', 'g'), 'images')
        var title = s.substring(s.indexOf('>') + 1, s.indexOf('</h1>'))

        posts[p].title = title
        posts[p].slug = S(title).slugify()
        posts[p].body = w
      }

      return posts.sort((a, b) => {
        // Sort the posts most to least recent
        return -(moment(a.date).diff(moment(b.date)))
      })
    }
  },
  methods: {
    onScrollDone: function () {
    }
  },
  mounted: function () {
    console.log("Highlight things on the blog")
    // hljs.initHighlightingOnLoad();
    $(document).ready(function() {
      $('pre code').each(function(i, block) {
        console.log("Highlighting " + block)
        hljs.highlightBlock(block);
      });
    });
  }
}
</script>
