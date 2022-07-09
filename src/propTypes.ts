export interface propTypes {
  post: postType;
  order_key: number;
  contentsLoaded?: boolean;
  forKey?: number;
  specialLayout?: boolean;
}
  
export interface postType {
  name: string;
  writtenBy: string;
  writtenOn: string;
  authorLabel: string;
  post: string;
  imgUrl: string;
}
  
export interface dynamicStyleType {
  bgColor: string;
  primaryText: string;
  secondaryText: string;
}

export interface topicHeadingType {
  topic: string;
  fontSize?: string;
}

export interface featuredArticlesType extends Array<postType> {}

export type UserProps = {
  userId: string;
  isAdmin: boolean;
}