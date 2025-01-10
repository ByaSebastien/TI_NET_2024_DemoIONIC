import {Component, inject, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {
  ActionSheetController,
  IonButton,
  IonContent,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem, IonList,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';
import {addIcons} from "ionicons";
import {add, checkmark, trash, closeOutline} from "ionicons/icons";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.page.html',
  styleUrls: ['./todo.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonItem, IonInput, IonButton, IonIcon, IonList]
})
export class TodoPage implements OnInit {

  private readonly _asController: ActionSheetController = inject(ActionSheetController);

  taskName: string = '';
  tasks: TaskModel[] = [];

  constructor() {
    addIcons({add, checkmark, trash, closeOutline});
  }

  ngOnInit() {
  }

  addTask() {
    if(!this.taskName.trim()){
      return;
    }
    this.tasks = [...this.tasks,{name: this.taskName,checked: false}];
    this.taskName = '';
  }

  async displayActions(task: TaskModel) {
    const as = await this._asController.create({
      header: 'Actions',
      buttons: [
        {
          text: task.checked ? 'Invalider' : 'Valider',
          icon: checkmark,
          handler: () => task.checked = !task.checked,
        },
        {
          text: 'Annuler',
          icon: closeOutline
        }
      ],
    });

    await as.present();
  }
}

interface TaskModel {
  name: string;
  checked: boolean;
}
