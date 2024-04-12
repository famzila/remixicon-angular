import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { Remixicons } from '@remixicon/angular';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Remixicons],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'remixicon-showcase';
  selectedStep = 0;
  stepOne=`
  @import '~@remixicon/angular/styles/remixicon.css';
  `;
  stepTwo=`
// standalone component case
@Component({
  selector: 'app-cmp',
  standalone: true,
  imports: [Remixicons],
  templateUrl: './my.component.html',
  styleUrl: './my.component.scss'
})
export class MyComponent {...}

// module case
@NgModule({
  declarations: [AppComponent],
  imports: [Remixicons],
  bootstrap: [AppComponent]
})
export class AppModule {...}
  `;
  stepThree=`
  <remixicon iconName="ri-admin-line"/>
  <remixicon iconName="ri-admin-line ri-fw"/><!-- fixed width -->
  <remixicon iconName="ri-admin-line ri-xxs"/><!-- 0.5em -->
  <remixicon iconName="ri-admin-line ri-xs"/><!-- 0.75em -->
  <remixicon iconName="ri-admin-line ri-sm"/><!-- 0.875em -->
  <remixicon iconName="ri-admin-line ri-1x"/><!-- 1em -->
  <remixicon iconName="ri-admin-line ri-lg"/><!-- 1.3333em -->
  <remixicon iconName="ri-admin-line ri-xl"/><!-- 1.5em -->
  <remixicon iconName="ri-admin-line ri-2x"/><!-- 2em -->
  <remixicon iconName="ri-admin-line ri-3x"/><!-- 3em -->
  ...
  <remixicon iconName="ri-admin-line ri-10x"/><!-- 10em -->
  `;
  stepFour=`
  <remixicon iconName="ri-admin-line" color="red" size="24px"></remixicon>
  `;

  steps= [
    { step: 1, title: 'First, import styles file', snippet: this.stepOne },
    { step: 2, title: 'Import the Remixicons in your module or component', snippet: this.stepTwo },
    { step: 3, title: 'Minimal usage, by providing only the icon name', snippet: this.stepThree },
    { step: 4, title: 'More customization, by providing the icon color and size', snippet: this.stepFour },
  ];

  toggleStep(step: number): void {
    if (this.selectedStep === step) {
      this.selectedStep = 0;
    } else {
      this.selectedStep = step;
    }
  }
}
