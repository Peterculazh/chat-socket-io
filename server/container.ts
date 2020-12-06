import * as awilix from 'awilix';
import ExpressServer from './server';
import config from '../config';

export interface IServerContainer {
    config: any;
    server: ExpressServer;
}

const container = awilix.createContainer<IServerContainer>({
    injectionMode: awilix.InjectionMode.PROXY,
});

container.register({
    config: awilix.asValue(config),
    server: awilix.asClass(ExpressServer).singleton(),
});


export default container;