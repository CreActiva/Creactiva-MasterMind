class CountDown{
  constructor(el, deadline, finalMessage = '¡Ahora!', separately = false){
    this._el = el;
    this._elHTML = document.querySelector(this._el);
    this._deadline = deadline;
    this._getRemainTime = this.getRemainTime(this._deadline);
    this._finalMessage = finalMessage;
    this._separately = separately;

    this.countdown(this._deadline, this._el, this._finalMessage);
  }

  getRemainTime(deadline) {
    /* new Date() nos devuelve la fecha actual */
    var now = new Date(),
    /* remaiTime= new Date(deadline)-now tiempo que falta para llegar está fecha limite nos devuelve en milisegundo y lo dividimos en 1000 para que pasé a segundos */
    remainTime = (new Date(deadline) - now + 1000) / 1000,
    /* En segundos, Math.floor pasar numero entero, y slice(-2) hace seleccionar los 2 ultimos digitos */
    remainSeconds = ('0' + Math.floor(remainTime % 60)).slice(-2),
    remainMinutes = ('0' + Math.floor(remainTime / 60 % 60)).slice(-2),
    /* Cuantos segundos hay en un hora (3600) y cuantas horas hay en un día (24) */
    remainHours = ('0' + Math.floor(remainTime / 3600 % 24)).slice(-2),
    /* 3600 que tiene una hora y 24 horas que tiene un día */
    remainDays = Math.floor(remainTime / (3600 * 24));
    return {
      remainTime,
      remainSeconds,
      remainMinutes,
      remainHours,
      remainDays
    }
  }
  // assemble(el){
  //   this
  // }
  countdown (deadline, el, finalMessage) {
    /*Identificar el elemento*/
    var elem = document.querySelector(el);
    /* Crear la función que se va actualizar cada segundo */
    // Elementos separados
    var container = document.createElement('div');
    container.classList.add('d-flex','justify-content-around');
    var item = [];
    for(var i = 1; i <= 4; i++) item.push(document.createElement('div'));
    item.forEach((el, i) => el.classList.add('d-flex','flex-column', 'clock__item', `clock__item-${i+1}`))
    // ===================
    
    item.forEach(el => container.appendChild(el));
    setInterval(() => {
      var t = this.getRemainTime(deadline);
      if(!this._separately){
        elem.innerHTML = `${t.remainDays}d : ${t.remainHours}h : ${t.remainMinutes}m : ${t.remainSeconds}s`;
        if (t.remainTime <= 1) {
          clearInterval();
          elem.innerHTML = finalMessage;
        }
      } else {
        item[0].innerHTML = `<h1 class="display">${t.remainDays}</h1><h6 class="text-center">Días</h6>`;
        item[1].innerHTML = `<h1 class="display">${t.remainHours}</h1><h6 class="text-center">Horas</h6>`;
        item[2].innerHTML = `<h1 class="display">${t.remainMinutes}</h1><h6 class="text-center">Minutos</h6>`;
        item[3].innerHTML = `<h1 class="display">${t.remainSeconds}</h1><h6 class="text-center">Segundos</h6>`;
        elem.appendChild(container);
      } 
    }, 1000);//1000 cada segundo se actualice
    return true;
  }
}
// var contador = new CountDown('#clock', 'Apr 07 2020 19:00:00 GMT-0400', '¡Comenzamos!', true);

