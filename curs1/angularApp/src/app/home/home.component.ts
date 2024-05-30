import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  home: string = 'Titlu din Home Component';
  user = {
    nume: 'Popescu',
    prenume: 'Dan',
  };
  myName:string='Petrescu Ion';

  cars = ['Tesla', 'Toyota', 'BMW', 'Honda', 'Ford', 'Hyundai', 'Nissan', 'Porsche'];

  showImg: boolean = false;
  imageUrl =
    'https://t3.ftcdn.net/jpg/00/82/30/70/360_F_82307047_vMqQun5fjBzuJF0o2brRxYIs9Ix62fco.jpg';

  trimiteDate() {
    if(this.showImg){
      this.showImg=false;
    }
    else{
      this.showImg=true;
    }
    
  }
}
