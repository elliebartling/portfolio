# I’m CMS-less and it feels so right.
* front-end dev
* productivity

When it comes to Flat File CMSes vs. Static Site Generators vs. Wordpress vs. Squarespace vs. etc etc etc, I’m something of a moderate. I have an admittedly huge crush on the [Laravel](https://laravel.com/) ecosystem 😍, but honestly, I also love learning new things, and I’m always going to consider whatever’s best for the job. Every project has a different venn diagram of user needs, client needs, developer needs, and deployment complexities.

When I decided to (finally) focus on making my own website, I knew I wanted to publish it on GitHub Pages (who doesn’t love free hosting, right?), but that… was about it. I knew I wanted to manage a fair amount of content, but Wordpress seemed like overkill for a few case studies and a blog. [Statamic](https://statamic.com/) is my go-to for “Wordpress-light”, but it requires PHP (not available via GitHub Pages), and I’d just as soon write in my own favorite markdown editor.

![](07-16-cms-less-and-it-feels-so-right/screen-1.png)
*If you find yourself writing a lot of markdown, and you aren’t using [Bear App](http://www.bear-writer.com/), you’re missing out.*

Lots of developers rave about Jekyll, and it comes with out of the box support from GitHub Pages, so I started there. I wasn’t jazzed about the number of plugins I needed in order to have multiple different kinds of “posts,” and ultimately, I found myself missing my webpack based workflow for building assets, and ended up trying a few other frameworks.

![](07-16-cms-less-and-it-feels-so-right/screen-2.png)
*And by few, I guess I mean 7.* 😬

Middleman was by far my favorite of the static-site generators — ruby-based like Jekyll, but way more flexible with its asset pipeline. But as I started to yearn for Vue’s transitions, I realized that Middleman, too, was kind of overkill. Eventually, I realized that all I really wanted was to import some markdown files into a handful of Vue components.



