import {Page, NavController, NavParams} from 'ionic-angular';
import {Utility} from '../../services/utility';
import {DataModel} from '../../model/DataModel';
import {Step2} from '../step2/step2'
import {NgIf} from 'angular2/common'
@Page({
  templateUrl: 'build/pages/gender/gender.html',
  providers:[Utility],
  directives:[NgIf]
  
})
export class GenderController {
 
 public data:DataModel;
     constructor(private utility: Utility, 
                private nav: NavController, 
                private navParams: NavParams) {
        this.data = navParams.get('data');
  }
  setmale()
  {
      this.data.gender=true;
      this.gotoNextStep();
  
  }
  setfemale()
  {
      this.data.gender=false;
      this.gotoNextStep();
       
    
  }
  gotoNextStep()
  {
      this.nav.push(Step2,{data:this.data})
  }
   
}
