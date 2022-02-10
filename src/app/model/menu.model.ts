export class MenuModel {
    caption : string;
    route : string;
    icon : string;
    constructor(caption : string,
        route : string, icon : string){
            this.caption = caption;
            this.route = route;
            this.icon = icon;
        }
}