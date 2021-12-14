import { v4 as uuidv4 } from 'uuid';

export default new class MemoryService{
  private memDB: Map<String, String>

  constructor(){
    this.memDB = new Map()
  }

  private static checkKeyExists(key: String){
    
  }

  public createEntry(file: String){
    const key = uuidv4();
    this.memDB.set(key, file)
    return key
  }

  public getEntry(key: String){
    return this.memDB.get(key) 
  }

  public deleteEntry(key: String){
    this.memDB.delete(key)
  }

}