import {Page, NavController, NavParams} from 'ionic-angular';
import { ElementRef,ViewChild} from 'angular2/core';
import {Utility} from '../../services/utility';
import {GenderController} from '../gender/gender';
import {DataModel} from '../../model/DataModel';



declare var Gauge: any;
declare var jQuery:any;

@Page({
    templateUrl: 'build/pages/home/home.html',
    providers: [Utility,ElementRef]
})
export class HomePage {


 public gaugeHtml:any;
  @ViewChild('gaugeid')
  gaugeid:ElementRef;
    constructor(private nav: NavController,gaugeid:ElementRef) {
         this.nav = nav;
         this.gaugeid=gaugeid;

    }
    makeGauge()
    {
          debugger;
        
        // var gaugeData = {
        //     level: 30, // the level at which the arrow in the "%" 
        //     marks: [0, 10, 20, 30, 40, 50, 60,70,80,90,100], // list marks 
        //     colors: [ // list of colors, with the limit values in percentages
        //         {
        //             "threshold": 30,
        //             "value": "#Ff0022"
        //         },
        //          {
        //             "threshold": 60,
        //             "value": "#F8F3BC"
        //         },
        //         {
        //             "threshold": 80,
        //             "value": "#E89483"
        //         }
        //     ]
        // };
        // var gaugeOption = {
        //     aperture: 190 // openness scale in degrees 
        // }
       
        // gauge (this.gaugeid.nativeElement, gaugeData, gaugeOption);
        //gauge.js/coffee
//         var opts = {
//   lines: 12, // The number of lines to draw
//   angle: 0.04, // The length of each line
//   lineWidth: 0.09, // The line thickness
//   pointer: {
//     length: 0.62, // The radius of the inner circle
//     strokeWidth: 0.049, // The rotation offset
//     color: '#000000' // Fill color
//   },
//   limitMax: 'false',   // If true, the pointer will not go past the end of the gauge
//   colorStart: '#6FADCF',   // Colors
//   colorStop: '#8FC0DA',    // just experiment with them
//   strokeColor: '#E0E0E0',   // to see which ones work best for you
//   generateGradient: true
// };
// //var target = document.getElementById('foo'); // your canvas element
// var gauge = new Gauge(this.gaugeid.nativeElement).setOptions(opts); // create sexy gauge!
// gauge.maxValue = 3000; // set max gauge value
// gauge.animationSpeed = 46; // set animation speed (32 is default value)
// gauge.set(725); // set actual value

var foo = new Gauge({
    block: document.getElementById('gaugeid'),
    actualValue: 4,
    labels: [0, 1, 2, 3, 4, 5, 6],
    normalValue:50,
    warningValue: 75,
    dangerValue: 90,
});
foo.setValue(0);

setTimeout(function() {
    foo.setValue(4);
}, 1000);
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
