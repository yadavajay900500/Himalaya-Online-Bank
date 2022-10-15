import { Component, OnDestroy, OnInit } from '@angular/core';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { Subscription ,Unsubscribable} from 'rxjs';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  dontShowHeader!: boolean;
  title = 'firstPage';

}

// export class AppComponent implements OnInit,OnDestroy{
//   title = 'firstPage';
  // mediaSub:Subscription | undefined;
  // deviceXs: boolean | undefined;
  // mediaSubscription: Subscription | undefined;
  // activeMediaQuery: string | undefined;
  // constructor(public mediaObserver: MediaObserver) {
  // }
  // //ngOnInit() {
  //   this.mediaSub = this.mediaObserver.media$.subscribe((res: MediaChange) => {
  //     console.log(res.mqAlias);
  //     this.deviceXs = res.mqAlias === "xs" ? true : false;
  //   })
  // }
  // ngOnDestroy() {
  //   this.mediaSub.unsubscribe();
 // //}

//  ngOnInit(): void {
//   this.mediaSubscription = this.mediaObserver
//     .asObservable()
//     .subscribe((change) => {
//       change.forEach((item) => {
//         this.activeMediaQuery = item
//           ? `'${item.mqAlias}' = (${item.mediaQuery})`
//           : '';
//         if (item.mqAlias === 'xs') {
//           this.loadMobileContent();
//         }
//         console.log('activeMediaQuery', this.activeMediaQuery);
//       });
//     });
// }

// loadMobileContent() {
//  // // Do something special since the viewport is currently
//   //// using mobile display sizes.
// }

// ngOnDestroy(): void {
//   this.mediaSubscription.unsubscribe();
// }
//}


