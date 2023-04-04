
export class course1service{

    private coursedata:string[]=[
        'Core Java','Advance Java','Spring Boot','Jsp','Angular12','Docker','Aws'
    ]
    getcourse(){
        return this.coursedata;
    }
}