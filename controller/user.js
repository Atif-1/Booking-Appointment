const User=require('../model/User');

exports.addUser=async (req,res,next)=>{
	try{
	const name=req.body.name;
	const email=req.body.email;
	const phonenumber=req.body.phone;
	const data=await User.create({name:name,email:email,phonenumber:phonenumber});
	res.status(201).json({newUserDetail:data});
	}catch(err){res.status(500).json({
		error:err
		
	})}
}

exports.getUser=async(req,res)=>{
	try{
	const users=await User.findAll();
	res.status(200).json({allUsers:users});
	}catch(err){console.log(err)}
}

exports.deleteUser=async(req,res)=>{
	try{
	const userId=req.params.id;
	await User.destroy({where:{id:userId}});
	res.status(200);
	}catch(err){console.log(err)}
}