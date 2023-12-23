var form=document.querySelector('#main');
var list=document.querySelector('#list');
window.addEventListener("DOMContentLoaded",()=>{
	//getting data from crud crud
	axios.get('https://crudcrud.com/api/23b998d2db1d493c910d61be1fd896cc/appData').then((resp)=>{
			for(let i=0;i<resp.data.length;i++){
			show(resp.data[i]);}
	}).catch((err)=>console.log(err));
})

function onSubmit(e){
	e.preventDefault();
let n=document.querySelector('#name').value;
let email=document.querySelector('#mail').value;
let p=document.querySelector('#phone').value;
let tfc=document.querySelector('#tfc').value;
let tf=document.querySelector('#tf').value;
const my_obj=new Object();
my_obj.name=n;
my_obj.email=email;
my_obj.phone=p;
my_obj.dateForCall=tfc;
my_obj.timeForCall=tf;
//adding key
var key=email;
//serializing
	// const objJSON=JSON.stringify(my_obj);
//inserting in local storage
	// localStorage.setItem(key,objJSON);
	axios.post('https://crudcrud.com/api/23b998d2db1d493c910d61be1fd896cc/appData',
	my_obj).then((response) => {
		console.log(response.data);
	}).catch((err) => {
		console.log('something went wrong');
	});

	}
	function show(obj){
		console.log("in show");
		let li=document.createElement('li');
		let name=obj.name;
		let email=obj.email;
		let phone=obj.phone;
		let date=obj.dateForCall;
		let time=obj.timeForCall;
		console.log(name+' '+email+' '+phone+' '+date+' '+time);
		li.appendChild(document.createTextNode(name+' '));
		li.appendChild(document.createTextNode(phone+' '));
		li.appendChild(document.createTextNode(email+' '));
		li.appendChild(document.createTextNode(time+' '));
		li.appendChild(document.createTextNode(date+' '));
		//creating delete button
		var delbtn=document.createElement('button');
		delbtn.className='delete';
		delbtn.appendChild(document.createTextNode('Delete'));
		li.appendChild(delbtn);
		let editbtn=document.createElement('button');
		editbtn.className='eBtn';
		let etxt=document.createTextNode('edit');
		editbtn.appendChild(etxt);
		li.appendChild(editbtn);
		list.appendChild(li);
		editbtn.addEventListener('click',edit);
		function edit(e){
			let li=e.target.parentElement;
				list.removeChild(li);
			let ninput=document.querySelector('#name');
			let einput=document.querySelector('#mail');
			let pinput=document.querySelector('#phone');
			let tfcin=document.querySelector('#tfc');
			let tfin=document.querySelector('#tf');
			ninput.value=name;
			einput.value=email;
			pinput.value=phone;
			tfcin.value=date;
			tfin.value=time;
		}
		delbtn.addEventListener('click',del);
		function del(e){
			e.preventDefault();
			if(confirm('Remove this appointment?')){
				let li=e.target.parentElement;
				//remove data from list
				list.removeChild(li);
				//remove data from local storage
				localStorage.removeItem(key);
			}
		}
	
		}
	




