// import React from "react";
// import Navbar from "../component/Navbar";
// import Hero from "./Hero";
// import CrochetCollection from "./CrochetCollection";
// import PipeCleanerSeries from "./PipeCleanerSeries";
// import WeddingSeries from "./WeddingSeries";

// const Artisan = () => {
//   return (
//     <div>
//       <Navbar />
//       <Hero />
//       <CrochetCollection />
//       <PipeCleanerSeries />
//       <WeddingSeries />
//     </div>
//   );
// };

// export default Artisan;



import React, { useEffect, useState } from "react";
import Navbar from "../component/Navbar";
import { api } from "../api";

import Hero from "./Hero";
import CrochetCollection from "./CrochetCollection";
import PipeCleanerSeries from "./PipeCleanerSeries";
import WeddingSeries from "./WeddingSeries";
import Footer from "./Footer";

const Artisan = () => {
  const [collections, setCollections] = useState([]);

  useEffect(() => {
    api.get("/collections")
      .then(res => setCollections(res.data))
      .catch(err => console.log(err));
  }, []);

  const crochet = collections.find(c => c.id === "crochet");
  const pipecleaner = collections.find(c => c.id === "pipecleaner");
  const wedding = collections.find(c => c.id === "wedding");

  return (
    <div className="bg-[#131313] text-white min-h-screen">
    <Navbar />
      <Hero />

      {crochet && <CrochetCollection data={crochet} />}
      {pipecleaner && <PipeCleanerSeries data={pipecleaner} />}
      {wedding && <WeddingSeries data={wedding} />}
      
      <Footer />
    </div>
  );
};

export default Artisan;
