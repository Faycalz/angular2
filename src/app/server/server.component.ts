import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  //selector: '[app-server]', refernce <div app-server></div>
  //selector : '.app-server',//reference like a class


  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  title = 'angular2';
  serverId: number = 10;
  serverStatus: string = 'offline'

  allowNewServer:boolean = false;
  serverCreation :string="server not created yet !"
  serverName ="";
  ServerCreated:boolean = false;
  servers=['testServer1','testServer2']
  products: any =[
    {"name":"pos",
      "price":18500,
      "code":"alpha08"
    },
    {"name":"pos2",
      "price":98500,
      "code":"alpha08"
    }
  ]

  getstatus():string{
    return this.serverStatus + ' now';
  }

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
   }

  ngOnInit(): void {
  }
  creatServer(){
    this.ServerCreated = true;
    this.serverStatus = 'online'
    this.servers.push(this.serverName)
    this.serverCreation = "server created succesfuly "+this.serverName
  }
  onUpdatServerName(event: Event){
    this.serverName = (<HTMLInputElement>event.target).value

  }

}
