import React, { useState } from "react";
import "photoswipe/dist/photoswipe.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { TikTokEmbed, FacebookEmbed, YouTubeEmbed } from 'react-social-media-embed';
// const YOUTUBE_DEFAULT_HEIGHT = 390;
// const [embedHeight, setEmbedHeight] = React.useState(YOUTUBE_DEFAULT_HEIGHT);
// import ModalVideo from "react-modal-video";
// import { Gallery, Item } from "react-photoswipe-gallery";


const CreativePortfolio = () => {
  const [isOpen, setOpen] = useState(false);
  const [isOpen2, setOpen2] = useState(false);
  return (
    <div className="portfolio_list">
      <Tabs>
        <TabList className="creative-portfolio-list">
          <Tab>All</Tab>
          <Tab>TikTok</Tab> 
          <Tab>Youtube</Tab> 
          {/* <Tab>Facebook</Tab>  */}
        </TabList>

        {/* ALL */}
        <TabPanel>
          {/* <ul className="gallery_zoom"> */}
          <div style={{ display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap', alignContent: 'space-around' }} data-aos="fade-right" data-aos-duration="1200">
            {/* <div style={{ display: 'flex', justifyContent: 'center' }}> */}
            <h2>TikTok</h2>
            </div>

          <div style={{ display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap', alignContent: 'space-around' }} data-aos="fade-right" data-aos-duration="1200">
          <div><TikTokEmbed url="https://www.tiktok.com/@boblifalanca1/video/7199346860711103749" height={724} width={325} /></div>
              <div><TikTokEmbed url="https://www.tiktok.com/@boblifalanca1/video/7193765137218620677" height={724} width={325} /></div> 
              <div><TikTokEmbed url="https://www.tiktok.com/@boblifalanca1/video/7200824944513551622" height={724} width={325} /></div> 
              <div ><TikTokEmbed url="https://www.tiktok.com/@boblifalanca1/video/7195204596195724550" height={724} width={325} /></div>
              <div ><TikTokEmbed url="https://www.tiktok.com/@boblifalanca1/video/7197467722177875206" height={724} width={325} /></div>
              <div><TikTokEmbed url="https://www.tiktok.com/@boblifalanca1/video/7198485256993819909" width={325} /></div>
              <div> <TikTokEmbed url="https://www.tiktok.com/@boblifalanca1/video/7186210067883035910" width={325} /></div> 
              <div><TikTokEmbed url="https://www.tiktok.com/@boblifalanca1/video/7185460275510791429" width={325} /></div>
              {/* <div ><TikTokEmbed url="https://www.tiktok.com/@boblifalanca1/video/7199346860711103749" width={325} /></div>  */}

          </div>

          <div style={{ display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap', alignContent: 'space-around' }} data-aos="fade-right" data-aos-duration="1200">
            <h2>YouTube</h2>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap', alignContent: 'space-around' }} data-aos="fade-right" data-aos-duration="1200">
              <div><YouTubeEmbed url="https://www.youtube.com/watch?v=RyJ5TEHso_c" width={420} height={340} /></div>
              <div><YouTubeEmbed url="https://www.youtube.com/watch?v=MxeudGkCFBc" width={420} height={340} /></div>
              <div><YouTubeEmbed url="https://www.youtube.com/watch?v=pTJC8TRa4og" width={420} height={340} /></div>
              <div><YouTubeEmbed url="https://www.youtube.com/watch?v=fYZlgO_3igM" width={420} height={340} /></div>
              <div><YouTubeEmbed url="https://www.youtube.com/watch?v=08fQuV-DWLI" width={420} height={340} /></div>
              <div><YouTubeEmbed url="https://www.youtube.com/watch?v=IYU1Wty2Se4" width={420} height={340} /></div>
          </div>

          {/* <div style={{ display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap', alignContent: 'space-around' }} data-aos="fade-right" data-aos-duration="1200">
            <h2>Facebook</h2>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap', alignContent: 'space-around' }} data-aos="fade-right" data-aos-duration="1200">
              <div><YouTubeEmbed url="https://www.youtube.com/watch?v=RyJ5TEHso_c" width={325} height={220} /></div>
              <div><YouTubeEmbed url="https://www.youtube.com/watch?v=MxeudGkCFBc" width={325} height={220} /></div>
              <div><YouTubeEmbed url="https://www.youtube.com/watch?v=pTJC8TRa4og" width={325} height={220} /></div>
              <div><YouTubeEmbed url="https://www.youtube.com/watch?v=fYZlgO_3igM" width={325} height={220} /></div>
              <div><YouTubeEmbed url="https://www.youtube.com/watch?v=08fQuV-DWLI" width={325} height={220} /></div>
              <div><YouTubeEmbed url="https://www.youtube.com/watch?v=IYU1Wty2Se4" width={325} height={220} /></div>
          </div> */}
          {/* </ul> */}
        </TabPanel>

        {/* TIKTOK */}
        <TabPanel>
            <div style={{ display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap', alignContent: 'space-around' }} data-aos="fade-right" data-aos-duration="1200">
            <div><TikTokEmbed url="https://www.tiktok.com/@boblifalanca1/video/7199346860711103749" height={724} width={325} /></div>
              <div><TikTokEmbed url="https://www.tiktok.com/@boblifalanca1/video/7193765137218620677" height={724} width={325} /></div> 
              <div><TikTokEmbed url="https://www.tiktok.com/@boblifalanca1/video/7200824944513551622" height={724} width={325} /></div> 
              <div ><TikTokEmbed url="https://www.tiktok.com/@boblifalanca1/video/7195204596195724550" height={724} width={325} /></div>
              <div ><TikTokEmbed url="https://www.tiktok.com/@boblifalanca1/video/7197467722177875206" height={724} width={325} /></div>
              <div><TikTokEmbed url="https://www.tiktok.com/@boblifalanca1/video/7198485256993819909" width={325} /></div>
              <div> <TikTokEmbed url="https://www.tiktok.com/@boblifalanca1/video/7186210067883035910" width={325} /></div> 
              <div><TikTokEmbed url="https://www.tiktok.com/@boblifalanca1/video/7185460275510791429" width={325} /></div>
              <div ><TikTokEmbed url="https://www.tiktok.com/@boblifalanca1/video/7199346860711103749" width={325} /></div> 
            </div>
        </TabPanel>

        {/* YOUTUBE */}
        <TabPanel>
            <div style={{ display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap', alignContent: 'space-around' }} data-aos="fade-right" data-aos-duration="1200">
                <div><YouTubeEmbed url="https://www.youtube.com/watch?v=RyJ5TEHso_c" width={420} height={340} /></div>
                <div><YouTubeEmbed url="https://www.youtube.com/watch?v=MxeudGkCFBc" width={420} height={340} /></div>
                <div><YouTubeEmbed url="https://www.youtube.com/watch?v=pTJC8TRa4og" width={420} height={340} /></div>
                <div><YouTubeEmbed url="https://www.youtube.com/watch?v=fYZlgO_3igM" width={420} height={340} /></div>
                <div><YouTubeEmbed url="https://www.youtube.com/watch?v=08fQuV-DWLI" width={420} height={340} /></div>
                <div><YouTubeEmbed url="https://www.youtube.com/watch?v=IYU1Wty2Se4" width={420} height={340} /></div>
            </div>
        </TabPanel>
          
        {/* FACEBOOK */}
        {/* <TabPanel>
              <div style={{ display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap', alignContent: 'space-around' }} data-aos="fade-right" data-aos-duration="1200">
                <div><FacebookEmbed url="https://www.facebook.com/andrewismusic/posts/451971596293956" width={550} /></div>

              </div> 
        </TabPanel> */}

      </Tabs>
      {/* END TABLIST */}
    </div>
  );
};

export default CreativePortfolio;
