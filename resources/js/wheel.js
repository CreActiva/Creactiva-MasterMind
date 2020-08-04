(function() {
  'use strict';

  let settings = [
    {
      el: '#wheel-1',
      members: ['1', '2', '3', '4','5','6','7','8','9','10','11'],
      colors: ['#F6C872', '#E18A43', '#B95935', '#5B0202','#F6C872', '#E18A43', '#B95935', '#5B0202','#F6C872', '#E18A43', '#B95935'],
      radius: 250,
      startAngle: 'random'
    }
  ];

  let wheels = [
    new PrizeWheel(settings[0])
  ];

  wheels.forEach(function(wheel) {
    wheel.init();
    wheel.spin(function(member) {
      app.$children[0]._props.index = member;
      modal.classList.toggle('show-modal');
    });
  });

  // let spinBtn = document.querySelector('.btn-spin');
  // let output = document.querySelector('#output');

  // spinBtn.addEventListener('click', function(e) {
  //   output.textContent = '';
  //   wheels.forEach(function(wheel) {
  //     wheel.spin(function(member) {
  //       app.$children[0]._props.index = member;
  //       output.innerHTML = 'Winner:<br /><strong>' + member + '</strong>';
  //     });
  //     wheel.spin(function(member) {
  //       app.$children[0]._props.index = member;
  //       modal.classList.toggle('show-modal');
  //     });
  // }, false);
  // });
})();
let modalComponent = Vue.component('modalcontent', {
  template: /*html*/`
  <div class="modal-content border-violet-radial">
    <span class="close-button">&#10006;</span>
    <div class="modal__item col-modal-1 align-items-center justify-content-center px-lg-1 px-0 d-flex flex-column" :style="{'background': 'url('+this.info[this.index].img+') no-repeat center / cover'}">
    </div>
    <div class="modal__item col-modal-2 p-lg-0 pt-3">
      <h3 class="text-center text-light px-2">{{info[this.index].title}}</h3>
      <p class="text-center py-1 text-light px-2">{{info[this.index].text}}</p>
    </div>
  </div>
  `,
  props: {
    'index': {
      type: Number,
      required: false
    }
  },
  data(){
    return{
      info:[],
      modal: document.querySelector('.modal'),
    }
  },
  methods: {
    getData(){
      // axios
      axios.get("./wheel.json")
      .then(response => {
        this.info = response.data;
      });
    },
    activeModal() {
      let trigger = document.querySelectorAll('.btn-play');
      let triggerBtn = document.querySelectorAll('.btn-modal');
      let closeButton = document.querySelector('.close-button');

      triggerBtn.forEach(el => el.addEventListener('click', this.toggleModal))
      window.addEventListener('click', this.windowOnClick);
      closeButton.addEventListener('click', this.windowOnClick);
    },
    toggleModal() {
      this.modal.classList.toggle('show-modal');
    },
    windowOnClick(event) {
      if (event.target === modal) {
        this.toggleModal();
      }
    },
    activeWheel(){
      let settings = [
        {
          el: '#wheel-1',
          members: ['1', '2', '3', '4','5','6','7','8','9','10','11'],
          colors: ['#F6C872', '#E18A43', '#B95935', '#5B0202','#F6C872', '#E18A43', '#B95935', '#5B0202','#F6C872', '#E18A43', '#B95935'],
          radius: 250,
          startAngle: 'random'
        }
      ];
    
      let wheels = [
        new PrizeWheel(settings[0])
      ];
    
      wheels.forEach(function(wheel) {
        wheel.init();
        wheel.spin(function(member) {
          app.$children[0]._props.index = member;
          this.modal.classList.toggle('show-modal');
        });
      });
    
      let spinBtn = document.querySelector('.btn-spin');
      let output = document.querySelector('#output');
    
      spinBtn.addEventListener('click', function(e) {
        output.textContent = '';
        wheels.forEach(function(wheel) {
          wheel.spin(function(member) {
            app.$children[0]._props.index = member;
            output.innerHTML = 'Winner:<br /><strong>' + member + '</strong>';
          });
          wheel.spin(function(member) {
            app.$children[0]._props.index = member;
            this.modal.classList.toggle('show-modal');
          });
      }, false);
      });
    }
  },

  mounted() {
    // this.activeWheel();
    // this.activeModal();
    this.getData();
  },
});

let app = new Vue({
  el: '#app',
  components: {
    'modalcontent': modalComponent,
  },
})

let modal = document.querySelector('.modal');
let trigger = document.querySelectorAll('.btn-play');
let triggerBtn = document.querySelectorAll('.btn-modal');
let closeButton = document.querySelector('.close-button');
function toggleModal() {
  modal.classList.toggle('show-modal');
}
function windowOnClick(event) {
  if (event.target === modal) {
    toggleModal();
  }
}
triggerBtn.forEach(el => el.addEventListener('click', toggleModal))
window.addEventListener('click', windowOnClick);
// closeButton.addEventListener('click', windowOnClick);