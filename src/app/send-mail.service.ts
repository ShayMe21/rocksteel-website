import { Injectable } from '@angular/core';
import {Http,Headers,Response} from '@angular/http';

/**
 * The http client service to send form input submissions to formspree email API.
 */
@Injectable()
export class SendMailService {

  constructor(private http: Http) { }

  public sendMail(formValues){
    const headers = new Headers({
        'Content-Type' : 'application/json'
    });

   return this.http.post("https://formspree.io/rock.s.group2020@gmail.com", 
        formValues,
        {
            'headers' : headers
        }
    ).subscribe(res => console.log(res.json()));
}

}
