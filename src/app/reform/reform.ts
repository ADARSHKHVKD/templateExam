import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reform',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './reform.html',
  styleUrl: './reform.css',
})
export class Reform  implements OnInit {

  ngOnInit(): void {
    // alert("reform component initialized");
    console.log("reform component initialized")
  }

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({

      name: [
        '',
        [
          Validators.required, 
          Validators.minLength(3)
        ]
      ],

      email: [
        '',
        [
          Validators.required, 
          Validators.email
        ]
      ],

      password: [
        '',
        [
          Validators.required,
          Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$')
        ]
      ],

      age: [
        '',
        [
          Validators.required, 
          Validators.min(18)
        ]
      ],

      phone: [
        '',
        [
          Validators.required, 
          Validators.pattern('^[0-9]{10}$')
        ]
      ]

    });

  }

  onSubmit():void {
    if (this.form.valid) {
      console.log("form value:",this.form.value);
      this.form.reset();
    }
  }
}