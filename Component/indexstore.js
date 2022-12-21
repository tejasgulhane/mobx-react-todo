import Store from './Store'
import Authstore from './Authstore';

class RootStore {
    constructor() {
      this.Store = new Store(this);
      this.authStore = new Authstore(this);
    }
}    
export default RootStore 

