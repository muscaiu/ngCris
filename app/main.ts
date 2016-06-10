import { bootstrap }    from '@angular/platform-browser-dynamic';
import {enableProdMode} from '@angular/core';
import { AppComponent } from './app.component';
import { ROUTER_PROVIDERS } from '@angular/router-deprecated';

enableProdMode();
bootstrap(AppComponent, ROUTER_PROVIDERS);