import { SendMailService } from './../send-mail.service';
import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, FormsModule } from '@angular/forms';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit, OnChanges {

  form: FormGroup;
  formSubmitted: boolean;
  formSuccessMessage:string = "Thanks for contacting us, we will get back to you shortly.";
  mailServices: SendMailService;

  /**
   * Default method when class is instantiated.
   * Should only be used for intialisation and declaration of class memebers.
   * Just to setup DI
   */
  constructor(private mailService: SendMailService) {
    this.mailServices = mailService;
   }

  /**
   * Lifecycle hook to indicate Ng2 is done creating the component and called  after the first ngOnChanges()
   * Better place to do "work" as component bindings are resolved.
   */
  ngOnInit() {
    this.form = new FormGroup({
      inputName: new FormControl("", Validators.compose([
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(30),
        Validators.pattern('[\\w\\-\\s\\/]+')
      ])),
      inputEmail: new FormControl("", Validators.compose([
        Validators.required,        
        Validators.pattern('^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$')
      ])),
      inputMobile: new FormControl("", Validators.compose([
        Validators.required,
        Validators.pattern('[\\d\\-]+')
      ])),
      inputMessage: new FormControl("", Validators.compose([
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(200)
      ]))
    });
  }

  /**
   * Lifecycle hook that is called when any data-bound property of a directive changes.
   * @param changes 
   */
  ngOnChanges(changes: SimpleChanges){
    
  }

  onSubmit = function (userMessage) {
    this.mailServices.sendMail(userMessage);
  }

}
