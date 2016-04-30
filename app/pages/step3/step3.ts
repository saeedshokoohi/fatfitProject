import {Page, NavController, NavParams} from 'ionic-angular';
import {Utility} from '../../services/utility';
import {DataModel} from '../../model/DataModel';
import {NgIf} from 'angular2/common'
import {FORM_DIRECTIVES} from 'angular2/common';
import {Step4} from '../step4/step4'
@Page({
  templateUrl: 'build/pages/step3/step3.html',
  providers:[Utility],
  directives:[NgIf,FORM_DIRECTIVES]
  
})
export class Step3 {
 
 public data:DataModel;
     constructor(private utility: Utility, 
                private nav: NavController, 
                private navParams: NavParams) {

debugger;
        this.data = navParams.get('data');


  }
  gotoNextStep()
  {
    
      this.nav.push(Step4,{data:this.data})
  }
   
}
