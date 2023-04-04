import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
    name:'summary'
})
export class summarypipe implements PipeTransform {
    transform(value: any,start:number=0,end:number=15) {
        let temp =(value as string);
        // let temp=(<string>value);
       return temp.substring(start,end)+'...';
    }
}

