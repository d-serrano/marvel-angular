// Characters
export interface Character {
  resourceUri: string;
  name: string;
}
// Creators 
export interface Creator{
  name: string;
  role: string
}
//Dates
export interface Date {
  type: string;
  date: string;
}
// Event
export interface Event {
  type: string;
  date: string;
}

// Stories
export interface Story {
  type: string;
  name: string;
  resourceURI: string;
}