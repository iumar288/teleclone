import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: 'e50ce7ba-2727-4f3f-a20d-b2cffd123847',
};

export const sampleWithPartialData: IAuthority = {
  name: 'a3d95734-d1bc-4c81-b642-3af134a7ac8c',
};

export const sampleWithFullData: IAuthority = {
  name: '0ea22def-33b9-476d-a0f6-03b466a1686c',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
