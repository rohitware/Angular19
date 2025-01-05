import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  standalone: true,
  imports: [NgFor],
  templateUrl: './ng-for.component.html',
  styleUrl: './ng-for.component.css',
})
export class NgForComponent {
  cityList: string[] = ['Pune', 'Nagapur', 'Mumbai', 'Thane'];

  employeeArray: any[] = [
    { empId: 111, name: 'aaa', city: 'Pune', contactNo: '3939485950' },
    { empId: 222, name: 'bbb', city: 'Mumbai', contactNo: '44564566' },
    { empId: 111, name: 'ccc', city: 'Nagpur', contactNo: '4423534534543' },
    { empId: 111, name: 'ddd', city: 'Thane', contactNo: '53455666456' },
    { empId: 111, name: 'eee', city: 'Solapur', contactNo: '5654645654543' },
  ];
}
