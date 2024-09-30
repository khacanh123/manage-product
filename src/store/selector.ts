import { RootStateOrAny } from 'react-redux';

export const UserData = (state: RootStateOrAny) => state.auth.dataUser;