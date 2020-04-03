function toggleClass(elem,className){
  if (elem.className.indexOf(className) !== -1){
    elem.className = elem.className.replace(className,'');
  }
  else{
    elem.className = elem.className.replace(/\s+/g,' ') + 	' ' + className;
  }

  return elem;a
}

function toggleDisplay(elem){
  const curDisplayStyle = elem.style.display;			

  if (curDisplayStyle === 'none' || curDisplayStyle === ''){
    elem.style.display = 'block';
  }
  else{
    elem.style.display = 'none';
  }

}

function toggleMenuDisplay(e){
  const dropdown = e.currentTarget.parentNode;
  const menu = dropdown.querySelector('.menu');
  const icon = dropdown.querySelectorAll('.fa > span');

  toggleClass(menu,'hide');
  icon.forEach(el=> toggleClass(el,'show'));
}

function handleOptionSelected(e){
  toggleClass(e.target.parentNode, 'hide');
  
  const id = e.target.id;
  const newValue = e.target.textContent + ' ';
  const titleElem = document.querySelector('.dropdown .title');
  const icon = document.querySelector('.dropdown .title .fa');


  titleElem.textContent = newValue;
  titleElem.appendChild(icon);

  //trigger custom event
  document.querySelector('.dropdown .title').dispatchEvent(new Event('change'));
    //setTimeout is used so transition is properly shown
  setTimeout(() => toggleClass(icon,'show',0));
}


//get elements
const dropdownTitle = document.querySelectorAll('.dropdown .title');
const dropdownOptions = document.querySelectorAll('.dropdown .option');

//bind listeners to these elements
dropdownTitle.forEach(el => el.addEventListener('click', toggleMenuDisplay));

dropdownOptions.forEach(option => option.addEventListener('click',handleOptionSelected));
