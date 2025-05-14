import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Employee } from '../../models/employee';
import { EmployeeService } from '../../services/employee.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-employee',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './update-employee.component.html',
  styleUrl: './update-employee.component.css'
})
export class UpdateEmployeeComponent {
  employee: Employee = new Employee();
  id:number;

  constructor(private employeeService: EmployeeService, private route: ActivatedRoute, private router: Router){}

  ngOnInit(): void{
    this.id = this.route.snapshot.params['id'];
    this.employeeService.getEmployeeById(this.id).subscribe({
      next: (data) => this.employee = data,
      error: (e) => console.log(e)
    });
  }

  onSubmit(): void{
    this.employeeService.updateEmployee(this.employee).subscribe({
      next: () => this.goToEmployeeList(),
      error: (e) => console.log(e)
  });
  }

  goToEmployeeList(){
    this.router.navigate(['/employees']);
  }

}
