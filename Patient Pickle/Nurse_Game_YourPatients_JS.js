
//------Code for "classes"----------//
var myname=["Sam", "Gale", "Riley", "Jordan", "Cam", "Dani", "Charlie", "Dakota", "Skylar", "Frankie", "Jessie", "Sage", "Quinn", "Peyton", "Avery", "Reese", "Taylor", "Morgan", "Ryan", "Carter"];

var gender=["Female", "Male", "Other"];

var age=[-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99];

var bloodtype=["A+", "A-", "B+", "B-", "AB+", "AB-"," O"];

var meds=["+Adderal", "Amoxicillin",  "Coumadin"];

var patient_list={};

function Make_Patient(){
	var patient_age=age[Math.floor(Math.random()*age.length)];
	var count = 1;
	var patient_name=myname[Math.floor(Math.random()*myname.length)]+String(count);
	if (patient_name in patient_list){
		while(patient_name in patient_list){
			count ++;
			patient_name=myname[Math.floor(Math.random()*myname.length)]+String(count);
		}
	}
	
    if (patient_age== -1 || patient_age===0){
		var premature=[0,0,0,0,0,0,0,0,0,1];
		var breech=[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
		patient_list[patient_name]=["Neo-natal",String(gender[Math.floor(Math.random()*gender.length)]),patient_age,String(bloodtype[Math.floor(Math.random()*bloodtype.length)]),String(meds[Math.floor(Math.random()*meds.length)]),String(premature[Math.floor(Math.random()*premature.length)]),String(breech[Math.floor(Math.random()*breech.length)])];
	}
		
	else if (patient_age> 0 && patient_age<=2){
		patient_list[patient_name]=["Infant",String(gender[Math.floor(Math.random()*gender.length)]),patient_age,String(bloodtype[Math.floor(Math.random()*bloodtype.length)]),String(meds[Math.floor(Math.random()*meds.length)])];
	}
	else if(patient_age>2 && patient_age<13){
		patient_list[patient_name]=["Child",String(gender[Math.floor(Math.random()*gender.length)]),patient_age,String(bloodtype[Math.floor(Math.random()*bloodtype.length)]),String(meds[Math.floor(Math.random()*meds.length)])];
	}
		
	else if (patient_age>=13 && patient_age<18){
	patient_list[patient_name]=["Adolescent",String(gender[Math.floor(Math.random()*gender.length)]),patient_age,String(bloodtype[Math.floor(Math.random()*bloodtype.length)]),String(meds[Math.floor(Math.random()*meds.length)])];
	}
		
	else if (patient_age>=18 && patient_age<60){
	patient_list[patient_name]=["Adult",String(gender[Math.floor(Math.random()*gender.length)]),patient_age,String(bloodtype[Math.floor(Math.random()*bloodtype.length)]),String(meds[Math.floor(Math.random()*meds.length)])];
	}
	else{
		patient_list[patient_name]=["Senior",String(gender[Math.floor(Math.random()*gender.length)]),patient_age,String(bloodtype[Math.floor(Math.random()*bloodtype.length)]),String(meds[Math.floor(Math.random()*meds.length)])];
	}
	
	return [patient_name, patient_list[patient_name]];
}

function Add_New(name_id,chart_id){
	var patient=Make_Patient();
	var modal_name=document.getElementById(name_id);
	var modal_chart=document.getElementById(chart_id);
	if(String(modal_name.innerHTML)=="N/A" && String(modal_chart.innerHTML)=="No Chart"){
		// modal_name.innerHTML="Name: "+patient[0];
		// var chart_content=""
		// if(patient[1][0]=="Neo-natal"){
		// 	for(i in patient[1]){
				
		// }
		// }
		// else if(patient[1][0]=="Infant"){
		// 	for(i in patient[1]){

		// }
		// }
		// else if(patient[1][0]=="Adolescent"){
		// 	for(i in patient[1]){

		// }
		// }
		// else if(patient[1][0]=="Adult"){
		// 	for(i in patient[1]){

		// }
		// }
		// else{
		// 	for(i in patient[1]){

		// }
		// }
		modal_name.innerHTML=patient[0];
		modal_chart.innerHTML=patient[1];
	}
}


function Delete_Patient(name_id,chart_id){
	var modal_name=document.getElementById(name_id);
	var modal_chart=document.getElementById(chart_id);
	if(String(modal_name.innerHTML)!="N/A" && String(modal_chart.innerHTML)!="No Chart"){
		delete patient_list[modal_name];
		modal_name.innerHTML="N/A";
		modal_chart.innerHTML="No Chart";
	}
}

function clear_all(){
	patient_list={};
	var modal_list=[['name_1','chart_1'],['name_2','chart_2'],['name_3','chart_3']];
	for (i in modal_list){
		var modal_name=document.getElementById(i[0]);
		var modal_chart=document.getElementById(i[1]);
		modal_name.innerHTML="N/A";
		modal_chart.innerHTML="No Chart";
		
	}
}

// FOR THE NAV BAR

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}