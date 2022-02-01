import wixData from 'wix-data';
$w.onReady(function () {
	// Write your JavaScript here
let fname= $w('#input1')
let lname=$w('#input2')
let email=$w('#input3')
let message = $w('#textBox1')
let btn=$w('#button1')

btn.onClick((e)=>{
	if(fname.value == "")
{
console.log("First Name field empty")
fname.focus()
}

else if(lname.value == "")
{
console.log("Last Name field empty")
lname.focus()
}
else if(email.value == "")
{
console.log("Email field empty")
email.focus()
}
else if(message.value == "")
{
console.log("Address field empty")
message.focus()
}
else{
	let toInsert={
		fname:fname.value,
		lname:lname.value,
		email:email.value,
		message: message.value
	}
	wixData.insert("register", toInsert)
	.then( (results) => {
		console.log("Data inserted successfully") //see item below
	} )
	.catch( (err) => {
		console.log("Failed " + err)
	} );
}
})
	
});