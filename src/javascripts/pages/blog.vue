<template>
  <section id="work" class="">
    <div class="body">
      <div class="work-item" v-for="p in posts" :id="p">
        <div class="blog-date">{{ p.date | date }}</div>
        <div class="blog-body" v-html="p.body"></div>
      </div>
    </div>
    <!-- <div class="sidebar">
      <div v-for="w in work" :id="w.slug" class="sidebar-item" >
        <a href="#" v-scroll-to="{ el: '#' + w.slug, offset: -20, onDone: onScrollDone() }">{{ w.slug | humanize }}</a>
      </div>
      <div class="sidebar-item">
        <a href="#" v-scroll-to="{ el: '#work', offset: -80, onDone: onScrollDone() }">Back to Top</a>
      </div>
    </div> -->
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
      var list = require(`../../../blog/blog-manifest.json`)
      var posts = []

      console.log(list)

      for (var p = 0; p < list.length; p++) {
        posts[p] = []
        posts[p].date = list[p].date
        console.log(list[p].path)
        posts[p].body = require('../../../blog/' + list[p].path)
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
