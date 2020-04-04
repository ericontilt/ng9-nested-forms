import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-data-form',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    const fb = this.formBuilder;
    this.profileForm = fb.group({
      basicInfo: fb.control({
        // note that initial state should be set here, not in the sub-form as it will not be
        // set on the root form value that way
        email: 'eric.beragg@gmail.com'
      }),
      address: fb.control(null)
    });
  }

  onSubmit() {
    alert(JSON.stringify(this.profileForm.value));
  }
}
