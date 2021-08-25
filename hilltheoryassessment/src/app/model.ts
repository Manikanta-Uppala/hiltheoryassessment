export interface Model {
  filter: any;
  rss: ModelObject;
}

export interface ModelObject {
  $: any;
  channel: Array<ModelChannel>;
}

export interface ModelChannel {
  'atom:link': Array<string>;
  title: Array<string>;
  link: Array<string>;
  description: Array<string>;
  language: Array<string>;
  copyright: Array<string>;
  docs: Array<string>;
  image: Array<ModelImage>;
  item: Array<ModelItem>;
  lastBuildDate: Date;
}

export interface ModelImage {
  title: Array<string>;
  link: Array<string>;
  url: Array<string>;
}

export interface ModelItem {
  title: Array<string>;
  description: Array<string>;
  link: Array<string>;
  guid: Array<string>;
  pubDate: Array<string>;
}
