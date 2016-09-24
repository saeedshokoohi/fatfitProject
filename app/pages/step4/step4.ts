
// import {Page, NavController, NavParams} from 'ionic-angular';
// import {Utility} from '../../services/utility';
// import {DataModel} from '../../model/DataModel';
// import {NgIf} from 'angular2/common';
// import {FORM_DIRECTIVES} from 'angular2/common';
// import {Step6} from '../step6/step6';
// import {Step5} from '../step5/step5';
// @Page({
//   templateUrl: 'build/pages/step4/step4.html',
//   providers:[Utility],
//   directives:[NgIf,FORM_DIRECTIVES]
  
// })
// export class Step4 {
 
//  public data:DataModel;
//      constructor(private utility: Utility, 
//                 private nav: NavController, 
//                 private navParams: NavParams) {

// debugger;
//         this.data = navParams.get('data');


//   }
//   gotoNextStep()
//   {
//     debugger;
//       this.nav.push(Step5,{data:this.data})
//   }
   
// }


import {Page, NavController, NavParams} from 'ionic-angular';
import {Utility} from '../../services/utility';
import {DataModel} from '../../model/DataModel';
import {NgIf} from 'angular2/common'
import {FORM_DIRECTIVES} from 'angular2/common';
import {Step5} from '../step5/step5';
import {Step6} from '../step6/step6';
@Page({
  templateUrl: 'build/pages/step4/step4.html',
  providers:[Utility],
  directives:[NgIf,FORM_DIRECTIVES]
  
})
export class Step4 {
 
 public data:DataModel;
     constructor(private utility: Utility, 
                private nav: NavController, 
                private navParams: NavParams) {

debugger;
        this.data = navParams.get('data');


  }
  gotoNextStep()
  {
    if(this.data.gender)
    {
      console.log('to calculate');
      this.nav.push(Step6,{data:this.data})
    }
      else
      {
       this.nav.push(Step5,{data:this.data})
       
      }
  }
   
}
