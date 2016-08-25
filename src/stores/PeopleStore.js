import { EventEmitter } from 'events'
import AppDispatcher from '../AppDispatcher'

let _people = [];

class PeopleStore extends EventEmitter {
  constructor(){
    super();
       AppDispatcher.register(action => {
          switch(action.type){
          case 'RECEIVE_PERSON':    var {person} = action;
                                    _people.push(person)
                                     this.emit('CHANGE');
                                     break;
          case 'RECEIVE_ALL_PEOPLE': _people =action.people 
                                      this.emit('CHANGE')
                                      break;

          case 'DELETE_PERSON':       this.emit('CHANGE');
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
    console.log('inside personstore getall:')
    console.log('_people:', _people)
    return _people;
  }
}

export default new PeopleStore();