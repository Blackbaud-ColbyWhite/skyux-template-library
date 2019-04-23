import {
  NgModule
} from '@angular/core';

import {
  MyLibraryModule
} from './public';

// Specify entry components, module-level providers, etc. here.
import {
  AppSkyModule
} from './app-sky.module';

@NgModule({
  imports: [
    MyLibraryModule
  ],
  exports: [
    AppSkyModule,
    MyLibraryModule
  ],
  providers: [],
  entryComponents: []
})
export class AppExtrasModule { }
