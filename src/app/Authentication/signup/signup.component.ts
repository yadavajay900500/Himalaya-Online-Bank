import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormGroup, FormControl } from '@angular/forms';
import { Dialog, DialogRef, DIALOG_DATA } from '@angular/cdk/dialog';
import { OtpVerifyPageComponent } from '../otp-verify-page/otp-verify-page.component';




@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})




export class SignupComponent implements OnInit {
  result: any = []
  animal: string | undefined;
  nameSend: any;
  name: any;

  constructor(private http: HttpClient,
    public dialog: Dialog
  ) { }
  inputVal: any
  userImg: any// = "https://upload.wikimedia.org/wikipedia/en/8/86/Avatar_Aang.png"
  title: String = 'Tour';
  Ya: String = 'Tour is Cnjgs';
  data: any = []
  fire() {
    console.log(this.inputVal);
  }




  uploadFile(e: any) {

    const reader = new FileReader();
    this.d = e.target.files[0]
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      console.log(reader.result)
      this.userImg = reader.result
    }

  }
  d: any

  signup = new FormGroup({
    name: new FormControl('Arjun Yadav'),
    email: new FormControl('rajendrayadav900500@gmai.com'),
    phone: new FormControl('7309403724'),
    password: new FormControl('123456'),
    IFSCCODE: new FormControl('AJY900'),
    bankName: new FormControl(''),
    gender: new FormControl(''),
    DOB: new FormControl(''),
    studentImage: new FormControl(File)
  })



  ngOnInit(): void {
    console.log(")))))))))))))))))))))", this.name)
    // this.http.get(`http://localhost:2022/find?_id=6319caf7464790bb713451b0`).
    //   subscribe({
    //     next: (r: any) => {
    //       this.data = r.user; console.log(r);
    //       console.log(this.data[0].email)
    //     },
    //     error: (err: any) => {
    //       console.log(" ko ho ka hal ba", err)
    //     },
    //   })
    // console.log("?????", this.title)

  }
  OnSubmit(data: any): void {
    this.nameSend= data.name
    console.log("***************************", data.name,this.nameSend)
    const formData: any = new FormData()
    formData.append('name', this.signup.value.name)
    formData.append('email', this.signup.value.email)
    formData.append('phone', this.signup.value.phone)
    formData.append('password', Number(this.signup.value.password))
    formData.append('IFSCCODE', this.signup.value.IFSCCODE)
    formData.append('bankName', this.signup.value.bankName)
    formData.append('gender', this.signup.value.gender)
    formData.append('DOB', this.signup.value.DOB)
    formData.append("studentPhoto", this.d)
    //formData.append("studentPhoto", this.signup.value.studentImage)

    // console.log(this.signup)


    this.http.post(`http://localhost:2022/signup`, formData).
      subscribe({
        next: (r: any) => {
          this.result = r?.result;
          alert("Form is successfully Submited")
          console.log("AAAAAAAAAAAAAA", r)
        },
        error: (err: any) => {
          console.log(" Error in Signup Component", err)
        },
      })
  }




  
      // --------------------------


      openDialog(value:any): void {
        console.log("QQQQQQQQQQQQQQQQQQQQQQQQQQQQ",value.name)
        const dialogRef = this.dialog.open<string>(OtpVerifyPageComponent, {
          width: '400px',
          data: {
            name: value.name,
          phone:value.phone,
          email:value.email
          }
        });
    
        dialogRef.closed.subscribe(result => {
          console.log('The dialog was closed');
          this.animal = result;
        });
      }
    
      // ===========================
}





//     ngOnInit(): void {}
//     upload_student_img(e:any){

//      this.addstudent.patchValue({profile:e.target.files[0]})

//     }

export interface DialogData {
  otp: any;
phone: any;
  animal: string;
  name: string;
}