import { Component, OnInit } from "@angular/core";
import { interval } from "rxjs";

import { tap, take } from "rxjs/operators";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  max = 1;
  current = 0;

  start() {
    this.current = 0;
    const maxTime = this.max;
    // const _isFinished = !this.isFinished;

    //emit value in sequence every 1 second
    const source = interval(1000);

    source
      //.pipe(takeWhile((_) => _isFinished))
      .pipe(take(maxTime))
      .pipe(tap((i) => (this.current += 1)))
      .subscribe();
  }

  /// reset timer
  reset() {
    this.current = 0;
    this.max = 0;
  }

  // // getters to prevent NaN errors
  get maxVal() {
    return isNaN(this.max) || this.max < 1 ? 1 : this.max;
  }

  get currentVal() {
    return isNaN(this.current) || this.current < 0 ? 0 : this.current;
  }

  get isFinished() {
    return parseFloat(`${this.currentVal}`) >= parseFloat(`${this.maxVal}`);
  }
}
