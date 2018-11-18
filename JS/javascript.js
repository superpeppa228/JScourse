
let empty ='<div class="empty"></div>';
let white ='<div class="white"></div>';
let black ='<div class="black"></div>';
let board = document.querySelector('.board');
let letters = ['','A','B','C','D','E','F','G','H'];
let figures = ['','<div class="black">Л</div>',
'<div class="white">К</div>',
'<div class="black">С</div>',
'<div class="white">Ф</div>',
'<div class="black">К</div>',
'<div class="white">С</div>',
'<div class="black">К</div>',
'<div class="white">Л</div>',
];

let figuresfront = ['','<div class="black">П</div>',
'<div class="white">П</div>',
'<div class="black">П</div>',
'<div class="white">П</div>',
'<div class="black">П</div>',
'<div class="white">П</div>',
'<div class="black">П</div>',
'<div class="white">П</div>',
];

var table = document.createElement('table');
for (i=0;i<9;i++){
	var newTr = table.insertRow(i);
	for (j=0;j<9;j++){
		var newTd = newTr.insertCell(j);
		if (i == 0 && j != 0) {
			newTd.innerHTML = letters[j]; 	
		} else if (i == 0 && j == 0){
			newTd.innerHTML = empty; 
		} else if (i != 0 && j ==0){
			newTd.innerHTML = 9 - i;
		} else if ((i!=1 && i!=8 && i!=7 && i!=2) && (i%2==0 && j%2!=0 || i%2!=0 && j%2==0)){
			newTd.innerHTML = black;
		} else if (i==8 && j!=0){
			newTd.innerHTML = figures[j];
		}else if (i==1 && j!=0){
			newTd.innerHTML = figures[9-j];
		}else if (i==2 && j!=0){
			newTd.innerHTML = figuresfront[j]
		}else if (i==7 && j!=0){
			newTd.innerHTML = figuresfront[9-j];
		}else{
			newTd.innerHTML = white;
		}
	}
}

board.append(table);