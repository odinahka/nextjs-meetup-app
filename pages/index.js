import { Fragment } from "react";
import Head from "next/head";
import { MongoClient } from "mongodb";
import MeetupList from "../components/meetups/MeetupList";

const HomePage = (props) => {
  return (
    <Fragment>
      <Head>
        <title>React Meetups</title>
        <meta
          name="description"
          content="Browse a huge list of active React meetups"
        />
      </Head>
      <MeetupList meetups={props.meetups} />
    </Fragment>
  );
};

// export const getServerSideProps = async (context) => {
//     const {req, res} = context;

//     //fetch data from an API
//     return {
//         props: {
//          meetups: DUMMY_MEETUPS
//         }
//     }
// }

export const getStaticProps = async () => {
  //fetch data from api
  const client = await MongoClient.connect(
    "mongodb+srv://odinakafocha:0DE$ca$h@odinaka.gbxje.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();
  const meetupsCollection = db.collection("meetups");
  const meetups = await meetupsCollection.find().toArray();
  client.close();
  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
      revalidate : 1
    },
  };
};
export default HomePage;
