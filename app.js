const express=require('express');

const bodyParser=require('body-parser');

const sequelize=require('./util/database');
 
var cors=require('cors');

const app=express();

const userRoutes=require('./routes/user');

app.use(bodyParser.urlencoded({extended:false}));

app.use(cors());

app.use('/user',userRoutes);

sequelize.sync().then(() => {
	app.listen(8000)
}).catch((err) => {
	console.log(err);
});