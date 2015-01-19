# Segment

## Overview

Segment is powered by [Sails](http://sailsjs.org/), a MVC framework for Node.js, and MongoDB.

## Development

1. Install dependencies: `npm install`
2. Start the application: `npm start`

### Database

While in development, a local database is used.

### Tools

- [WebPack](http://webpack.github.io/): JavaScript and CSS module bundler.
- [gulp](http://gulpjs.com/): Streaming build system and workflow automation.

### Features

> Developing software often involves teams of people working together. As the team grows from one, to two, to multiple people, challenges begin to creep in and rob the organization of creative flow. It becomes harder to maintain a continuous culture across different people. Engineering groups are especially prone to these challenges as code is routinely shared between many people throughout the organization. Code reviews help spread knowledge and best practices around code across the team.  In this article we’ll take a look at why code reviews are important, and how to optimize the practice.
> – [Every Team Needs Kick Ass Code Reviews](http://blogs.atlassian.com/2014/03/every-team-needs-kick-ass-code-reviews/)

Each new feature should be created on a separate branch and merged into master after a code review. Here is how we add new features at Segment:

1. Create new branch: `git branch feature-name`
2. Checkout the branch: `git checkout feature-name`
3. Add feature.
4. Add unit test(s).
5. Push to GitHub: `git push`
6. Create a pull request and ask for code review.
7. After the code review, the reviewer merges the branch into master.
8. Bump version number.

### Versioning

Segment uses [Semantic Versioning](http://semver.org/). Version tags can be created [on GitHub](https://github.com/pburtchaell/segment.social/releases/new).

Given a version number MAJOR.MINOR.PATCH, increment the:

1. MAJOR version when you make incompatible API changes,
2. MINOR version when you add functionality in a backwards-compatible manner, and
3. PATCH version when you make backwards-compatible bug fixes.

## Deployment

Segment is deployed to an instance on Heroku, an application platform. If this is your first time deploying the app, follow steps 1-6. Otherwise, just skip to step 4. For more, see the [Heroku Documentation on Node.js applications](https://devcenter.heroku.com/articles/getting-started-with-nodejs#introduction).

1. Create new app: `heroku create segment`
2. Add Redis: `heroku addons:add redistogo`
3. Add MongoDB: `heroku addons:add mongolab`
4. Deploy the app: `git push heroku master`
5. Set the environment to production: `heroku config:set NODE_ENV=production`
6. Insure that at least one instance is running: `heroku ps:scale web=1`

Other helpful tasks:

- View application logs: `heroku logs --tail`
- Open the application: `heroku open`
- View application configuration: `heroku config`

Addons: 

- [Redis to Go](https://addons.heroku.com/redistogo)
- [MongoLab](https://addons.heroku.com/mongolab)
- [New Relic APM](https://addons.heroku.com/newrelic)

The command that Heroku executes to start the application is defined in the procfile. The procfile declares a single process type, `web`, and the command needed to run it. For more, see the [Heroku documentation](https://devcenter.heroku.com/articles/getting-started-with-nodejs#define-a-procfile).

---
Copyright 2015 Segment. All rights reserved.
