import {Page, NavController, NavParams} from 'ionic-angular';
import { ElementRef, ViewChild} from 'angular2/core';
import {Utility} from '../../services/utility';
import {GenderController} from '../gender/gender';
import {Step6} from '../step6/step6';
import {DataModel} from '../../model/DataModel';




@Page({
    templateUrl: 'build/pages/home/home.html',
    providers: [Utility, ElementRef]
})
export class HomePage {



    constructor(private nav: NavController, gaugeid: ElementRef) {
        this.nav = nav;

    }
    goto6()
    {
         try {
            console.log('goto called');
            var data = new DataModel();
            data.name = 'user1';
            data.step = 1;
            data.age=28;
            data.gender=false;
            data.height=160;
            data.hip=95;
            data.neck=35;
            data.waist=82;
            data.weight=56;
            this.nav.push(Step6, { data: data });
        } catch (e) {
            console.log(e);
        }
    }
    gotonextpage() {

        try {
            console.log('goto called');
            var data = new DataModel();
            data.name = 'user1';
            data.step = 1;
            this.nav.push(GenderController, { data: data });
        } catch (e) {
            console.log(e);
        }
    }


}
