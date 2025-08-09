import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedService } from './shared.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-firebase-todo-app';

  constructor(private sharedService: SharedService) {}

  notes: any = [];

  refreshNotes() {
    this.sharedService.getNotes().subscribe((res) => {
      this.notes = res;
    });
  }

  ngOnInit(): void {
    this.refreshNotes();
  }

  addNotes(newNotes: string) {
    this.sharedService.addNote(newNotes).then((res) => {
      console.log(res);
      this.refreshNotes();
    });
  }

   deleteNotes(id: string) {
    this.sharedService.deleteNote(id).then((res) => {
      console.log(res);
      this.refreshNotes();
    });
  }


}
