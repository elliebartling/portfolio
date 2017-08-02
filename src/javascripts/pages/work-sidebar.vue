<template>
  <div class="sidebar" v-if="sidebar === 'work'">
    <div class="sidebar-item">
      <h5>Read Next</h5>
    </div>
    <div v-for="w in allWork" :id="w.slug" class="sidebar-item">
      <router-link :to="'/work/' + w.slug" class="skill-link">{{ w.slug | humanize }}</router-link>
    </div>
    <div class="sidebar-item">
      <a href="#" v-scroll-to="{ el: '#work', offset: -80, onDone: onScrollDone() }">Back to Top</a>
    </div>
  </div>
</template>

<script>
const data = require('../work-manifest.json')
console.log(data)

export default {
  name: 'hi',
  data () {
    return {
      allWork: data
    }
  },
  computed: {
    work: function() {
      if (this.$route.params.project) {
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
    },
    sidebar: function () {
      console.log(this.$route)

      if ((this.$route.path).includes('work')) {
        return 'work'
      }
    }
  },
  methods: {
    onScrollDone: function () {

    }
  },
  mounted: function () {
    console.log("Highlight things on work")
  }
}
</script>
