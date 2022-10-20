import { Component, OnChanges,Input, SimpleChanges, EventEmitter, Output } from "@angular/core";
import { faStar } from "@fortawesome/free-regular-svg-icons";
@Component({
    selector: 'pm-star',
    templateUrl:'./star.component.html', 
    styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges{

    faStar = faStar;
    @Input() rating : number = 0;
    
    cropwidth : number = 75;
    @Output() ratingClicked : EventEmitter<string> = new EventEmitter<string>();
    ngOnChanges(): void {
        this.cropwidth = this.rating*90/5;
        // console.log( `rating is ${this.rating}` );
    }

    onClick(){
        this.ratingClicked.emit( `rating is ${this.rating}` );
    }

    


}