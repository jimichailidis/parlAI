import { Keyword } from './keyword';
import { MinistryDocument } from './ministry-document';
import { Reference } from './reference';
import { Serializable } from './serializable';
import { Entity } from './entity';

export class Question extends Serializable {
    id: number;
    content: string;
    keywords: Keyword[];
    entities: Entity[];
    questionClass: string;
    references: Reference[];
    documents: MinistryDocument[];
    topic: string;

    answer: string;

    constructor() {
        super();

        this.id = undefined;
        this.content = undefined;
        this.keywords = [];
        this.entities = undefined;
        this.questionClass = undefined;
        this.references = undefined;
        this.topic = undefined;
        this.documents = [];
    }

    // getKeywordsAsArray(): string[] {
    //     return this.keywords.split('#');
    // }

    // getEntitiesAsArray(): string[] {
    //     return this.entities.split(',');
    // }
}
