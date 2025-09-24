const { loadDB , saveDB } = "./persistencia";
const args = process.argv.slice(2);
const command = args[0];

const store = loadDB();

switch (command) {
    case 'post':
        const value = args[1];
        if (!value) {
            console.log('Please provide a value to post.');
            break;
        }
        store.push(value);
        saveDB(store);
        console.log(`Posted: ${value}`);
        break;
    case 'get':
        console.log('Store contents:', store);
        break;
    case 'put':
        const putIndex = parseInt(args[1], 10);
        const putValue = args[2];
        if (isNaN(putIndex) || putValue === undefined) {
            console.log('Please provide a valid index and value to put.');
            break;
        } if (putIndex >= 0 && putIndex < store.length) {
            store[putIndex] = putValue;
            saveDB(store);
            console.log(`Updated index ${putIndex} with value: ${putValue}`);
            break;
        } else {
            console.log('Index out of bounds.');
            break;
        }
    case 'delete':
        const index = parseInt(args[1], 10);
        if (isNaN(index)) {
            console.log('Please provide a valid value to delete.');
            break;
        } if (store[index]) {
            store.splice(index, 1);
            console.log(`Deleted value at index: ${index}`);
            break;
        } else {
            console.log('Index out of bounds.');
            break;
        }
    default:
        console.log('Unknown command. Use "post <value>", "get", or "delete <value>".');
}
