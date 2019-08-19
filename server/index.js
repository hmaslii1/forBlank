const session = require('smartux-connect');
session.transform.testblank = session.loadTransform('testblank');
require('./client');
require('./transform/testblank');
session.start();