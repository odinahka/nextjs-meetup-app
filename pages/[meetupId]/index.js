import { Fragment } from "react";
import Head from "next/head";
import { MongoClient, ObjectId } from "mongodb";
import MeetupDetail from "../../components/meetups/MeetupDetail";

const MeetupDetails = (props) => {
  return (
    <Fragment>
      <Head>
        <title>{props.title}</title>
        <meta
          name="description"
          content={props.description}
        />
      </Head>
      <MeetupDetail
        title={props.title}
        address={props.address}
        image={props.image}
        description={props.description}
      />
    </Fragment>
  );
};

export const getStaticPaths = async () => {
  const client = await MongoClient.connect(
    "mongodb+srv://odinakafocha:0DE$ca$h@odinaka.gbxje.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();
  const meetupsCollection = db.collection("meetups");
  const meetupsIds = await meetupsCollection.find({}, { _id: 1 }).toArray();
  client.close();
  return {
    fallback: false,
    paths: meetupsIds.map((meetupsId) => ({
      params: { meetupId: meetupsId._id.toString() },
    })),
  };
};
export const getStaticProps = async (context) => {
  const { meetupId } = context.params;
  const client = await MongoClient.connect(
    "mongodb+srv://odinakafocha:0DE$ca$h@odinaka.gbxje.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();
  const meetupsCollection = db.collection("meetups");
  const meetup = await meetupsCollection.findOne({ _id: ObjectId(meetupId) });
  client.close();
  return {
    props: {
      title: meetup.title,
      address: meetup.address,
      image: meetup.image,
      description: meetup.description,
    },
    revalidate: 10,
  };
};

export default MeetupDetails;
