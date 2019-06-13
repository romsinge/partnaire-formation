import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { ROUTES } from './app.routes'
import { MaterialModule } from './modules/material/material.module'
import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppComponent } from './app.component'
import { PoneyComponent } from './components/poney/poney.component'
import { RainbowDirective } from './directives/rainbow.directive'
import { RaceComponent } from './components/race/race.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { PercentagePipe } from './pipes/percentage.pipe'
import { IsRacingPipe } from './pipes/is-racing.pipe'
import { TitleCasePipe } from '@angular/common'
import { RaceListComponent } from './components/race-list/race-list.component'
import { RaceCreateComponent } from './components/race-create/race-create.component'
import { RouterModule } from '@angular/router'
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PoneyCreateComponent } from './components/poney-create/poney-create.component';
import { EffectsModule } from '@ngrx/effects';
import { EntityDataModule } from '@ngrx/data';
import { DATA_CONFIG } from './store/store';
import { MessageModalComponent } from './components/message-modal/message-modal.component';
import { RaceEffects } from './store/effects/race.effects';

@NgModule({
  declarations: [
    AppComponent,
    PoneyComponent,
    RainbowDirective,
    RaceComponent,
    PercentagePipe,
    IsRacingPipe,
    RaceListComponent,
    RaceCreateComponent,
    PoneyCreateComponent,
    MessageModalComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule.forRoot(ROUTES),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument({
      maxAge: 100
    }),
    EffectsModule.forRoot([RaceEffects]),
    EntityDataModule.forRoot(DATA_CONFIG)
  ],
  providers: [
    TitleCasePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
