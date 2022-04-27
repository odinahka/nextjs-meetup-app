import { Fragment } from "react";
import Head from "next/head";
import { MongoClient } from "mongodb";
import MeetupList from "../components/meetups/MeetupList";
const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://www.njarchitects.co.uk/wp-content/uploads/2020/04/La-Pedrera-Barcelona-architecture.png",
    address: "La Pedrera, Barcelona",
    description:
      "Nested among the streets of Barcelona are some beautiful and unusual buildings by world-famous architect Antoni Gaudi. His unique approach has generated some of the most creative buildings in the world, including La Pedrera",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image:
      "https://www.njarchitects.co.uk/wp-content/uploads/2020/04/Las-Lajas-Sanctuary-Nari%C3%B1o-architecture.png",
    address: "Las Lajas Sanctuary, Nariño",
    description:
      "This gothic-looking church is built inside a canyon and impressively connects one side of it to the other. It's located in Southern Colombia, the site where a woman and her daughter reportedly saw an apparition of Virgin Mary in 1754, which made the previously deaf and mute daughter able to speak.",
  },
  {
    id: "m3",
    title: "A Third Meetup",
    image:
      "https://www.njarchitects.co.uk/wp-content/uploads/2020/04/Dome-of-The-Rock-architecture.png",
    address: "Dome of The Rock, Jerusalem",
    description:
      "The Dome of The Rock is a 7th century building, and a masterpiece of Islamic architecture. The octagonal plan and the rotunda dome of wood are of Byzantine design. The Persian tiles on the exterior were added in 1561.",
  },
  {
    id: "m4",
    title: "A Fourth Meetup",
    image:
      "https://www.njarchitects.co.uk/wp-content/uploads/2020/04/St-Basils-Cathedral-Moscow-architecture.png",
    address: "St Basil's Cathedral, Moscow",
    description:
      "This garish, candy coloured cathedral is Moscow's most visited tourist attraction. The famous landmark is shaped to resemble the flame of a bonfire rising into the sky, and marks the geometric centre of the city",
  },
];
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
    },
  };
};
export default HomePage;
