
const { getId, getDocument, getDocuments, getFilteredDocuments, addDocument, updateDocument, deleteDocument } = require('../../db/db');
const db = require('../../db/db');

module.exports = (app) => {
    //get all divisions
    app.get('/api/:collection', async (req, res) => {
        try {
            const col = req.params.collection;
            const divs = await db.getDocuments(col);
            res.json(divs);
        } catch (e) {
            res.json({ error: e, success: 0 });
        }
    });
    //get all sub-division where div_id: div id
    app.get('/api/:collection/:field/:value', async (req, res) => {

        try {
            const col = req.params.collection;
            const field1 = req.params.field;
            const value1 = req.params.value;
            const divs = await db.getFilteredDocuments(col, field1, value1);
            res.json(divs);
            //let o = [col, field1, value1];
            //res.json(o);
        } catch (e) {
            res.json({ error: e, success: 0 });
        }
    });



    //get single division by id
    app.get('/api/:collection/:id', async (req, res) => {
        try {
            const col = req.params.collection;
            const id = req.params.id;
            const data = await db.getDocument(col, id);
            res.json(data);
        } catch (e) {
            res.json({ error: e, success: 0 });
        }
    });

    //add a new divition
    app.post('/api/:collection', async (req, res) => {
        const col = req.params.collection;
        //const r_title = req.body.title;
        let ob = req.body;
        const obj = { _id: getId(col), ...ob }
        // let obj = {
        //     _id: getId(col),
        //     title: r_title
        // }
        try {
            await db.addDocument(col, obj);
            res.json({ new_doc: obj, success: 400 });
        } catch (e) {
            res.json({ error: e, success: 503 });
        }
        // db.addDocument(col, obj)
        //     .then(d => res.json({ doc: d, success: 400 }))
        //     .catch(e1 => {
        //         res.json({ error: e1, success: 503 });
        //     });

    });

    //update existing document
    app.put('/api/:collection/:id', async (req, res) => {
        const col = req.params.collection;
        const r_id = req.params.id;
        const r_title = req.body.title;
        let obj = {
            _id: r_id,
            title: r_title
        }
        try {
            await db.updateDocument(col, obj);
            res.json({ updated_doc: obj, success: 400 })
        } catch (e) {
            res.json({ error: e, success: 503 });
        }
    });

    //delte a document
    app.delete('/api/:collection/:id', async (req, res) => {
        const col = req.params.collection;
        const r_id = req.params.id;
        try {
            await db.deleteDocument(col, r_id);
            res.json({ delted_id: r_id, success: 400 })
        } catch (e) {
            res.json({ error: e, success: 503 });
        }
    });

}