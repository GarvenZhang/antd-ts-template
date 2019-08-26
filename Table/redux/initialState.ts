import { ClassificationItem } from "../type";

export interface InitialState {
  classificationList: ClassificationItem[];
  curClassification: ClassificationItem | object;
}

export const initialState: InitialState = {
  classificationList: [],
  curClassification: {}
};
