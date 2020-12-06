import container from "./container";
import ExpressServer from "./server";

let server = container.resolve<ExpressServer>('server');

server.setContainer(container); // TODO: Move to initializing of server in future
server.initialize();