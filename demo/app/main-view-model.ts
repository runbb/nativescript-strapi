import { Observable } from 'tns-core-modules/data/observable';
import { Strapi } from 'nativescript-strapi';

export class HelloWorldModel extends Observable {
  public message: string;
  private strapi: Strapi;

  constructor() {
    super();

    this.strapi = new Strapi();
  }
}
