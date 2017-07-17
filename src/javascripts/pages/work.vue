<template>
  <section id="work" class="">
    <div class="body">
      <div class="work-item" v-for="w in work" v-html="w.body" :id="w.slug"></div>
    </div>
    <div class="sidebar">
      <div v-for="w in work" :id="w.slug" class="sidebar-item" >
        <a href="#" v-scroll-to="{ el: '#' + w.slug, offset: -20, onDone: onScrollDone() }">{{ w.slug | humanize }}</a>
      </div>
      <div class="sidebar-item">
        <a href="#" v-scroll-to="{ el: '#work', offset: -80, onDone: onScrollDone() }">Back to Top</a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'hi',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      index: [
        'cat-merrick-studios',
        'texas-millennial-institute',
        // 'my-magic-mud',
        'social-evolution',
        'at-the-fork-virtual-reality',
        // 'free-together'
      ]
    }
  },
  computed: {
    work: function() {
      var app = this
      var work = []

      for (var i in app.index) {
        var s = require(`../../../work/${app.index[i]}.md`)

        // Fix relative path issues with Marked's image import
        var w = s.replace('\/images', 'images')

        work[i] = { index: i, slug: app.index[i], body: w }
      }
      console.log(work)
      return work
    }
  },
  methods: {
    onScrollDone: function () {

    }
  }
}
</script>
