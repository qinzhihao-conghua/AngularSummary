import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'zh-reactive-from',
  templateUrl: './reactive-from.component.html',
  styleUrls: ['./reactive-from.component.scss']
})
export class ReactiveFromComponent implements OnInit {

  constructor(
    private fb: FormBuilder
  ) { }


  formControl = new FormControl({
    value: "111",
    disabled: true
  });

  formGroup = new FormGroup({
    first: new FormControl("111", Validators.required),
    second: new FormControl("222", Validators.required),
    third: new FormControl("333", Validators.required),
    forth: new FormControl({ value: "444", disabled: true }, Validators.required),
  })
  arrData = [
    { name: "张三", sex: "男" },
    { name: "李四", sex: "男" },
    { name: "王五", sex: "男" },
    { name: "赵六", sex: "男" }
  ]

  formGroup1 = new FormGroup({
    formArray: this.fb.array([
      // this.fb.control('')
    ])
  })

  ngOnInit() {
    this.arrData.forEach(item => {
      this.myFormArray.push(this.fb.control(item.name))
    })
  }

  get myFormArray() {
    return this.formGroup1.get("formArray") as FormArray;
  }

  submitMethod() {
    this.formControl.setValue("123");
  }
  submitMethod1() {
    console.log(this.formGroup.value);
  }
  submitMethod2() {
    console.log(this.formGroup1.value);
  }

}
