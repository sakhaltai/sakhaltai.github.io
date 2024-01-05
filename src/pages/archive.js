/* eslint-disable react/no-unknown-property */
import React from 'react';
import { Helmet } from 'react-helmet';
import { Layout } from '@components';
import './archive.css';

// eslint-disable-next-line react/prop-types
const ArchivePage = ({ location }) => (
  <Layout location={location}>
    <Helmet title="Archive" />
    <main>
      <header>
        <h1 className="big-heading">Teaching Archive</h1>
        <p className="subtitle">
          Nic is just such an incredible teacher. Here is a collection of Nic's virtual classes for
          Shoreline Community College, as well as supplemental videos for the students. We've also
          got two playlists at the bottom: one for a Blender module I taught, and one for Unreal.
          Both of these modules were for VCT 176, Fundamentals of 3D Modeling. Enjoy the teaching.
        </p>
      </header>
      <header>
        <h2 className="spacer"> </h2>
      </header>

      <div className="wrap">
        <div className="item">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/V5dkLbTDiT4?si=o2zHH_CaTGeKHG-1"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen></iframe>
        </div>

        <div className="item">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/I6iSCFuP5-0?si=pE48lTYqC-KPhWLo"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen></iframe>
        </div>

        <div className="item">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/0Udxxz7IcAU?si=hIlf8NlasrmIpb6y"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen></iframe>
        </div>

        <div className="item">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/fKcar73CepQ?si=SWpmVYVtmTVhSxEY"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen></iframe>
        </div>

        <div className="item">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/fKcar73CepQ?si=SWpmVYVtmTVhSxEY"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen></iframe>
        </div>

        <div className="item">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/videoseries?si=C22JtGeYPMX26p9X&amp;list=PLO0g83JdlVkFyl5QYNS0kna97EJpGPniv"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen></iframe>
        </div>
      </div>
    </main>
  </Layout>
);

export default ArchivePage;
