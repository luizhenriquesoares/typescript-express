/* dependencies-------------------------------------------------------------- */
import 'reflect-metadata';
import * as dotenv from 'dotenv';

import { referenceDataIoCModule } from './Insfrastructure/CrossCutting/DI/SimpleInjector';
import { bootstrap } from './Insfrastructure/CrossCutting/Bootstrapping/Bootstrap';
import { container } from './Insfrastructure/CrossCutting/DI/Container';

/* ENV ---------------------------------------------------------------------- */
dotenv.load({ path: '.env' });
const port: number = parseInt(process.env.PORT, 0);

import './Controllers/RestaurantController';

/* bootstrap ---------------------------------------------------------------- */
async function runApp() {
    const app = await bootstrap(
        container,
        port,
        null,
        null,
        referenceDataIoCModule,
    );
    return app;
}

(async () => {
    await runApp();
})();

export { runApp };

// TODO IMPLEMENT CONNECT DATABASE

// const connect = (): Promise<void> => {
//     (mongoose as any).Promise = bluebird;
//     return mongoose.connect(process.env.MONGODB_URI || process.env.MONGOLAB_URI, { useNewUrlParser: true }).then(
//         () => {console.log('MongoDB Connection UP'); },
//       ).catch(err => {
//         console.log('MongoDB connection error. Please make sure MongoDB is running. ' + err);
//     });
// };

// // tslint:disable-next-line:no-shadowed-variable
// const listen = (connect: any): void => {
//     const container = new Container();
//     container.load(referenceDataIoCModule);
//     const server = new InversifyExpressServer(container);

//     server.setConfig((App) => {
//         App.use(bodyParser.urlencoded({ extended: true }));
//         App.use(bodyParser.json());
//       });
//     const runtime: any = server.build();
//     runtime.listen(port, () => {
//         typeof connect === 'function' ? connect() : null;
//         console.log('%s Express server listening on port %d in %s mode.', chalk.default.bgGreen('✓'), port, app.get('env'));
//     });
// };

// listen(connect);