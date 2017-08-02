import Vue from 'vue'
import VueRouter from 'vue-router'

/*
  * Add filters for Vue
 */

var marked = require('marked')
Vue.filter('marked', marked)


/*
  * To Title Case 2.1 – http://individed.com/code/to-title-case/
  * Copyright © 2008–2013 David Gouch. Licensed under the MIT License.
 */

String.prototype.toTitleCase = function(){
  var smallWords = /^(a|an|and|as|at|but|by|en|for|if|in|nor|of|on|or|per|the|to|vs?\.?|via)$/i;

  return this.replace(/[A-Za-z0-9\u00C0-\u00FF]+[^\s-]*/g, function(match, index, title){
    if (index > 0 && index + match.length !== title.length &&
      match.search(smallWords) > -1 && title.charAt(index - 2) !== ":" &&
      (title.charAt(index + match.length) !== '-' || title.charAt(index - 1) === '-') &&
      title.charAt(index - 1).search(/[^\s-]/) < 0) {
      return match.toLowerCase();
    }

    if (match.substr(1).search(/[A-Z]|\../) > -1) {
      return match;
    }

    return match.charAt(0).toUpperCase() + match.substr(1);
  });
};

var S = require('string')
Vue.filter('humanize', function (value) {
  return S(value).humanize().s.toTitleCase()
})

var moment = require('moment')
Vue.filter('date', function (value) {
  var pretty = ''

  if (moment(value).isAfter(moment().subtract('days', 7))) {
    pretty = moment(value).fromNow()
  } else {
    pretty = moment(value).format('MMM DD, YYYY')
  }

  return pretty
})



/*
  * Add plugins
 */


var VueScrollTo = require('vue-scrollto')
Vue.use(VueScrollTo)

var ScrollActive = require('vue-scrollactive')
Vue.use(ScrollActive)

Vue.use(VueRouter)

// 1. Define route components.
// These can be imported from other files
const Hi = require('./pages/hi.vue')
const Work = require('./pages/work.vue')
const WorkSingle = require('./pages/work-single.vue')
const Blog = require('./pages/blog.vue')


const WorkSidebar = require('./pages/work-sidebar.vue')
Vue.component('work-sidebar', WorkSidebar)

// 2. Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// `Vue.extend()`, or just a component options object.
// We'll talk about nested routes later.
const routes = [
  { path: '/', component: Hi },
  { path: '/hello', component: Hi },
  { path: '/work', component: Work },
  { path: '/work/:project', component: WorkSingle },
  { path: '/blog', component: Blog }
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  routes // short for `routes: routes`
})

// 4. Create and mount the root instance.
// Make sure to inject the router with the router option to make the
// whole app router-aware.
const app = new Vue({
  router
}).$mount('#app')

// Now the app has started!
