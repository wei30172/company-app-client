export type InputType = {
  id: number;
  label: string;
  errorMessage: string;
  name: string;
  type: string;
  placeholder: string;
  pattern?: string;
  required: boolean;
};

export type CarouselItemType = {
  idx: number;
  title: string;
  imageName: string;
};
