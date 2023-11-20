import {Component, OnInit} from '@angular/core';
import {CommentService} from "../../services/comment.service";
import {Comment} from "../../models/comment";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit{
  publication: any;
  comments: any;

  publicationId: string = '';
  datee: string = '';
  textt: string = '';

  constructor(private commentService: CommentService) {

  }

  ngOnInit(): void {
    const navigation = window.history.state;
    if (navigation && navigation.publication) {
      this.publication = navigation.publication;
    }
    this.publicationId=this.publication.id;
    const fechaActual = new Date();

    const dia = fechaActual.getDate().toString().padStart(2, '0');
    const mes = (fechaActual.getMonth() + 1).toString().padStart(2, '0');
    const anio = fechaActual.getFullYear();

    this.datee = `${dia}-${mes}-${anio}`;
  }

  addedComment():void{
    const userData = JSON.parse(localStorage.getItem('user') || '{}');
    if (userData && userData.id) {
      const commentData: Comment = {
        id: 'string',
        author: userData,
        date: this.datee,
        publicationId: 'string',
        text: this.textt
      };

      this.commentService.createComment(userData.id, this.publicationId.toString(),commentData).subscribe(
          (res)=>{
            console.log(res);
          },
          (err) => {
            console.log(err);
          }
      )
    }

    this.resetForm();
  }

  resetForm() {
    this.publicationId= '';
    this.datee= '';
    this.textt = '';
  }
}
