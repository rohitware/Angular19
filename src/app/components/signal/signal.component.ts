import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-signal',
  standalone: true,
  imports: [],
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignalComponent {

  firstName= signal("Rohit");

  lastName= signal<string>("Ware");

  courseName: string= "Angular";

  constructor(){
    setTimeout(() => {
      debugger;
      this.courseName= "React Js";

      this.firstName.set("Pranav");

      debugger;
    }, 5000);
  }
}
