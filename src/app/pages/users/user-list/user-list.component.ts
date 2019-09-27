import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  public users: any[] = [];
  
  constructor(private userService: UsersService) { }

  ngOnInit() {
    this.userService.listar().toPromise().then(data =>{
      
      console.log('data', data);
      this.users = data.usuarios;

    }).catch(error => {
      console.log('error', error);
    });
  }

}
