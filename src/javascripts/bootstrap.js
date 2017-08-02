import Vue from 'vue'

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
