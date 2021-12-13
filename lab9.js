function insert(num){
	num.style='black';
	if ((num == '+') || (num == '-') || (num == '*') || (num == '/')){
		document.form.textView.value = document.form.textView.value + " " + num + " ";
		document.form.textView.style.color='gray';
	}
	else{
		document.form.textView.value = document.form.textView.value + num;	
	}	
};	
function clean(){
	document.form.textView.value = "";
};
function back(){
	var exp = document.form.textView.value;
	if (exp.slice(-1) == ' '){
		document.form.textView.value = exp.substring(0,exp.length-3);
	}
	else{
		document.form.textView.value = exp.substring(0,exp.length-1);
	}	
};
function equal(){
	var exp = document.form.textView.value;
	if(exp){
		document.form.textView.value = eval(exp);
		document.form.textView.style.color='black';
	}
};