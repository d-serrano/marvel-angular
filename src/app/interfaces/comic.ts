export interface Comic{
  id: number;
  title: string;
  description: string;
  variantDescription: string;
  format: string;
  resourceURI: string;
  pageCount: number;
  issueNumber: number;
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
  dates: Date[];

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

// Characters
interface Character {
  resourceUri: string;
  name: string;
}
// Creators 
interface Creator{
  name: string;
  roel: string
}
//Dates
interface Date {
  type: string;
  date: string;
}
// Event
interface Event {
  type: string;
  date: string;
}

// Stories
interface Story {
  type: string;
  name: string;
  resourceURI: string;
}