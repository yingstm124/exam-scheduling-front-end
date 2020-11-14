import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { LoadingService } from '../../service/loading.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {

  showLoad = false;

  constructor(
    private loadingService: LoadingService,
    private cdRef: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.init()
  }

  init() {
    this.loadingService.getLoaderObserver().subscribe((status) => {
      this.showLoad = status === 'start'
      this.cdRef.detectChanges()

    })
  }

}
