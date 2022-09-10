const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');

const homeStartContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

const contactContent = 'Aenean felis dolor, rutrum sed lorem eu, imperdiet molestie leo. Praesent eget dolor vel purus ullamcorper ultricies. Aenean varius tincidunt cursus. Pellentesque risus tellus, efficitur sit amet mauris id, scelerisque gravida quam. Nunc vitae ex erat. Nulla fermentum, nulla sit amet congue sodales, erat sem sagittis ipsum, et sagittis lorem leo suscipit diam. Cras efficitur libero gravida lectus semper accumsan.'

const aboutContent = 'Duis varius mattis leo, non dictum lectus gravida eu. Ut eget suscipit lorem. Praesent vulputate erat non posuere dictum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'




app.listen(3000,()=> {
    console.log('localhost:3000');
});