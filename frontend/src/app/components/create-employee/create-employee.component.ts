import { Component } from '@angular/core';
import { Employee } from '../../models/employee';
import { FormsModule } from '@angular/forms';
import { EmployeeService } from '../../services/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-employee.component.html',
  styleUrl: './create-employee.component.css'
})
export class CreateEmployeeComponent {
  employee: Employee = new Employee();
  
  constructor(private employeeService: EmployeeService, private router: Router){}

  saveEmployee(): void{
    this.employeeService.createEmployee(this.employee).subscribe({
      next: (data) => console.log(data),
      error: (e) => console.log(e),
      complete: () => console.log("complete")
    });
  }

  goToEmplyeeList(): void{
    this.router.navigate(['/employees']);
  }

  onSubmit(): void{
    this.saveEmployee();
    this.goToEmplyeeList();
  }

}
