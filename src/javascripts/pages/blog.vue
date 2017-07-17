<template>
  <section id="work" class="">
    <div class="body">
      <div class="work-item" v-for="p in posts" :id="p">
        <div class="blog-date">{{ p.date | date }}</div>
        <div class="blog-body" v-html="p.body"></div>
      </div>
    </div>
  </section>
</template>

<script>
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

        posts[p].body = w
      }

      return posts
    }
  },
  methods: {
    onScrollDone: function () {

    }
  }
}
</script>
