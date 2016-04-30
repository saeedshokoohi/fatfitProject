import {Page, NavController, NavParams} from 'ionic-angular';
import {Utility} from '../../services/utility';
import {DataModel} from '../../model/DataModel';
import {NgIf} from 'angular2/common'
import {FORM_DIRECTIVES} from 'angular2/common';
import {Step3} from '../step3/step3'
@Page({
  templateUrl: 'build/pages/step2/step2.html',
  providers:[Utility],
  directives:[NgIf,FORM_DIRECTIVES]
  
})
export class Step2 {
 
 public data:DataModel;
     constructor(private utility: Utility, 
                private nav: NavController, 
                private navParams: NavParams) {

debugger;
        this.data = navParams.get('data');


  }
  gotoNextStep()
  {
      this.nav.push(Step3,{data:this.data})
  }
   
}
