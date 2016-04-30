import {Page, NavController, NavParams} from 'ionic-angular';
import {Utility} from '../../services/utility';
import {GenderController} from '../gender/gender';
import {DataModel} from '../../model/DataModel';


@Page({
  templateUrl: 'build/pages/home/home.html',
  providers:[Utility]
})
export class HomePage {

constructor(private nav:NavController)
{
    debugger;
    this.nav=nav;
}
 gotonextpage()
 {
   
     try{
           console.log('goto called');
     var data=new DataModel();
     data.name='user1';
     data.step=1;
     this.nav.push(GenderController,{data:data});
     }catch(e)
     {
         console.log(e);
     }
 }
 
   
}
