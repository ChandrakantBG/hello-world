import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:'summary1'
})
export class  sumaarypipe2 implements PipeTransform{
transform(value: any,start:number=0,end:number=35) {
    let temp=(<string>value)
   return temp.substring(start,end)+'...';
}
}