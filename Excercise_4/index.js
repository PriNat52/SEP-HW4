const state = {
    a: "apple",
    b: "banana",
    c: "city",
    d: "dom",
    e: "end",
    f: "forEach"
};

// w3 select option

const render = (ele, tmp) => {
    ele.innerHTML = tmp;
}

const createDropDown = () => {
    
    const keyele = document.getElementById('key');
    const valele = document.getElementById('val');
    
    let keystmp = '';
    let valstmp = '';
    Object.keys(state).forEach(key => {
        keystmp += `<option value="${key}">${key}</option>`;
        valstmp += `<option value="${key}">${state[key]}</option>`;
    });
    render(keyele, keystmp);
    render(valele, valstmp);
}

createDropDown();
let e = document.getElementById("key");
let f = document.getElementById('val');

const selectDropDown = () => {

    let as = document.forms[0].key.value;
    let value = '';
    
    Object.keys(state).find((key) => {
        if(key === as){
            value = state[key];
        }
    });

    console.log(as, value);

    let keySelect = '';
    let valSelect = '';
    Object.keys(state).find((key) => {
        if(key === as){
            keySelect += `<option value="${key}">${key}</option>`;
            valSelect += `<option value="${key}">${state[key]}</option>`;
            render(e,keySelect);
            render(f,valSelect);
        }
    });  
}

e.onchange=selectDropDown;
selectDropDown();
createDropDown();