export interface propTypes {
  post: postType;
  order_key: number;
}
  
export  interface postType {
  name: string;
  writtenBy: string;
  writtenOn: string;
  authorLabel: string;
  imgUrl: string;
}
  
export  interface dynamicStyleType {
  bgColor: string;
  primaryText: string;
  secondaryText: string;
}

export interface topicHeadingType {
  topic: string;
  fontSize?: string;
}