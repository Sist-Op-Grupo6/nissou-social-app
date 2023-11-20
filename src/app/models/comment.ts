import {user} from "./user";

export interface Comment {

  id: any,
  author?: user | null,
  publicationId: any,
  date: any,
  text: any

}
