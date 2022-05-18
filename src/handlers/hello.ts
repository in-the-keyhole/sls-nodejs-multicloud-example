import { App, HTTPBindingMiddleware } from '@multicloud/sls-core';
import { AzureModule } from '@multicloud/sls-azure';
import { AwsModule } from '@multicloud/sls-aws';

const app = new App(new AzureModule(), new AwsModule());

const sayHello = app.use([HTTPBindingMiddleware()], async (context) => {
    const { req } = context;
    const name = req?.query?.get("name");

    if (name) {
        context.send(`Hello ${name}`, 200);
    }
    else {
        context.send("Please pass a name on the query string or in the request body", 400);
    }
});

module.exports.sayHello = sayHello;