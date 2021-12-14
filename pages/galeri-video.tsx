/* eslint-disable @next/next/no-img-element */
import React from "react";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";
import { useAppStore } from "../stores/AppContext";
import CloseIcon from "@mui/icons-material/Close";

export async function getServerSideProps(_context: any) {
  const res = await fetch(
    "https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=UCB4ZBRFMW07kFUeYord5v6Q&key=AIzaSyA266ObefE7sVtCjt87hVZ6FWqpRP9-PoU"
  );
  const channeldata = await res.json();
  const maxResults = channeldata["items"][0]["statistics"]["videoCount"];
  const videosListRes = await fetch(
    `https://www.googleapis.com/youtube/v3/search?key=AIzaSyA266ObefE7sVtCjt87hVZ6FWqpRP9-PoU&channelId=UCB4ZBRFMW07kFUeYord5v6Q&part=snippet,id&order=date&maxResults=${maxResults}`
  );
  const data = await videosListRes.json();
  return {
    props: {
      data,
    }, // will be passed to the page component as props
  };
}

interface Props {
  data: any;
}

const GaleriVideo = (props: Props) => {
  const items = props.data["items"];
  const [isOpen, setIsOpen] = React.useState(null);
  const { setIsHeightFull } = useAppStore();

  console.log(items);
  return (
    <div
      className={`relative grid grid-cols-1 md:grid-cols-4 gap-4 p-2 md:p-4 ${
        isOpen ? "h-screen" : "h-full"
      }`}
    >
      {items.map((item: any) => (
        <div
          key={item["id"]["videoId"]}
          className="group relative p-3 rounded-md border border-gray-400 gap-4 flex flex-col items-center cursor-pointer hover:text-blue-500"
          onClick={() => {
            setIsHeightFull(false);
            setIsOpen(item["id"]["videoId"]);
          }}
        >
          <div className="flex flex-col relative w-full h-full">
            <img
              src={item["snippet"]["thumbnails"]["medium"]["url"]}
              width={item["snippet"]["thumbnails"]["medium"]["width"]}
              height={item["snippet"]["thumbnails"]["medium"]["height"]}
              alt="video"
            />
            <div className="absolute w-full h-full flex justify-center items-center">
              <PlayCircleFilledWhiteIcon
                fontSize="large"
                className="text-red-500 group-hover:text-red-700 drop-shadow-lg"
              />
            </div>
          </div>
          <p dangerouslySetInnerHTML={{ __html: item["snippet"]["title"] }}></p>
        </div>
      ))}
      {isOpen && (
        <div
          className="top-0 left-0 flex items-center justify-center z-100 w-full h-full fixed bg-gray-900"
          onClick={(e) => {
            e.stopPropagation();
            setIsOpen(null);
            setIsHeightFull(true);
          }}
        >
          <CloseIcon
            fontSize="large"
            className="absolute top-5 right-5 text-white cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              setIsOpen(null);
              setIsHeightFull(true);
            }}
          />
          <iframe
            key={isOpen}
            id="ytplayer"
            className="h-1/3 md:h-2/3 w-full md:w-3/5 border border-white rounded-md"
            src={`https://www.youtube.com/embed/${isOpen}?autoplay=1&origin=http://example.com`}
            frameBorder="0"
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default GaleriVideo;
