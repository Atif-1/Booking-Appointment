var form=document.querySelector('#main');
var list=document.querySelector('#list');
window.addEventListener("DOMContentLoaded",()=>{
	//getting data from crud crud
	axios.get('http:/localhost:8000/user/get-user',).then((resp)=>{
			for(let i=0;i<resp.data.length;i++){
			show(resp.data[i]);
		}
	}).catch((err)=>console.log(err));
})
function handleFormSubmit(e){
	e.preventDefault();
}
function onSubmit(e){
	e.preventDefault();
const n=document.querySelector('#name').value;
let email=document.querySelector('#email').value;
let p=document.querySelector('#phone').value;

const my_obj={
	n,
	email,
	p
};

//serializing
	// const objJSON=JSON.stringify(my_obj);
//inserting in local storage
	// localStorage.setItem(key,objJSON);
	console.log(my_obj);
	axios.post('http://localhost:8000/user/add-user',
	my_obj).then((response) => {
		console.log(response);
	}).catch((err) => {
		console.log('something went wrong');
	});

	}
	function show(obj){
		let li=document.createElement('li');
		let id=obj.id;
		let name=obj.name;
		let email=obj.email;
		let phone=obj.phone;
		li.appendChild(document.createTextNode(id));
		li.appendChild(document.createTextNode(name+' '));
		li.appendChild(document.createTextNode(phone+' '));
		li.appendChild(document.createTextNode(email+' '));
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
			let id=li.firstChild.data;
				list.removeChild(li);
			let ninput=document.querySelector('#name');
			let einput=document.querySelector('#mail');
			let pinput=document.querySelector('#phone');	
			ninput.value=name;
			einput.value=email;
			pinput.value=phone;
			axios.put('http://localhost:8000/user/'+id).then((res)=>{
				}).catch((err)=>console.log('error'));
		}
		delbtn.addEventListener('click',del);
		function del(e){
			e.preventDefault();
			if(confirm('Remove this appointment?')){

				let li=e.target.parentElement;
				//remove data from list
				list.removeChild(li);
				const id=li.firstChild.data;
				axios.delete('http://localhost:8000/user/delete-user/'+id).then((res)=>{
					console.log('successfully deleted');
				}).catch((err)=>console.log('error'));
			}
		}
	
		}
	




