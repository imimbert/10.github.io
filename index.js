function ok(){
    var obj1 = document.getElementsByName("q1");
    var obj2 = document.getElementsByName("q2");
    var obj3 = document.getElementsByName("q3");
    var obj4 = document.getElementsByName("q4");
    var obj5 = document.getElementsByName("q5");
    var obj6 = document.getElementsByName("q6");
    var obj7 = document.getElementsByName("q7");
    var obj8 = document.getElementsByName("q8");
    var obj9 = document.getElementsByName("q9");
    var obj10 = document.getElementsByName("q10");
    var na = document.getElementsByName("q0");
    var ans = [];
    for(let i=0;i<obj1.length;i++){
        if(obj1[i].checked){
            ans.push(obj1[i].value);
        }
    }
    for(let i=0;i<obj2.length;i++){
        if(obj2[i].checked){
            ans.push(obj2[i].value);
        }
    }
    for(let i=0;i<obj3.length;i++){
        if(obj3[i].checked){
            ans.push(obj3[i].value);
        }
    }
    for(let i=0;i<obj4.length;i++){
        if(obj4[i].checked){
            ans.push(obj4[i].value);
        }
    }
    for(let i=0;i<obj5.length;i++){
        if(obj5[i].checked){
            ans.push(obj5[i].value);
        }
    }
    for(let i=0;i<obj6.length;i++){
        if(obj6[i].checked){
            ans.push(obj6[i].value);
        }
    }
    for(let i=0;i<obj7.length;i++){
        if(obj7[i].checked){
            ans.push(obj7[i].value);
        }
    }
    for(let i=0;i<obj8.length;i++){
        if(obj8[i].checked){
            ans.push(obj8[i].value);
        }
    }
    for(let i=0;i<obj9.length;i++){
        if(obj9[i].checked){
            ans.push(obj9[i].value);
        }
    }
    for(let i=0;i<obj10.length;i++){
        if(obj10[i].checked){
            ans.push(obj10[i].value);
        }
    }
    alert("你选择了"+ans);
    let p = 0; 
    // [A,B,B,D,C,B,C,D,C,A] 
    if(ans[0] == 'A'){
        p+=1;
    }
    if(ans[1]=='B'){
        p+=1;
    }
    if(ans[2] == 'B'){
        p+=1;
    }
    if(ans[3]=='D'){
        p+=1;
    }
    if(ans[4] == 'C'){
        p+=1;
    }
    if(ans[5]=='B'){
        p+=1;
    }
    if(ans[6] == 'C'){
        p+=1;
    }
    if(ans[7]=='D'){
        p+=1;
    }
    if(ans[8] == 'C'){
        p+=1;
    }
    if(ans[9] == 'A'){
        p+=1;
    }
    p = p*10;
    p1 = p;
    alert("你答对了"+p+"%！");
}
