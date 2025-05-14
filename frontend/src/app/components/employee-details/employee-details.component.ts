import { Component } from '@angular/core';
import { Employee } from '../../models/employee';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employee-details',
  standalone: true,
  imports: [],
  templateUrl: './employee-details.component.html',
  styleUrl: './employee-details.component.css'
})
export class EmployeeDetailsComponent {
  id: number;
  employee: Employee;

  constructor(private route: ActivatedRoute, private employeeService: EmployeeService){}

  ngOnInit(): void{
    this.id = this.route.snapshot.params['id'];

    this.employee = new Employee();
    this.employeeService.getEmployeeById(this.id).subscribe({
      next: (data) => this.employee = data,
      error: (e) => console.log(e)
    });
  }


}
