# Segment

## Overview

Segment is powered by [Sails](http://sailsjs.org/), a MVC framework for Node.js, and MongoDB.

## Development

1. Install dependencies: `npm install`
2. Start the application: `npm start`

## Deployment

Segment is deployed to an instance on Heroku. If this is your first time deploying the app, follow steps 1-7. Otherwise, just skip to step 8. For more, see the [Heroku Documentation on Node.js applications](https://devcenter.heroku.com/articles/getting-started-with-nodejs#introduction).

1. Create new app: `heroku create segment`
2. Deploy the app: `git push heroku master`
3. Insure that at least one instance is running: `heroku ps:scale web=1`

Other helpful tasks: 

- View logs: `heroku logs --tail`
- Open the application: `heroku open`

The command that Heroku executes to start the application is defined in the procfile. The procfile declares a single process type, `web`, and the command needed to run it. For more, see the [Heroku documentation](https://devcenter.heroku.com/articles/getting-started-with-nodejs#define-a-procfile).

### Database 

While in development, a local database is used.

### Tools

- [WebPack](http://webpack.github.io/): JavaScript and CSS module bundler.
- [gulp](http://gulpjs.com/): Streaming build system and workflow automation.

---
Copyright 2015 Segment. All rights reserved.
