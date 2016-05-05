import {Page, NavController,Loading, NavParams} from 'ionic-angular';
import {Utility} from '../../services/utility';
import {MeasureUtil} from '../../services/measureUtil';
import {DataModel} from '../../model/DataModel';
import {BodyResult} from '../../model/bodyResult';
import {NgIf} from 'angular2/common'
import { ElementRef, ViewChild} from 'angular2/core';
import {FORM_DIRECTIVES} from 'angular2/common';
import {HomePage} from '../home/home';


declare var Gauge: any;
declare var jQuery: any;
@Page({
  templateUrl: 'build/pages/step6/step6.html',
  providers:[Utility,MeasureUtil,BodyResult,DataModel],
  directives:[NgIf,FORM_DIRECTIVES]
  
})
export class Step6 {
    public gaugeHtml: any;
    public fat: any;
    public fatColor:any;
    public before:boolean;
    @ViewChild('gaugeid')
    gaugeid: ElementRef;
 
 public data:DataModel;
 public bodyResult:BodyResult;
     constructor(private utility: Utility, 
                 private measureUtil:MeasureUtil,
                private nav: NavController, 
                private navParams: NavParams) {

this.before=true;
        this.data = navParams.get('data');
        

  }
   calculate()
  {
    try{
   this.bodyResult= this.measureUtil.measureBodyFat(this.data);
   this.before=false;
   this.createGauge(
    this.bodyResult.bodyGroup['list'][0].to,
   this.bodyResult.bodyGroup['list'][1].to,
   this.bodyResult.bodyGroup['list'][2].to,
   this.bodyResult.fatPercentage,"gaugeid"
   );
   
    }catch(e)
    {
      console.log(e);
    }
  }
   makeGauge() {
        this.createGauge(11, 16, 21, 19.23, 'gaugeid');

    };
    createGauge(normalPercentage, warningPercentage, dangerPercentage, actualValue, elementid) {
        debugger;

        var maxValue = 40
        var normalValue = normalPercentage * (100 / 40);
        var warningValue = warningPercentage * (100 / 40);
        var dangerValue = dangerPercentage * (100 / 40);
   
        var g = new Gauge({
            block: document.getElementById(elementid),
            actualValue: 0,
            labels: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40],
            // labels: [0,10,20,40,50],
            normalValue: normalValue,
            warningValue: warningValue,
            dangerValue: dangerValue,
        });
        setTimeout(function() {
             g.setValue(actualValue);
        }, 200);
       
        debugger;
        var ti=(Number(actualValue)/0.2);
        var interVvalTicks=5000/ti;
        var tempfat=0;
      var interval=  setInterval(()=>{
            tempfat=tempfat+0.2;
          this.fat= this.roundToPercent(tempfat);
          this.fatColor=this.getFatColor(normalPercentage, warningPercentage, dangerPercentage,tempfat);
            if(tempfat>actualValue)
            {
                tempfat=actualValue;
                 this.fat= this.roundToPercent(tempfat)
                clearInterval(interval)}
        },interVvalTicks);
        
        

    }
    getFatColor(normalPercentage, warningPercentage, dangerPercentage,currentValue)
    {
        var retColor=this.measureUtil.fatGroups[3].color;
        if(currentValue<dangerPercentage)
        retColor=this.measureUtil.fatGroups[2].color;
         if(currentValue<warningPercentage)
        retColor=this.measureUtil.fatGroups[1].color;
         if(currentValue<normalPercentage)
        retColor=this.measureUtil.fatGroups[0].color;
        
        return retColor;
    }
    gohome()
    {
        this.nav.push(HomePage);
    }
    roundToPercent(tempfat)
    {
          var fat=Math.round(tempfat*100)/100;
            return fat+'%';
    }
 

   
}
