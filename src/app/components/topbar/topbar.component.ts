import { Component } from '@angular/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent {
  fullScreen=false
  toggleFullScreen(fullScreen:any) {
    const elem = document.documentElement;
    if(fullScreen){
      elem.requestFullscreen();
      this.fullScreen=true
    }
    else{
      document.exitFullscreen();
      this.fullScreen=false
    }
   
    
 
  }
}
