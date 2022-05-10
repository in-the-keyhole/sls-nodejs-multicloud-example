const { App, HTTPBindingMiddleware } = require("@multicloud/sls-core");
const { AzureModule } = require("@multicloud/sls-azure");
const { AwsModule } = require("@multicloud/sls-aws");
const app = new App(new AzureModule(), new AwsModule());

module.exports.hello = app.use([HTTPBindingMiddleware()], async (context) => {
    const { req } = context;
    const name = req.query.get("name");

    if (name) {
        context.send(`Hello ${name}`, 200);
    }
    else {
        context.send("Please pass a name on the query string or in the request body", 400);
    }
});

module.exports.goodbye = app.use([HTTPBindingMiddleware()], async (context) => {
    const { req } = context;
    const name = req.query.get("name");

    if (name) {
        context.send(`Goodbye ${name}`, 200);
    }
    else {
        context.send("Please pass a name on the query string or in the request body", 400);
    }
});

