# Segment

## Overview

Segment is powered by [Sails](http://sailsjs.org/), a MVC framework for Node.js, and MongoDB.

## Development

1. Install dependencies: `npm install`
2. Start the application: `npm start` or `npm run-script watch`

### Databases

Segment uses MongoDB for models and Redis for session and sockets stores.

When Sails is run locally, it will connect to local Redis and MongoDB databases using the default settings. Should you have any issues, you can create and edit `config/local.js` to override the default config and use your own. These settings take precedence over all other config files, including those in the `config/env` subfolder. 

Here is an example file that uses memory for sockets, memory for sessions, and a MongoLab server for the models.

```
module.exports = {
  connections: {
    mongodb: {
      host: 'ds029541.mongolab.com',
      port: 29541,
      user: 'foo',
      password: 'bar',
      database: 'baz'
    }
  },
  session: {
    adapter: 'memory'
  },
  sockets: {
    adapter: 'memory'
  }
};
```

For more, see the Sails.js [configuration documentation](http://sailsjs.org/#/documentation/reference/sails.config/sails.config.local.html).

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

## Further Documentation

### Redis

Node.js (and consequently Sails.js) apps scale horizontally. It's a powerful, efficient approach, but it involves a tiny bit of planning. At scale, you'll want to be able to copy your app onto multiple Sails.js servers and throw them behind a load balancer.

One of the big challenges of scaling an application is that these sorts of clustered deployments cannot share memory, since they are on physically different machines. On top of that, there is no guarantee that a user will "stick" with the same server between requests (whether HTTP or sockets), since the load balancer will route each request to the Sails server with the most available resources. However that means that  all room/pubsub/socket processing and shared memory has to be offloaded to a shared, remote messaging queue (usually Redis).Luckily, Socket.io (and consequently Sails.js) apps support Redis for sockets by default. 

It is worth mentioning that,  when `NODE_ENV=production`, config variables are used for the Redis connection values. If these config variables are not available, Sails will try to connect to redis database 0 running on localhost via port 6379. The default password (none) will be used.

The Redis connections are configured in `config/sockets.js` and `config/session.js`. [See options for the Redis adapter](https://github.com/visionmedia/connect-redis) if further configuration is needed.

### REST API's

```
# Backbone Conventions
GET   :    /:controller                 => findAll()
GET   :    /:controller/read/:id        => find(id)
POST  :    /:controller/create          => create()
POST  :    /:controller/create/:id      => create(id)
PUT   :    /:controller/update/:id      => update(id)
DELETE:    /:controller/destroy/:id     => destroy(id)

# You can also explicitly state the action
GET   :    /:controller/find            => findAll()
GET   :    /:controller/find/:id        => find(id)
POST  :    /:controller/create          => create(id)
PUT   :    /:controller/update/:id      => update(id)
DELETE:    /:controller/destroy/:id     => destroy(id)
```

---
Copyright 2015 Segment. All rights reserved.
