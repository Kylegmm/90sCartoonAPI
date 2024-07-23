const express = require('express');
const methodOverride = require('method-override');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());  // Make sure JSON bodies are parsed
app.use(methodOverride('_method'));
app.set('view engine', 'ejs');

const uiRoutes = require('./routes/ui');
const apiRoutes = require('./routes/api');

app.use('/', uiRoutes);
app.use('/api', apiRoutes);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
