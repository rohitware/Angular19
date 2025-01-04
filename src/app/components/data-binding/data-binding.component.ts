import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {

  firstName: string =" Rohit";
  rollNumber: number = 123;
  isActive: boolean = true;
  currentDate: Date = new Date();
  myPlaceholder: string = "Enter the full name";
  selectedCity: string = "";




  showWelcomeMessage(){
    alert (" welcome to the angular 19 tutorial");
  }
   
  onCityChange(){
    console.log("ctiy change");
  }

}
