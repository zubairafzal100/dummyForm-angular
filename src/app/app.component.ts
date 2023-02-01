import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string = '';
  date: any = null;
  amount: any = null;
  height: any = null;
  miles: any = null;

  // car = {
  //   made: 'Toyota',
  //   modal: 'Carimny',
  //   year: 2020
  // }
 
  onNameChange(value: any){
    this.name = value.target.value;
  }

  onDateChange(value: any){
    this.date = value.target.value;
  }

  onAmountChange(value: any){
    this.amount = parseFloat(value.target.value);
  }

  onHeightChange(value: any){
    this.height = parseFloat(value.target.value);
  }
  
  onMilesChange(value: any){
    this.miles = parseFloat(value.target.value);
  }
}
