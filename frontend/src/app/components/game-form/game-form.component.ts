import { Component, OnInit, Host, HostBinding } from '@angular/core';
import { Game } from '../../models/Game';
import{ ActivatedRoute,Router } from '@angular/router';
import{ GamesService } from '../../services/games.service';
@Component({
  selector: 'app-game-form',
  templateUrl: './game-form.component.html',
  styleUrls: ['./game-form.component.css']
})
export class GameFormComponent implements OnInit {

  @HostBinding('class') clases='row';

  game: Game={
    id: 0,
    title:'',
    description:'',
    image:'',
    created_at: new Date()
  };
  edit: boolean=false
  constructor(private gameService: GamesService, private router:Router, private activedRoute: ActivatedRoute) { }

  ngOnInit() {
    const params = this.activedRoute.snapshot.params;
    if (params.id){
      this.gameService.getGame(params.id)
      .subscribe(
        res =>{
          console.log(res);
          //this.game=res;
          this.edit=true;
        },
        err=>console.log(err)
      )
    }
  }
  saveNewGame (){
    delete this.game.created_at;
    delete this.game.id;

    this.gameService.saveGame(this.game)
    .subscribe(
      res=>{
        console.log(res);
        this.router.navigate(['/juegos']);
      },
      err => console.error(err)
    )
  }
  updateGame() {
    delete this.game.created_at;
    this.gameService.updateGame(this.game.id, this.game)
      .subscribe(
        res => { 
          console.log(res);
          this.router.navigate(['/juegos']);
        },
        err => console.error(err)
      )
  }
}
