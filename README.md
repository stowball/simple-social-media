# Simple Social Media

This is a simple, mock-social media client-side application written in [AngularJS](https://angularjs.org/).

It allows you to read all of your friend's updates as an ordered timeline, view each friend's posts individually and post your own status updates.

## Getting started

1. Clone or download this repo
2. `cd simple-social-media`
3. `npm install`
4. `npm start`
5. Browse to http://127.0.0.1:8000/

No build process is currently setup, so vanilla CSS (without vendor prefixes) is used and there is no minification and concatenation of assets - but performance is incredibly important to me!

Also, no unit tests have been written, but they should be easy to add.

## Dependencies

* angular: ^1.4.8
* angular-route: ^1.4.8
* lodash: ^3.10.1
* moment: ^2.10.6

## The code

### CSS

All CSS resides in `/css/`

* `all.css`: Simple BEM-style CSS, ordered by modules.

### Data

All mock data resides in `/data/`

* `friends.json`: An array containing friend objects, each with a unique `id` and a `name`
* `posts/[id].json`: File name matches a friend's `id`. An array contain status objects, each with a `date` in `'YYYY-MM-DDTHH:mm:ss'` format and a `text` property.

### JavaScript

All JavaScript resides in `/js/`

* `app.js`: Initialises the app.
* `controllers.js`: 5 controllers for handing posting a status update, retrieving your friends list, displaying your posts, displaying a single friend's posts and displaying the entire feed.
* `directives.js`: 2 directives for re-usable components: the friends list and an individual post.
* `filters.js`: An `ago` filters that converts dates in to a friendly format.
* `routes.js`: Defines the routes the main feed, your feed and an individual friend's feeds.
* `services.js`: 2 services: 1 to fetch the friends list and 1 to clean up and sort the feed in chronological order.

### Partials

All partials reside in `/partials/`

* `feed.html`: The update status form and the main feed.
* `friends.html`: Your friends list.
* `my-feed.html`: Your posts.
* `post.html`: An individual post.
* `single-feed.html`: A friend's posts.

### The app

* `index.html`: Loads the relevant JavaScript files and initialises the app.
