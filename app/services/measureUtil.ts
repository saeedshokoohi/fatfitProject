import {Injectable} from 'angular2/core'
import {DataModel} from '../model/datamodel'
import {BodyResult} from '../model/bodyResult'


@Injectable()
export
/**
 * MeasureUtil
 */
class MeasureUtil {
    constructor() {
        
    };
    
   public  measureBodyFat(data:DataModel):BodyResult
    {
        let result:BodyResult;
        var ageGroups=[
                       {groupnumber:1, min:0,max:20},
                       {groupnumber:2, min:21,max:25},
                       {groupnumber:3, min:26,max:30},
                       {groupnumber:4, min:31,max:35},
                       {groupnumber:5, min:36,max:40},
                       {groupnumber:6, min:41,max:45},
                       {groupnumber:7, min:46,max:50},
                       {groupnumber:8, min:51,max:55},
                       {groupnumber:9, min:56,max:120}
                       ];
        var fatGroups=[
                       {groupnumber:1,name:"LEAN"},
                       {groupnumber:2,name:"IDEAL"},
                       {groupnumber:3,name:"AVERAGE"},
                       {groupnumber:4,name:"OVERFAT"},
                       ];               
        var bodyFatForMan=[ 
            {ageGroup:1,list:[{fatGroup:1,from:2,to:8},{fatGroup:2,from:8,to:14},{fatGroup:3,from:14,to:21},{fatGroup:4,from:21,to:25}]},
            {ageGroup:2,list:[{fatGroup:1,from:3,to:10},{fatGroup:2,from:10,to:15},{fatGroup:3,from:15,to:22},{fatGroup:4,from:23,to:26}]},
            {ageGroup:3,list:[{fatGroup:1,from:4,to:11},{fatGroup:2,from:11,to:16},{fatGroup:3,from:16,to:21},{fatGroup:4,from:21,to:27}]},
            {ageGroup:4,list:[{fatGroup:1,from:5,to:13},{fatGroup:2,from:13,to:17},{fatGroup:3,from:17,to:25},{fatGroup:4,from:25,to:28}]},
            {ageGroup:5,list:[{fatGroup:1,from:6,to:15},{fatGroup:2,from:15,to:20},{fatGroup:3,from:20,to:26},{fatGroup:4,from:26,to:29}]},
            {ageGroup:6,list:[{fatGroup:1,from:7,to:16},{fatGroup:2,from:16,to:22},{fatGroup:3,from:22,to:27},{fatGroup:4,from:27,to:30}]},
            {ageGroup:7,list:[{fatGroup:1,from:8,to:17},{fatGroup:2,from:17,to:23},{fatGroup:3,from:23,to:29},{fatGroup:4,from:29,to:31}]},
            {ageGroup:8,list:[{fatGroup:1,from:9,to:19},{fatGroup:2,from:20,to:25},{fatGroup:3,from:25,to:30},{fatGroup:4,from:31,to:33}]},
            {ageGroup:9,list:[{fatGroup:1,from:10,to:21},{fatGroup:2,from:21,to:26},{fatGroup:3,from:26,to:31},{fatGroup:4,from:31,to:34}]},
            ];
            var bodyFatForWoman=[ 
            {ageGroup:1,list:[{fatGroup:1,from:11,to:18},{fatGroup:2,from:18,to:23},{fatGroup:3,from:23,to:30},{fatGroup:4,from:30,to:35}]},
            {ageGroup:2,list:[{fatGroup:1,from:12,to:19},{fatGroup:2,from:19,to:24},{fatGroup:3,from:24,to:30},{fatGroup:4,from:30,to:35}]},
            {ageGroup:3,list:[{fatGroup:1,from:13,to:20},{fatGroup:2,from:21,to:25},{fatGroup:3,from:25,to:31},{fatGroup:4,from:31,to:36}]},
            {ageGroup:4,list:[{fatGroup:1,from:13,to:21},{fatGroup:2,from:21,to:26},{fatGroup:3,from:26,to:33},{fatGroup:4,from:33,to:36}]},
            {ageGroup:5,list:[{fatGroup:1,from:14,to:22},{fatGroup:2,from:22,to:27},{fatGroup:3,from:27,to:34},{fatGroup:4,from:34,to:37}]},
            {ageGroup:6,list:[{fatGroup:1,from:14,to:23},{fatGroup:2,from:23,to:28},{fatGroup:3,from:28,to:35},{fatGroup:4,from:35,to:38}]},
            {ageGroup:7,list:[{fatGroup:1,from:15,to:24},{fatGroup:2,from:24,to:30},{fatGroup:3,from:30,to:36},{fatGroup:4,from:36,to:38}]},
            {ageGroup:8,list:[{fatGroup:1,from:16,to:26},{fatGroup:2,from:26,to:31},{fatGroup:3,from:31,to:36},{fatGroup:4,from:36,to:39}]},
            {ageGroup:9,list:[{fatGroup:1,from:16,to:27},{fatGroup:2,from:27,to:32},{fatGroup:3,from:32,to:37},{fatGroup:4,from:37,to:40}]},
            ];
                        
        ;
        if(data.gender)
        {
             console.log(data);
            result.fatPercentage=this.maleFat(data.height,data.neck,data.waist);
        } 
        else
        {
            console.log(data);
       //      result=this.maleFat(data.height,data.neck,data.waist);
             result.fatPercentage=this.femaleFat(data.height,data.neck,data.waist,data.hip);
        }
        debugger;
      var myGroupAge= ageGroups.filter(function(el){
            return el.min<=data.age && el.max>=data.age;
        });
        var targetGroup;
        if(data.gender)
        targetGroup=bodyFatForMan.find(function(el){return el.ageGroup==myGroupAge[0].groupnumber});
        else
        targetGroup=bodyFatForWoman.find(function(el){return el.ageGroup==myGroupAge[0].groupnumber});
        
       var finalPlace= targetGroup.list.filter(function(el){return el.from<result && el.to>=result});
       result.bodyGroup=targetGroup;;
       var finalroup= fatGroups.find(function(el){return el.groupnumber==finalPlace.fatGroup});
        result.fatStatusDescription=finalroup.name;
        return result;
        
    };
    //%Fat=495/(1.0324-.19077(log(abdomen-neck))+.15456(log(height)))-450 
     maleFat(h, n, w)   { 
         
         return this.thou(495 / (1.0324 - 0.19077 * (Math.log(Number(w) - Number(n)    ) / Math.LN10) + 0.15456 * (Math.log(Number(h)) / Math.LN10)) - 450); } ;
  //%Fat=495/(1.29579-.35004(log(abdomen+hip-neck))+.22100(log(height)))-450 
 femaleFat(h:number,n:number,w:number,r:number) {
     var temp=Number(w)+Number(r)-Number(n);
      debugger; return this.thou(495/(1.29579-0.35004*(Math.log(temp)/Math.LN10)+0.22100*(Math.log(h)/Math.LN10))-450);}
  thou(n) { return Math.round(n * 10) / 10 ; } 
}