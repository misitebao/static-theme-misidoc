import Alpine from 'alpinejs';

import './styles/main.scss';

window.Alpine = Alpine;

Alpine.store('button', {
  on: false,

  toggle() {
    this.on = !this.on;
  },
});

Alpine.start();
