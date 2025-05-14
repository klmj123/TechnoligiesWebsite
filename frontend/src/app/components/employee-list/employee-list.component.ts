import { Component } from '@angular/core';
import { Employee } from '../../models/employee';
import { CommonModule } from '@angular/common';
import { EmployeeService } from '../../services/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent {
  employees: Employee[];

  constructor(private employeeService: EmployeeService, private router: Router) { }

  ngOnInit(): void{
    this.getEmployees();
  }

  private getEmployees(): void{
    this.employeeService.getEmployeesList().subscribe(data => {
      this.employees = data;
    });
  }

  addEmployee(){
    this.router.navigate(['create-employee']);
  }

  employeeDetails(id: number): void{
    this.router.navigate(['employee-details', id]);
  }

  updateEmployee(id: number): void{
    this.router.navigate(['update-employee', id]);
  }
    
  deleteEmployee(id: number): void{
    this.employeeService.deleteEmployee(id).subscribe({
      next: () => this.getEmployees(),
      error: (e) => console.log(e)
    });
  }
}
