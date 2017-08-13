<template>
  <section id="work" class="">
    <div class="body">
      <div class="work-item" v-for="w in work" v-html="w.content" :id="w.slug"></div>
    </div>
    <div class="sidebar">
      <div class="sidebar-item">
        <h5>Jump To</h5>
      </div>

      <!-- <scroll-active ref="scrollactive" class="my-nav"> -->
        <ul class="sidebar-item">
          <li v-for="w in work">
            <router-link :to="'work/' + w.slug" class="skill-link">{{ w.slug | humanize }}</router-link>
          </li>
        </ul>
      <!-- </scroll-active> -->

      <div class="sidebar-item">
        <a class="scroll" href="#" v-scroll-to="{ el: '#work', offset: -80, onDone: onScrollDone() }">Back to Top</a>
      </div>
    </div>
  </section>
</template>

<script>
// import ScrollActive from 'vue-scrollactive'
const data = require('../work-manifest.json')

export default {
  name: 'hi',
  data () {
    return {
      // msg: 'Welcome to Your Vue.js App'
    }
  },
  // components: {'scrollactive' : ScrollActive},
  computed: {
    work: function() {
      var work = require('../work-manifest.json')
      return work
    }
  },
  methods: {
    onScrollDone: function () {

    }
  },
  mounted: function () {
    var app = this


    console.log("Highlight things on work")
    $(document).ready(function() {
      $('pre code').each(function(i, block) {
        console.log("Highlighting " + block)
        hljs.highlightBlock(block);
      });
    });


    if (app.$route.params.project) {
      console.log(app.$route.params.project)
      app.$scrollTo('#' + app.$route.params.project)
    }
  }
}
</script>
