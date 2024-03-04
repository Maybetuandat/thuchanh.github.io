function login()
{
    document.getElementById('question').style.display= 'block';
    document.getElementById('check').style.display = 'block';
    
}
var part1 = document.getElementById('part-1');
for(var i = 1; i<= 10; i++)
{
    var questiondiv = document.createElement('div');
    questiondiv.className = "question";
    questiondiv.classList.add = "c" + i;
    questiondiv.textContent = "Câu " + i + ":";
   

    var answerdiv = document.createElement('div');
    answerdiv.className = "answer";
    answerdiv.classList.add = "c" + i;
    for(let j = 1; j<=2; j++)
    {
        var answer = document.createElement('div');
        answer.className = "answer-selection";
        answer.classList.add('ct' + i);
        var check = document.createElement('input');
        check.type = "radio";
        check.class= i;
        var value = document.createElement('p');
        if(j == 1)
        {
            value.textContent= "Đúng";
        }
        else
        {
            value.textContent = "Sai";
        }
        answer.appendChild(check);
        answer.appendChild(value);
        answerdiv.appendChild(answer);
    }
    var cau = document.createElement('div');
    cau.appendChild(questiondiv);
    cau.appendChild(answerdiv);
    cau.className = "cauhoi";
    cau.classList = "c" + i;
    part1.appendChild(cau);

}



var part2 = document.getElementById('part-2');
for(var i = 11; i<= 20; i++)
{
    var questiondiv = document.createElement('div');
    questiondiv.className = "question";
    questiondiv.classList.add = "c" + i;
    questiondiv.textContent = "Câu " + i + ":";
    part1.appendChild(questiondiv);

    var answerdiv = document.createElement('div');
    answerdiv.className = "answer";
    answerdiv.classList.add = "c" + i;
    for(let j = 1; j<=4; j++)
    {
        var answer = document.createElement('div');
        answer.className = "answer-selection";
        answer.classList.add('ct' + i);
        var check = document.createElement('input');
        check.type = "radio";
        check.name= i;
        var value = document.createElement('p');
        if(j == 1)
        {
            value.textContent= "1";
        }
        if(j == 2)
        {
            value.textContent = "2";
        }
        if(j == 3)
        {
            value.textContent= "3";
        }
        if(j == 4)
        {
            value.textContent= "4";
        }
        answer.appendChild(check);
        answer.appendChild(value);
        answerdiv.appendChild(answer);
    }
    part1.appendChild(answerdiv);

}
var part3 = document.getElementById('part-3');
for(var i = 21; i<= 30; i++)
{
    var questiondiv = document.createElement('div');
    questiondiv.className = "question";
    questiondiv.classList.add = "c" + i;
    questiondiv.textContent = "Câu " + i + ":";
    part1.appendChild(questiondiv);

    var answerdiv = document.createElement('div');
    answerdiv.className = "answer";
    answerdiv.classList.add = "c" + i;
    for(let j = 1; j<=4; j++)
    {
        var answer = document.createElement('div');
        answer.className = "answer-selection";
        answer.classList.add('ct' + i);
        var check = document.createElement('input');
        check.type = "checkbox";
        check.name= i;
        var value = document.createElement('p');
        if(j == 1)
        {
            value.textContent= "1";
        }
        if(j == 2)
        {
            value.textContent = "2";
        }
        if(j == 3)
        {
            value.textContent= "3";
        }
        if(j == 4)
        {
            value.textContent= "4";
        }
        answer.appendChild(check);
        answer.appendChild(value);
        answerdiv.appendChild(answer);
    }
    part1.appendChild(answerdiv);

}
var part4 = document.getElementById('part-4');
for(var i = 31; i<=40; i++)
{
    var questiondiv = document.createElement('div');
    questiondiv.className = "question";
    questiondiv.classList.add = "c" + i;
    questiondiv.textContent = "Câu " + i + ":";
    part4.appendChild(questiondiv);


    var answerdiv = document.createElement('div');
    answerdiv.className = "answer";
    answerdiv.classList.add = "c" + i;
    var answer = document.createElement('input');
    answer.type = "text";
    answer.placeholder = "Nhập ở đấy";

    answerdiv.appendChild(answer);
    part4.appendChild(answerdiv);
}



function submit()
{
    window.location.href = "ketqua.html";
}
function home()
{
    window.location.href = "index.html";
}
