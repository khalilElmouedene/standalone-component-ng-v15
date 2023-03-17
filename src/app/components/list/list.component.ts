import { AsyncPipe, NgFor } from '@angular/common';
import { Component, inject } from '@angular/core';
import { type Observable } from 'rxjs';
import { AppService } from 'src/app/providers/app-service.service';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [NgFor, AsyncPipe],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  private readonly _appService = inject(AppService);

  readonly todos$: Observable<Array<any>> = this._appService.getTodos();
}
