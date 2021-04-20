import { root, text, html } from './controller';
import { log, checkParamLength } from './middlewares';

const router = app => {
    app.get('/', log, root);

    app.get('/text', log, text);
    app.get('/text/:param', log, checkParamLength, text);

    app.get('/html', log, html);
    app.get('/html/:param', log, checkParamLength, html);
}

export default router
