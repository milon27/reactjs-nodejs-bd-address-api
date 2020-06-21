const firebase = require('./config');
const db = firebase.firestore();

//generate id
const getId = (_collection) => {
    const id = db.collection(_collection).doc().id;
    return id;
}

//get all documents
const getDocuments = async (_collection) => {
    const docs = await db.collection(_collection).get();
    let all_doc = [];
    docs.forEach((doc) => {
        //console.log(`${doc.id} => ${doc.data()}`);
        all_doc.push(doc.data());
    });
    return all_doc;
}
//get all documents where id=?
const getFilteredDocuments = async (_collection, _field, _value) => {
    const docs = await db.collection(_collection).where(_field, "==", _value).get();
    let all_doc = [];
    docs.forEach((doc) => {
        //console.log(`${doc.id} => ${doc.data()}`);
        all_doc.push(doc.data());
    });
    return all_doc;
}



//get a single document
const getDocument = async (_collection, _doc) => {
    const doc = await db.collection(_collection).doc(_doc).get();
    return doc.data();
}

//add a single document
const addDocument = async (_collection, _obj) => {
    await db.collection(_collection).doc(_obj._id).set(_obj);
    /**
     * using promise
     */
    // return new Promise((resolve, reject) => {
    //     db.collection(_collection).doc(_obj._id).set(_obj)
    //         .then(() => {
    //             resolve(_obj);
    //         }).catch(e => {
    //             reject(e);
    //         });
    // });
}

// update a document
const updateDocument = async (_collection, _obj) => {
    await db.collection(_collection).doc(_obj._id).set(_obj, { merge: true });
}

//delete a document
const deleteDocument = async (_collection, _obj_id) => {
    await db.collection(_collection).doc(_obj_id).delete();
}

module.exports = {
    getId,
    getDocuments,
    getFilteredDocuments,
    getDocument,
    addDocument,
    updateDocument,
    deleteDocument
}
