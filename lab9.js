function insert(num){
	if ((num == '+') || (num == '-') || (num == '*') || (num == '/')){
		document.form.textView.value = document.form.textView.value + " " + num + " ";
		document.form.textView.style.color='gray';
	}
	else{
		document.form.textView.value = document.form.textView.value + num;
		document.form.textView.style.color='black';
	}	
};	
function clean(){
	document.form.textView.value = "";
	document.form.textView.style.color='black';
};
function back(){
	var exp = document.form.textView.value;
	document.form.textView.value = exp.substring(0,exp.length-1);
	document.form.textView.style.color='black';

};
function equal(){
	var exp = document.form.textView.value;
	if(exp){
		document.form.textView.value = eval(exp);
	}
	document.form.textView.style.color='black';
};