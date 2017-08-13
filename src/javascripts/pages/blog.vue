<template>
  <section id="work" class="">
    <div class="body">
      <div class="work-item" v-for="p in posts" :id="p.slug">
        <div class="blog-date">{{ p.date | date }}</div>
        <div class="blog-body" v-html="p.content"></div>
      </div>
      <div class="sidebar">
        <div class="sidebar-item">
          <h5>Jump To</h5>
        </div>
        <div v-for="p in posts" :id="p.slug" class="sidebar-item" >
          <a href="#" v-scroll-to="{ el: '#' + p.slug, offset: -80, onDone: onScrollDone() }" v-html="p.title"></a>
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
      // msg: 'Welcome to Your Vue.js App'
    }
  },
  // components: {'scrollactive' : ScrollActive},
  computed: {
    posts: function() {
      var posts = require('../blog-manifest.json')
      return posts
    },
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
