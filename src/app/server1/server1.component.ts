import { Component } from "@angular/core";

@Component({
    selector:'app-server1' , 
    templateUrl: './server1.component.html',
    styles:[`.online{ background-color:#eeeeee; }`]
})

export class Server1Component {
    serverStatus: string = 'offline';

    

    constructor(){
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
        
    }

    
    getServerStatus(){

    }
    getColor(){
        return this.serverStatus == 'online' ? 'green' :'red'
    }
} 