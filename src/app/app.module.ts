import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Employeecomponent } from './employee/employee.component';
import { studentcomponent } from './student/student.component';
import { Student2Component } from './student2/student2.component';
import { StringinterpolationComponent } from './stringinterpolation/stringinterpolation.component';
import { PropertybindingComponent } from './propertybinding/propertybinding.component';
import { StylebindingComponent } from './stylebinding/stylebinding.component';
import { ClassbindingComponent } from './classbinding/classbinding.component';
import { Eventbinding1Component } from './eventbinding1/eventbinding1.component';
import { Eventbinding2Component } from './eventbinding2/eventbinding2.component';
import { Eventbinding3Component } from './eventbinding3/eventbinding3.component';
import { FormsModule } from '@angular/forms';
import { IfdirectiveComponent } from './ifdirective/ifdirective.component';
import { FordirectiveComponent } from './fordirective/fordirective.component';
import { SwitchdirectiveComponent } from './switchdirective/switchdirective.component';
import { ParentComponent } from './parent/parent.component';
import { ChieldComponent } from './chield/chield.component';
import { Chield2Component } from './chield2/chield2.component';
import { InbuildpipeComponent } from './inbuildpipe/inbuildpipe.component';
import { CustompipeComponent } from './custompipe/custompipe.component';
import { summarypipe } from './utility/summary.pipe';
import { Custompipe2Component } from './custompipe2/custompipe2.component';
import { sumaarypipe2 } from './summary1.pipe';
import { CourseComponent } from './course/course.component';
import { couresservice } from './utility/course.service';
import { Course1Component } from './course1/course1.component';
import { course1service } from './utility/course1.service';
import { Course2Component } from './course2/course2.component';
import { courseservices2 } from './utility/course2.service';

@NgModule({
  declarations: [
    AppComponent,
    Employeecomponent,
    studentcomponent,
    Student2Component,
    StringinterpolationComponent,
    PropertybindingComponent,
    StylebindingComponent,
    ClassbindingComponent,
    Eventbinding1Component,
    Eventbinding2Component,
    Eventbinding3Component,
    IfdirectiveComponent,
    FordirectiveComponent,
    SwitchdirectiveComponent,
    ParentComponent,
    ChieldComponent,
    Chield2Component,
    InbuildpipeComponent,
    CustompipeComponent,
    summarypipe,
    Custompipe2Component,
    sumaarypipe2,
    CourseComponent,
    Course1Component,
    Course2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [couresservice,course1service, courseservices2],
  bootstrap: [AppComponent]
})
export class AppModule { }
