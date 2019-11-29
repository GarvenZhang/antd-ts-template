import { ClassificationItem } from '../index.d';

export interface State {
  classificationList: ClassificationItem[];
}

export const initialState: State = {
  classificationList: [],
};
