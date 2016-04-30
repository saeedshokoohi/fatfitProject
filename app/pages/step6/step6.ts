import {Page, NavController,Loading, NavParams} from 'ionic-angular';
import {Utility} from '../../services/utility';
import {MeasureUtil} from '../../services/measureUtil';
import {DataModel} from '../../model/DataModel';
import {NgIf} from 'angular2/common'
import {FORM_DIRECTIVES} from 'angular2/common';


@Page({
  templateUrl: 'build/pages/step6/step6.html',
  providers:[Utility,MeasureUtil],
  directives:[NgIf,FORM_DIRECTIVES]
  
})
export class Step6 {
 
 public data:DataModel;
 public bodyFatPercent:string;
     constructor(private utility: Utility, 
                 private measureUtil:MeasureUtil,
                private nav: NavController, 
                private navParams: NavParams) {

debugger;
        this.data = navParams.get('data');
        

  }
  calculate()
  {
   this.data.bodyfat= this.measureUtil.measureBodyFat(this.data);
   this.presentLoading() ;
   
   this.bodyFatPercent=this.data.bodyfat+" % ";
   
  }
  presentLoading() {
  let loading = Loading.create({
    content: "در حال محاسبه ... منتظر باشید",
    duration: 3000
    
  });
  this.nav.present(loading);
}
   
}
