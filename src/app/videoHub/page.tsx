"use client";
import { vedioHub } from "@/components/organisms/vedioCard";
import React, { useEffect, useRef, useState } from "react";
import HomeNavbare from "../(home)/navbare/Navbare";
import { EllipsisVertical, Play } from "lucide-react";

export default function VideosSidebar() {
  const [selectedVideo, setSelectedVideo] = useState<vedioHub | null>(null);
  const [allVideos, setAllVideos] = useState<vedioHub[]>([]);
  const [toggleMenu, settoggleMenu] = useState(true);
  const [isOpen, setOpen] = useState(false);
  const videoRefs = useRef<Record<number, HTMLVideoElement | null>>({})

  const toggleSidebar = () => {
    settoggleMenu(!toggleMenu)
  }


  useEffect(() => {
    const video = localStorage.getItem("selectedVideo");
    const all = localStorage.getItem("allVideos");

    if (video) setSelectedVideo(JSON.parse(video));
    if (all) setAllVideos(JSON.parse(all));
  }, []);

  const handleMouseEnter = (id: number) => {
    const video = videoRefs.current[id]
    if (video) {
      video.currentTime = 0
      video.play()
    }
  }

  const handleMouseLeave = (id: number) => {
    const video = videoRefs.current[id]
    if (video) {
      video.pause()
      video.currentTime = 0
      video.load() // ✅ this brings back the poster!
    }
  }



  console.log(selectedVideo)
  console.log(allVideos)

  return (
    <div className="w-full h-full  ">
      <div className="w-full h-14 bg-white dark:bg-[#303030] sticky  top-0">
        <HomeNavbare toggleSidebar={toggleSidebar} open={isOpen} setOpen={setOpen} />
      </div>
      <div className="flex   gap-5  w-full px-5">
        {selectedVideo && (
          <div
            className="flex-[3] mt-10"

          >
            <video
              src={selectedVideo.src}
              autoPlay
              controls
              className="w-full  object-cover h-[800px]"
            />
          </div>
        )}
        <div className=" flex-[1] mt-10">
          <div className=" border  border-gray-300 dark:border-gray-600 rounded-lg  dark:bg-[#212121] ">
            <div className="p-5">
              <h3 className="text-xs font-bold">Next:Jaanan |( Slow and Reverb )|- Hadiqa Kiani ft Ir</h3>
              <p className="text-xs text-gray-700 dark:text-gray-400 mt-1">Mix - Pashto Romantic slow and reverb song</p>
            </div>
            <div className="overflow-y-scroll scrollbar-custom-light dark:scrollbar-custom  h-[500px]">
              {allVideos.map((item, index) => (
                <div
                  key={item.id}
                  className="flex gap-2 m-1  mt-2 cursor-pointer"
                  onMouseEnter={() => handleMouseEnter(item.id)}
                  onMouseLeave={() => handleMouseLeave(item.id)}
                >
                  {
                    item.id === selectedVideo?.id ?
                      <div className="flex items-center justify-center mr-1">
                        <Play width={15} height={15} />
                      </div>
                      :
                      ''
                  }
                  <video
                    ref={(el) => {
                      videoRefs.current[item.id] = el
                    }}
                    src={item.src}
                    poster={item.poster}
                    muted
                    className={`w-[168px] object-cover h-[95px] transition-all duration-300   
                  ${item.id === selectedVideo?.id ?
                        ''
                        :
                        'ml-7'
                      }
                  `}
                  />




                  <div className="">
                    <div className="flex  gap-4">
                      <h3 className="text-gray-700 dark:text-white  font-roboto text-xs " >Ep 6: Living to Serve ali ali  i am danish</h3>
                      <EllipsisVertical width={20} height={20} />
                    </div>
                    <div className="">
                      <p className=" text-gray-700 dark:text-gray-400  font-roboto text-xs">{item.author}</p>
                      <p className="text-xs text-gray-500 font-normal dark:text-gray-400">{item.views} • {item.time}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>



          <div className=" mt-20">
            {
              allVideos.map((item,) => (
                <div
                  key={item.id}
                  className="flex gap-2 m-1  mt-2 cursor-pointer"
                  onMouseEnter={() => handleMouseEnter(item.id)}
                  onMouseLeave={() => handleMouseLeave(item.id)}
                >
                  <video
                    ref={(el) => {
                      videoRefs.current[item.id] = el
                    }}
                    src={item.src}
                    poster={item.poster}
                    muted
                    className='w-[168px] object-cover h-[95px] transition-all duration-300'
                  />
                  <div className="">
                    <div className="flex  gap-4">
                      <h3 className="text-gray-700 dark:text-white  font-roboto text-xs " >Ep 6: Living to Serve ali ali  i am danish</h3>
                      <EllipsisVertical width={20} height={20} />
                    </div>
                    <div className="">
                      <p className=" text-gray-700 dark:text-gray-400  font-roboto text-xs">{item.author}</p>
                      <p className="text-xs text-gray-500 font-normal dark:text-gray-400">{item.views} • {item.time}</p>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>


        </div>
      </div>


    </div>
  );
}
