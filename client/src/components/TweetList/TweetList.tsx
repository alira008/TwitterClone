import axios, { AxiosResponse } from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import Tweet from '../Tweet/Tweet';
import './TweetList.css';
// import Avatar from '../Avatar/Avatar';

interface TweetPost {
    PostID: number;
    Username: string;
    UserHandle: string;
    PostText: string;
    TimePosted: Date;
}

interface Props {

}

const TweetList: React.FC<Props> = () => {
    const [tweetsList, setTweetsList] = useState<TweetPost[]>([])
    const serverURL: string = 'http://localhost:4201/posts';

    useEffect(() => {
        axios.get<TweetPost[]>(serverURL)
            .then((response: AxiosResponse) => {
                setTweetsList(response.data);
            })
    }, [])

    return (
        <ul id="listOfTweets">
            {tweetsList.map((tweet: TweetPost) => (
                <li key={tweet.PostID.toString()} >
                    <Tweet postID={tweet.PostID} username={tweet.Username} userHandle={tweet.UserHandle} postText={tweet.PostText} timePosted={tweet.TimePosted} />
                </li>
            ))}
        </ul >

        // <Tweet postID={} />
    )
}

export default TweetList;