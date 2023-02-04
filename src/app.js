const express = require('express');
const { errorHandler } = require('./middlewares');
const categoryRoutes = require('./routes/CategoryRoutes');
const postRouter = require('./routes/PostRoutes');
const userRouter = require('./routes/UserRoutes');

// ...

const app = express();

app.use(express.json());

app.use(userRouter);
app.use(categoryRoutes);
app.use(postRouter);
app.use(errorHandler);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
