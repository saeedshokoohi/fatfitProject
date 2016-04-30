import {Page, NavController, NavParams} from 'ionic-angular';
import {Utility} from '../../services/utility';
import {DataModel} from '../../model/DataModel';
import {NgIf} from 'angular2/common'
import {FORM_DIRECTIVES} from 'angular2/common';
import {Step6} from '../step6/step6'
@Page({
  templateUrl: 'build/pages/step5/step5.html',
  providers:[Utility],
  directives:[NgIf,FORM_DIRECTIVES]
  
})
export class Step5 {
 
 public data:DataModel;
     constructor(private utility: Utility, 
                private nav: NavController, 
                private navParams: NavParams) {

debugger;
        this.data = navParams.get('data');


  }
  gotoNextStep()
  {
      this.nav.push(Step6,{data:this.data})
  }
   
}
