<template>
  <section id="work" class="work-single">
    <div class="body">
      <div v-if="blog" class="work-item" v-html="blog.content" :id="blog.slug"></div>
    </div>
  </section>
</template>

<script>
const data = require('../blog-manifest.json')
console.log(data)

export default {
  name: 'hi',
  data () {
    return {
      allWork: data
    }
  },
  computed: {
    blog: function() {
      if (this.$route.params.slug) {
        var s = this.$route.params.project
        console.log(s)
      } else {
        // Redirest to main Work page
      }

      function matchesSlug(el) {
        console.log(el.slug)
        return el.slug === s
      }

      return data.find(matchesSlug)
    }
  },
  methods: {
    onScrollDone: function () {

    }
  },
  mounted: function () {
    console.log("Highlight things on work")
    $(document).ready(function() {
      $('pre code').each(function(i, block) {
        console.log("Highlighting " + block)
        hljs.highlightBlock(block);
      });
    });

    if (this.$route.params.project) {
      this.$scrollTo('#' + this.$route.params.projects)
    }
  },
  ready: function () {
    $(document).ready(function() {
      $('pre code').each(function(i, block) {
        console.log("Highlighting " + block)
        hljs.highlightBlock(block);
      });
    });
  }
}
</script>
