import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'directives';

  fortrue = true;

  forfalse = false;

  hide = true;

  see = false;

  languages = ["C", "C++", "HTML", "CSS", "BOOTSTRAP", "JAVASCRIPT", "ANGULAR",];

  myvalue: any;

  forvalue: any = [];

  headingone = true;

  headingtwo = false;


  clicked() {
    setInterval(() => {

      if (this.fortrue == true) {
        this.fortrue = false;
        this.forfalse = true;
      }
      else {
        this.fortrue = true;
        this.forfalse = false;
      }

    }, 300)

    // setInterval(() => {

    //   if (this.fortrue == false) {
    //     this.fortrue = true;
    //   }
    //   else {
    //     this.forfalse = false;
    //   }

    // }, 6000)

  }

  clickme() {

    setInterval(() => {

      if (this.hide == true && this.see == false) {

        this.hide = false;
        this.see = true;

      }
      else {

        this.hide = true;
        this.see = false;
      }

    }, 250)

  }


  clicking() {
    this.forvalue.push(this.myvalue);
  }

  changestyle() {
    setInterval(() => {
      if(this.headingone == true){
        this.headingone = false;
        this.headingtwo = true;
      }
      else{
        this.headingone = true;
        this.headingtwo = false;
      }

    }, 250)
  }


}
