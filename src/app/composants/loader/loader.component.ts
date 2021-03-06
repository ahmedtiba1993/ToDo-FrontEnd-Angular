import { Component, OnInit , OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoaderState } from './loader.model';
import { LoaderService } from './service/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

  show = false;
  subscription : Subscription | undefined

  constructor(
    private loaderService : LoaderService
  ) { }

  ngOnInit(): void {
    this.subscription = this.loaderService.loaderState
    .subscribe((state:LoaderState) =>{
      this.show = state.show
    })
  }

  ngOnDestroy(){
    this.subscription?.unsubscribe()
  }
}
