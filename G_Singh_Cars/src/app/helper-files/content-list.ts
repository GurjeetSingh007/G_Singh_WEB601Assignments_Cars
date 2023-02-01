import { Content } from "./content-interface";

export class ContentList{
    private contents: Content[];

    constructor(){
        this.contents = [];
    }

    get contentsList() {
        return this.contents;
    }

    add(content: Content){
        this.contents.push(content);
    }

    count(){
        return this.contents.length;
    }

    getContentDetails(index: number){
        let content = this.contents[index];
        return `<h1>${content.title}</h1>
                <div>${content.description}</div>
                <div>${content.creator}</div>
                <p>${content.type}</p>
                <img src="${content.imgURL}">`;
    }
}