const Sequelize=require('sequelize');

const sequelize=require('../util/database.js');
const User=sequelize.define('user',{
	id:{
		type:Sequelize.INTEGER,
		autoIncrement:true,
		primaryKey:true
	},
	name:Sequelize.STRING,
	email:{
		type:Sequelize.STRING,
		unique:true
	},
	phonenumber:{
		type:Sequelize.STRING,
		unique:true,
	}
});
module.exports=User;