import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import LinkComponent from "../components/LinkComponet";
import Navbar from "../components/Navbar";
import Footer2 from "../components/Footer2";

const Gallery = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Fetch all events when the component mounts
    const fetchEvents = async () => {
      const eventsCollection = collection(db, "events");
      try {
        const querySnapshot = await getDocs(eventsCollection);
        const eventsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setEvents(eventsData);
      } catch (error) {
        console.error("Error getting events: ", error);
      }
    };

    fetchEvents();
  }, []);
  return (
    <div>
      <LinkComponent />
      <Navbar />

      <div className="flex flex-col gap-4 py-4 px-20">
        <div className="flex justify-center items-center py-3 bg-[#07294D] rounded-xl">
          <h1 className=" text-[30px] text-white  font-[700] ">Gallery</h1>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-x-20 gap-y-10">
          {events.map((event) => (
            <a
              href={`/event/${event.id}`}
              className="flex flex-col gap-2 w-[230px] hover:opacity-80"
              key={event.id}
            >
              <div className="relative flex items-end ml-2 bg-blue-100 w-[225px] h-[40vh] rounded-2xl">
                <div className=" w-[250px] absolute left-[-2vh]  h-[38vh] rounded-2xl">
                  <img
                    src={event.mainPictureURL}
                    alt=""
                    className="w-full h-full rounded-2xl object-cover "
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2 items-center leading-3 ">
                <span className="text-[14px]">{event.eventName}</span>
                <div className="flex justify-between w-full px-4">
                  <span className="text-[14px] font-bold">
                    {event.additionalPicturesURLs.length} photos
                  </span>
                  <span className="text-[14px]">{event.eventDate}</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
      <Footer2 />
    </div>
  );
};

export default Gallery;
