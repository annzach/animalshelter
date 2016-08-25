import { EventEmitter } from 'events'
import AppDispatcher from '../AppDispatcher'

let _pets = [];
let _ownerlesspets = [];

class AnimalStore extends EventEmitter {

  constructor(){
    super();
   
    AppDispatcher.register(action => {
      switch(action.type){
        case 'RECEIVE_PET': var {pet} = action;
                              _pets.push(pet)
                             this.emit('CHANGE');
                             break;

        case 'RECEIVE_ALL_PETS': _pets = action.pets;
                                this.emit('CHANGE');
                                break;
        case 'DELETE_PET': this.emit('CHANGE');
                            break;

        case 'PETS_WITHOUT_OWNER': _ownerlesspets = action.pets;
                                         this.emit('CHANGE');
                                         break;
      }
    });



  }


  startListening(cb) {
    this.on('CHANGE', cb);
  }

  stopListening(cb) {
    this.removeListener('CHANGE', cb);
  }

  getAll() {
    console.log('insidegetall:')
    console.log('_pets:', _pets)
    return _pets;
  }

  getOwnerlessPets(){
    return _ownerlesspets;
  }
}

export default new AnimalStore();