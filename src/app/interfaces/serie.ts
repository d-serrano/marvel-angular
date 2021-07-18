import {
  Character,
  Creator,
  Date,
  Event,
  Story
} from './general';
export interface Serie {
  id: number;
  title: string;
  description: string;
  variantDescription: string;
  format: string;
  type: string;
  resourceURI: string;
  pageCount: number;
  issueNumber: number;
  startYear: number;
  endYear: number;
  characters: {
    available: number;
    items: Character[];
  }
  thumbnail: {
    extension: string;
    path: string;
  }
  creators: {
    avaiable: number;
    collectionUri: string;
    items: Creator[];
  }
  dates: {
    items: Date[];
  };

  events: {
    avaiable: number;
    collectionUri: string;
    items: Event[];
  }
  stories: {
    avaiable: number;
    collectionUri: string;
    items : Story [];
  }
  comics: {
    avaliable: number;
    collectionUri: string;
    items: {
      name: string;
      resourceURI: string;
    } [];
  }

}