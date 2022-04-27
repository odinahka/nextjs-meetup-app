// /api/new-meetup

import {MongoClient} from 'mongodb'

const handler = async (req, res) => {
 if(req.method === 'POST'){
     const data = req.body;

    const client = await MongoClient.connect('mongodb+srv://odinakafocha:0DE$ca$h@odinaka.gbxje.mongodb.net/meetups?retryWrites=true&w=majority');
    const db = client.db();

    const meetupsCollection = db.collection('meetups');
    const result = await meetupsCollection.insertOne(data);
    res.status(201).json({message: 'Meetup Inserted!'});
    client.close();

   
 }
}

export default handler;