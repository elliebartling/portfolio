<template>
  <section id="hi-im-ellen" class="">
    <div class="hero">
      <div class="personal-image">
        <img src="dist/images/me_and_gunner.png" />
      </div>
      <div class="text">
        <h2 class="title">Hi, I’m Ellen</h2>
        <h4 class="subtitle">user experience designer + developer</h4>

        <p>I help organizations engage their users and build their brands through <a href="work/at-the-fork">interactive design</a>. I'm a huge geek for all things cognitive science, user research, economics, front-end web tech, design, branding, and dogs.</p>

        <p>Currently, I work with an amazing team at an Austin, TX creative agency called <a target="_blank" href="http://www.emergentorder.com">Emergent Order</a> that’s dedicated to making awesome things, including apps, websites, digital magazines, identity + branding redesign, and any kind of video production under the sun.</p>

        <p class="currently-nerding"><img width="40px" src="dist/images/noun_844674.png"><em>Currently nerding out about: <a href="https://www.amazon.com/Blank-Slate-Modern-Denial-Nature-ebook/dp/B000QCTNIM/ref=sr_1_1?ie=UTF8&qid=1500250928&sr=8-1&keywords=the+blank+slate">The Blank Slate</a></em></p>
      </div>
    </div>
    <div class="why-both">
      <div class="text">
        <h2 class="title">I'm a Designer + a Developer</h2>
        <p>Why design & develop? First: grappling with every part of the process, from market research to CSS transitions, is incredibly rewarding. I love getting to indulge my right-brain and left-brain tendencies &mdash; my favorite roles are those where I can be the “glue” between teams, and hop into whatever part of the process needs a fresh perspective.</p>

        <p>But also, I personally believe that cross-disciplinary experience is crucial to creating truly awesome experiences.</p>

        <p>I'm a huge advocate for being a great generalist: I've found that diving into the deep end of web development makes me a better designer, communicator, and advocate for the user. Understanding how routes work makes me a better information architect; understanding how hierarchy and whitespace affect information recall makes me a better developer. After four years in the industry, I've learned that being able to "speak" designer and developer is a magical secret sauce that makes projects more fun, more profitable, and less stressful.</p>
      </div>
      <div class="stack">
        <h5 class="subtitle">Design Stack</h5>
        <ul class="stack-list">
          <li>Sketch</li>
          <li>Photoshop</li>
          <li>Framer.js</li>
          <li>Invision</li>
        </ul>
        <h5 class="subtitle">Tech Stack</h5>
        <ul class="stack-list">
          <li><b>Javscript</b></li>
          <li>Node</li>
          <li>jQuery</li>
          <li>Vue.js</li>
          <li>Gulp / Webpack</li>
          <li><b>PHP</b></li>
          <li>Wordpress</li>
          <li>Laravel</li>
          <li>Statamic</li>
        </ul>
      </div>

      <div class="stack">
        <h5 class="subtitle">College</h5>
        <ul class="stack-list">
          <li><a href="https://www.ccs.ucsb.edu/what-is-ccs" target="_blank">College of Creative Studies, UCSB</a></li>
          <li><em>B.A. in English Literature</em></li>
          <li><em>B.A. in Evolutionary Biology</em></li>
          <p></p>
          <p>Before I'd really heard of Cognitive Science, I inadvertently hacked my own CogSci curriculum out of evolutionary biology & English literature classes.</p>
        </ul>
        <p></p>
        <h5 class="subtitle">C.V.</h5>
        <ul class="stack-list">
          <li><b>Communications Assistant @ Texas Public Policy Foundation</b></li>
          <!-- <li><em>Texas Public Policy Foundation</em></li> -->
          <p>I started my career at a non-profit, public policy organization where I designed graphics, documents & posters, crafted press releases, tracked media hits, wrote scripts, shot interviews, recorded podcasts, edited in Final Cut, and managed relationships with 8,000+ followers on social media. I also project-managed the internal side of a massive, award-winning website redesign, and founded the in-house analytics program (to this day, the database TPPF uses to track media metrics is still colloquially called "Holodeck" &mdash; for which I proudly claim credit <img width="20px" src="dist/images/noun_54427.png"/>).</p>
          <li><b>UX + UI Designer @ Emergent Order</b></li>
          <!-- <li><em>Emergent Order</em></li> -->
          <p>I started at Emergent Order as an assistant in video production, but quickly found my niche designing, building & managing interactive digital experiences. At EO, I've led design processes on Virtual Reality apps, massive content site overhauls, organizational re-branding projects, and marketing campaigns.</p>
        </ul>
        <p><button href="" class="btn btn-primary"><i class="fa fa-cloud-download"></i>&nbsp;&nbsp;Download Resume</button></p>
      </div>
      <!-- <div class="bg-image">
        <img src="dist/images/noun_alien_900180.png">
      </div> -->
    </div>
    <div class="cool-thing-1">
      <div class="image-with-caption">
        <img src="dist/images/screen-5.jpg" />
        <div class="caption">
          <p>One of my favorite recent design projects: a 360-degree virtual reality app to promote awareness of farm animal living conditions, in tandem with the release of a feature documentary. See the final version at <a target="_blank" href="http://attheforkfilm.com/app">At the Fork Film</a>.</p>
        </div>
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
  }
}
</script>
