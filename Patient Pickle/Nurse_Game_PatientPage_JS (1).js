function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

// function patient_info(id){
// 	var displayed_info=document.getElementById("pi");
// 	var p_name='gs2_html_test.html'.getElementById('name_'+this.id);
// 	var p_chart='gs2_html_test.html'.getElementById('chart_'_this.id);
// 	displayed_info.'data-content'= p_name+p_chart;
// }

// function name()
// {
// var input = document.getElementById("userInput");
// alert(input);
// }


function generate_question(){
	var question_list =[["Your patient needs have an IV put in, but refuses to sit still, so you:"+"\n"+"a) Forcefully hold them down"+"\n"+"b) Spend time calming them down enough to put it in"+"\n"+"c) Use a sedative to calm them down","b"],["You notice that your patient has gone unusually quiet, and realise they are choking. You: "+"\n"+"a) Immediately perform the heimlich maneuver"+"\n"+"b) Hit their back and hope that they cough up whatever they’re choking on"+"\n"+"c) Start yelling for help and assuring the child they will be okay","a"]];
	var question=question_list[Math.floor(Math.random()*question_list.length)];
	var question_displayed=document.getElementById("questions");
	question_displayed.innerHTML=question[0];

	var button_a=document.getElementById("A");
	var button_b=document.getElementById("B");
	var button_c=document.getElementById("C");
	

	if (question[1]=="a"){
		button_a.title="correct";
		button_b.title="incorrect";
		button_c.title="incorrect";
	}
	else if(question[1]=="b"){
		button_a.title="incorrect";
		button_b.title="correct";
		button_c.title="incorrect";

	}
	else{
		button_a.title="incorrect";
		button_b.title="incorrect";
		button_c.title="correct";
	}
}

function correct_answer(id){
	var button=document.getElementById(id);

	if(button.title=="correct"){
		alert("Correct");
	}
	else{
		alert("Incorrect");
	}
}
