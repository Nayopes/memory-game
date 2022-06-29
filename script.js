let arr = 'ԱԲԳԴԵԶԷԸԹԺԻԼԽԾԿՀՁՂՃՄՅՆՇՈՉՊՋՌՍՎՏՐՑՒՓՔՕՖ';
let alf = arr.split('');
let temp = 0 ;

let questions =
	[
		{
			'Q': 'Համատեղ քանի՞ զավակ ունեք (ճիշտն ասեք): ',
			'A': 'ԵՐԵՔ'
		},
		{
			'Q': 'Ինչի՞ հավաքածուից էր մի կտոր պակասում, որը գտնելու համար Սերոժը Նառային առավ ողջ տեսականին: ',
			'A': 'ԾԱՄՈՆ'
		},
		{
			'Q': 'Ո՞վ էր Սերոժի ու Նառայի սուրհանդակը, երբ Սերոժը ծառայում էր բանակում:',
			'A': 'ՄԱՐՏԻՐՈՍՅԱՆ ԱՐՄԵՆ'
		},
		{
			'Q': 'Ո՞վ Նառային «խփեց թևի տակ» ու փախցրեց տանից Սերոժի համար (նշեք անունը):',
			'A': 'ԱՆԴՈՆ'
		},
		{
			'Q': 'Ի՞նչ կլիներ Սերոժի ու Նառայի առաջնեկի անունը, եթե չլիներ այժմյանը: ',
			'A': 'ՅՈՒՂԱԲԵՐ'
		},
		{
			'Q': 'Ո՞վ «հանցավորներին» խնձոր բաժանելով անցավ շուկայից դեպի տուն ողջ ճանապարհը, երբ տղաները զբաղված էին աղջիկ փախցնելու կարևորագույն առաջադրանքով!',
			'A': 'ԱԲԳ'
		},
		{
			'Q': 'Ո՞ր ֆիլմի «մենակ-մենակ» դիտման համար մինչ այսօր Սերոժին ու Նառային «չի ներում» իրենց երկրորդ դուստրը: ',
			'A': 'ԲՈՒՐԻԿ ՏԱՏԸ'
		},
		{
			'Q': 'Ո՞վ է առավել խանդոտ մյուսի նկատմամբ (դե լավ, մի հարցն էլ սուպեր հեշտ թող լինի):',
			'A': 'ՄԻԱՅՆ ՍԵՐՈԺԸ'
		}
	];




alfaviteEng();
quest_slide()
function alfaviteEng() {
	$('body').append('<div id="alfavite"></div>')
	for (let i = 0; i < alf.length; i++) {
		var alphabetLetters = $('<button></button>')
		alphabetLetters.attr('class', 'alphabetLetters').html(alf[i])
		$('#alfavite').append(alphabetLetters)
	}
}
function quest_slide(){
	$('#question').html([questions[temp]['Q']])
	let k = questions[temp]['A'];
	console.log(k)
	for (let t = 0; t < k.length; t++) {

		var main1 = $('<div></div>');
		main1.attr('class', 'main1')
		var p = $('<p></p>')
		// p.attr('class', 'p').html(k[t]);
		$("#main").append(main1)
		if(k[t]==' '){
			main1.css('border' , 'none')
			
			}else{
				main1.append(p);

			}

	}
}


	$('.alphabetLetters').on('click', func)

	function func() {
		let answerArr = questions[temp].A.split('')
			let letter = $(this).html()
			console.log(letter)
			let ind = [];
			$(this).css('background-color' , 'red')
			for(let i = 0; i<answerArr.length ; i++){
				
				if(letter==answerArr[i]){
					console.log(answerArr[i])
					$('.main1').eq(i).html(letter)
					ind.push(i)
					$(this).css('background-color' , 'green')
				}
					
				
			}
			let temp1 = 0
			for(let i = 0; i<$('.main1').length ; i++){
				
			if($('.main1').eq(i).html() !=='<p></p>'){
				temp1 ++;
				if(temp1==answerArr.length){
					temp++
					$('#main').html('')
					for(let j=0 ;j<$('.alphabetLetters').length;j++){
						$('.alphabetLetters').eq(j).css('background-color' , 'white')
					}
					quest_slide();

				}
			}
					
				
			}


	}