import React from 'react'; 
import VideoComponent from '../components/VideoComponent';
import style from '../styles/math.module.scss';


const Math = (props) => {
  const videos = props.data.allContentfulVideo.edges;
  const number = videos.length;

  return (
    <div>
      <h2 className={style.main__heading}>Math Videos</h2>
      <h5 className={style.number}>{number} {number > 1 ? 'Videos' : 'Video'}</h5>
      <section className={style.videos}>
        <hr />
        {videos.map(video => (
          <div key={video.node.id}>
            <VideoComponent 
              title={video.node.title}
              subject={video.node.subject}
              videoId={video.node.videoId}
            />
          </div>
        ))}
      </section>
    </div>

  );
};


export default Math;

export const mathVideos = graphql`
  query MathVideos {
    allContentfulVideo(
      filter: { subject: { eq: "Math" }}
      sort: { fields: [date], order: DESC }
    ) {
      edges {
        node {
          id
          date
          title
          subject
          videoId
        }
      }
    }
  }
`;
