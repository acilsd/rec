import { action, observable } from 'mobx';

export interface ITestStore {
  username: string;
  password: string;
  setUsername(username: string): void;
  setPassword(password: string): void;
}

class TestStore implements ITestStore {
  @observable username: string = '';
  @observable password: string = '';

  @action.bound
  setUsername(username: string) {
    this.username = username;
  }

  @action.bound
  setPassword(password: string) {
    this.password = password;
  }
}

export default new TestStore();
