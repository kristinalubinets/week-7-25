class HashTable {
    constructor() {
        this.table = new Array(127);  //all key/value pairs will be stored inside the table property
        this.size = 0;
    }
    hash(key) {
        let hash = 0;
        for(let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);   //can improve by multiplying char's ascii code by the order position of that char in the key, and then summing the values into hash
        }
        return hash % this.table.length;
    }
    set(key, value) {
        const index = this.hash(key);
        this.table[index] = [key, value];
        this.size++;
    }
    get(key) {
        const target = this.hash(key);
        return this.table[target];
    }
    remove(key) {
        const index = this.hash(key);

        if(this.table[index] && this.table[index].length) {
            this.table[index] = undefined;
            this.size--;

            return true;
        } else {
            return false;
        }
    }  
}

const ht = new HashTable();
ht.set('Roses', 300);
ht.set('Lilies', 100);
ht.set('Sunflowers', 110);

console.log(ht.get('Rose'));
console.log(ht.size);
ht.remove('Sunflowers');
console.log(ht.get('Sunflowers'))
console.log(ht.size);


