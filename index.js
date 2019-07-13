var sub = document.getElementById('submit');
sub.addEventListener('click',function(){
	getting_details(details)
})

function getting_details(disp){
	var xhr = new XMLHttpRequest();
	xhr.open('GET',' https://raw.githubusercontent.com/masai-school/assignments-data/master/data/dummy/json/student_marks.json');
	xhr.send();
	xhr.onload =function(){
		var result = JSON.parse(xhr.response);
		details(result,display)
		
	}
}
function details(input,dis){
	var year = document.getElementById('year').value;
	var mark = document.getElementById('maks').value;
	var mark_range= document.getElementById('maks_range').value;
	var arr =[];
	var gender = document.getElementById('gender').value;
	var sort = document.getElementById('sort').value;
	for(var i=0;i<input.length;i++){
		if(year==''){
			if(mark==''&&mark_range==0){
				arr.push(input[i])
			}
			else if(mark==''&&mark_range!=0){
				var p = Number(mark_range)-10;
				var q = Number(mark_range)
				if(input[i].marks>=p&&input[i].marks<=q){
					arr.push(input[i])
				}
			}
			else{
				var p = Number(mark);
				if(input[i].marks==p){
					arr.push(input[i])
				}
			}
		}
		else{
			if(mark==''&&mark_range==0&&input[i].year==year){
				arr.push(input[i])
			}
			else if(mark==''&&mark_range!=0&&input[i].year==year){
				var p = Number(mark_range)-10;
				var q = Number(mark_range)
				if(input[i].marks>=p&&input[i].marks<=q){
					arr.push(input[i])
				}
			}
			else{
				var p = Number(mark);
				if(input[i].marks==p&&input[i].year==year){
					arr.push(input[i])
				}
			}
		}
	}


	var arr1=[];
	if(gender!=0){
		for(var i=0;i<arr.length;i++){
			if(arr[i].gender==gender){
				arr1.push(arr[i])
			}
		}
	}
	else{
		for(var i=0;i<arr.length;i++){
			arr1.push(arr[i])
		}
	}


	if(sort!=0){
		if(sort==1){
			var s = selectionSortMarks(arr1,'inc');
			
			display(s)
		}
		else if(sort==2){
			var s = selectionSortMarks(arr1,'dec');
			display(s)
			console.log(s)
		}
		else if(sort==3){
			var s = selectionSortYear(arr1,'inc');
			display(s)
			console.log(s)
		}
		else{
			var s = selectionSortYear(arr1,'dec');
			display(s)
			console.log(s)
		}
	}
	else{
		display(arr1)
	}
}


function display(input1){
	var main = document.getElementById('enter')
	//var Div = document.createElement('div');
	main.innerHTML ='';
	//Div.setAttribute('class','entries');
	//Div.innerHTML ='<div>Name</div><div>Year</div><div>Gender</div><div>Marks</div>';
	//main.appendChild(Div)
	for(var i=0;i<input1.length;i++){
		var diiv = document.createElement('div');
		diiv.setAttribute('class','entries');
		diiv.innerHTML='<div>Name- '+input1[i].first_name+' '+input1[i].last_name+'</div><div>Batch- '+input1[i].year+'</div><div>Gender- '+input1[i].gender+'</div><div>Marks- '+input1[i].marks+'</div>';
		main.appendChild(diiv)
	}
}



function selectionSortMarks(ar,para){
  
		 if(para=='dec'){
		 	for(var i=0;i<ar.length;i++){
		    
		    
		    for(var n=i;n<ar.length;n++){
		      
		      if(ar[i].marks<ar[n].marks){
		        var temp =ar[i];
		        ar[i]=ar[n];
		        ar[n]=temp;
		        
		        
		      }
		    }
		  }  
		  
		  return ar
		 }
		 else{
		 	for(var i=0;i<ar.length;i++){
		    
		    
		    for(var n=i;n<ar.length;n++){
		      
		      if(ar[i].marks>ar[n].marks){
		        var temp =ar[i];
		        ar[i]=ar[n];
		        ar[n]=temp;
		        
		        
		      }
		    }
		  }  
		  
		  return ar
		 }


  
  
}
function selectionSortYear(ar,para){
  
			if(para=='dec'){
					for(var i=0;i<ar.length;i++){
				    
				    
				    for(var n=i;n<ar.length;n++){
				      
				      if(ar[i].year<ar[n].year){
				        var temp =ar[i];
				        ar[i]=ar[n];
				        ar[n]=temp;
				        
				        
				      }
				    }
				  }  
				  
				  return ar
				}
			else{
				for(var i=0;i<ar.length;i++){
			    
			    
			    for(var n=i;n<ar.length;n++){
			      
			      if(ar[i].year>ar[n].year){
			        var temp =ar[i];
			        ar[i]=ar[n];
			        ar[n]=temp;
			        
			        
			      }
			    }
			  }  
			  
			  return ar
			}	


  
  
}