import { Fragment } from "react";
import MainContent from "./MainContent";
import Acts from "./Acts";

function Tweets(props) {
  return props.tweets.map((tweet) => {
    return (
      <Fragment key={tweet.id}>
        {tweet.acts ? <Acts names={tweet.actsname} /> : null}
        <MainContent
          imgsrc={tweet.imgsrc}
          username={tweet.username}
          userid={tweet.userid}
          time={tweet.time}
          tweets={tweet.tweets}
          hashtag={tweet.hashtag}
          showThread={tweet.showThread}
          like={tweet.like}
          retweet={tweet.retweet}
          comment={tweet.comment}
        />
      </Fragment>
    );
  });
}

export default Tweets;
