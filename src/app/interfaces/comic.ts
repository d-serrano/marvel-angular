import {
  Character,
  Creator,
  Date,
  Event,
  Story
} from './general';

export interface Comic{
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
  series: {
    name: string;
    resourceURI: string;
  }
  stories: {
    avaiable: number;
    collectionUri: string;
    items : Story [];
  }

}

