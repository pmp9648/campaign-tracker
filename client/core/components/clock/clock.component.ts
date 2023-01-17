import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'clock',
  templateUrl: 'clock.component.html'
})
export class ClockComponent implements OnInit {

  border: number;

  @Input() title = 'Roll-ex'
  @Input() size: number = 300;
  @Input() hour;
  @Input() minute;
  @Input() second;
  @Input() date: Date;

  ngOnInit() {
    this.border = this.size / 25;

    this.date = this.date ?? new Date();
    this.second = this.second ? this.second * 6 : this.date.getSeconds() * 6;
    this.minute = this.minute ? this.minute * 6 : this.date.getMinutes() * 6;
    this.hour = this.hour ? this.hour * 30 + Math.round(this.minute / 12) : this.date.getHours() * 30 + Math.round(this.minute / 12)

    // setInterval(() => {
    //   this.second;
    //   this.minute;
    //   this.hour;
    // }, 1000);
  }

  titleClass = 'mat-subheading-2 mt' + this.size / 10;

  dial(): object {
    return {
      'width.px': this.size,
      'height.px': this.size,
      'border-width.px': this.size / 25,
      'border': 'solid #563727',
      'background-color': 'rgba(222, 158, 72, 0.4)',
      'border-radius': '50%',
      'margin': '0 auto',
      'position': 'relative'
    };
  }

  hourHandWrapper(): object {
    return {
      'width.px': this.size / 1.66667,
      'height.px': this.size / 1.66667,
      'position': 'absolute',
      'top.px': this.size / 6.25,
      'left.px': this.size / 6.25,
      'border-radius': '50%',
      'transform': 'rotate(' + this.hour + 'deg)',
    }
  }

  hourHand(): object {
    return {
      'width.px': this.size / 125,
      'height.px': this.size / 3.333334,
      'background-color': '#563727',
      'position': 'absolute',
      'left.px': this.size / 3.378378,
    }
  }


  hourHandArrow(): object {
    return {
      'font-size.px': this.size / 16.6667,
      'font-weight': this.size > 250 ? 'bold' : '',
      'color': '#563727',
      'transform': 'rotate(180deg)',
      'position': 'absolute',
      'left.px': this.size / 3.57142,
      'top.px': this.size / -71.4285714,
    }
  }

  minuteHandWrapper(): object {
    return {
      'width.px': this.size / 1.25,
      'height.px': this.size / 1.25,
      'position': 'absolute',
      'top.px': this.size / 16.66667,
      'left.px': this.size / 16.66667,
      'border-radius': '50%',
      'transform': 'rotate(' + this.minute + 'deg)',
    }
  }

  minuteHand(): object {
    return {
      'width.px': this.size / 125,
      'height.px': this.size / 2.5,
      'background-color': '#563727',
      'position': 'absolute',
      'left.px': this.size / 2.52525252,
    }
  }

  minuteHandArrow(): object {
    return {
      'font-size.px': this.size / 16.6667,
      'font-weight': this.size > 250 ? 'bold' : '',
      'color': '#563727',
      'transform': 'rotate(180deg)',
      'position': 'absolute',
      'left.px': this.size / 2.63157895,
      'top.px': this.size / -71.4285714,
    }
  }

  secondHandWrapper(): object {
    return {
      'width.px': this.size / 1.42857,
      'height.px': this.size / 1.42857,
      'position': 'absolute',
      'top.px': this.size / 9.090909,
      'left.px': this.size / 9.090909,
      'border-radius': '50%',
      'transform': 'rotate(' + this.second + 'deg)',
    }
  }

  secondHand(): object {
    return {
      'width.px': this.size / 250,
      'height.px': this.size / 2.857,
      'background-color': '#aa7228',
      'position': 'absolute',
      'left.px': this.size / 2.87356,
    }
  }

  point(): object {
    return {
      'width.px': this.size / 25,
      'height.px': this.size / 25,
      'background-color': '#563727',
      'border-radius': '50%',
      'position': 'absolute',
      'top.px': this.size / 2.27,
      'left.px': this.size / 2.27,
    }
  }

  hour1(): object {
    return {
      'font-size.px': this.size / 16.6667,
      'font-weight': this.size > 250 ? 'bold' : '',
      'color': '#372c2e',
      'position': 'absolute',
      'font-size': this.size / 16.6667,
      'top.px': this.size / 12.5,
      'right.px': this.size / 4.1667,
    }
  }
  hour2(): object {
    return {
      'font-size.px': this.size / 16.6667,
      'font-weight': this.size > 250 ? 'bold' : '',
      'color': '#372c2e',
      'position': 'absolute',
      'top.px': this.size / 4.347,
      'right.px': this.size / 11.11,
    }
  }
  hour3(): object {
    return {
      'font-size.px': this.size / 16.6667,
      'font-weight': this.size > 250 ? 'bold' : '',
      'color': '#372c2e',
      'position': 'absolute',
      'top.px': this.size / 2.27,
      'right.px': this.size / 50,
    }
  }
  hour4(): object {
    return {
      'font-size.px': this.size / 16.6667,
      'font-weight': this.size > 250 ? 'bold' : '',
      'color': '#372c2e',
      'position': 'absolute',
      'top.px': this.size / 1.5625,
      'right.px': this.size / 11.11,
    }
  }
  hour5(): object {
    return {
      'font-size.px': this.size / 16.6667,
      'font-weight': this.size > 250 ? 'bold' : '',
      'color': '#372c2e',
      'position': 'absolute',
      'top.px': this.size / 1.25,
      'right.px': this.size / 4.1667,
    }
  }
  hour6(): object {
    return {
      'font-size.px': this.size / 16.6667,
      'font-weight': this.size > 250 ? 'bold' : '',
      'color': '#372c2e',
      'position': 'absolute',
      'bottom.px': this.size / 50,
      'left.px': this.size / 2.27272727,
    }
  }
  hour7(): object {
    return {
      'font-size.px': this.size / 16.66667,
      'font-weight': this.size > 250 ? 'bold' : '',
      'color': '#372c2e',
      'position': 'absolute',
      'top.px': this.size / 1.25,
      'left.px': this.size / 4.1667,
    }
  }
  hour8(): object {
    return {
      'font-size.px': this.size / 16.6667,
      'font-weight': this.size > 250 ? 'bold' : '',
      'color': '#372c2e',
      'position': 'absolute',
      'top.px': this.size / 1.5625,
      'left.px': this.size / 12.5,
    }
  }
  hour9(): object {
    return {
      'font-size.px': this.size / 16.6667,
      'font-weight': this.size > 250 ? 'bold' : '',
      'color': '#372c2e',
      'position': 'absolute',
      'top.px': this.size / 2.27,
      'left.px': this.size / 50,
    }
  }
  hour10(): object {
    return {
      'font-size.px': this.size / 16.6667,
      'font-weight': this.size > 250 ? 'bold' : '',
      'color': '#372c2e',
      'position': 'absolute',
      'top.px': this.size / 4.347,
      'left.px': this.size / 12.5,
    }
  }
  hour11(): object {
    return {
      'font-size.px': this.size / 16.6667,
      'font-weight': this.size > 250 ? 'bold' : '',
      'color': '#372c2e',
      'position': 'absolute',
      'top.px': this.size / 12.5,
      'left.px': this.size / 4.1667,
    }
  }
  hour12(): object {
    return {
      'font-size.px': this.size / 16.6667,
      'font-weight': this.size > 250 ? 'bold' : '',
      'color': '#372c2e',
      'position': 'absolute',
      'top.px': this.size / 50,
      'left.px': this.size / 2.38095,
    }
  }

}