const bot = require('botkit-fb-bootstrap');

const storageCollections = ['users'];
const skills = require('./skills');
const threadSettings = require('./components/thread_settings.js');

bot.init(storageCollections, [], skills, threadSettings);
