import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { ArrowBack } from '@material-ui/icons'; // tbd: PublicOutlined
import TopBar from '../../components/TopBar/TopBar';
import IconButton from '../../components/IconButton/IconButton';
import Button from '../../components/Button/Button';
import { TextArea, LeftWrapper, RightWrapper, Wrapper } from './ComposeTweetPage.styles';
import Avatar from '../../components/Avatar/Avatar';

interface Props {

}

interface Post {
    userHandle: string;
    username: string;
    postText: string;
}

const ComposeTweetPage: React.FC<Props> = () => {
    const history = useHistory();
    //  User input for tweet
    const [postInput, setPostInput] = useState<string>("");

    const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setPostInput(event.target.value);
    }
    const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        const postData: Post = {
            userHandle: 'Rubenstein',
            username: 'Ruben',
            postText: postInput
        };

        axios.post<Post>('http://localhost:4201/posts', postData)
            .then(response => {
                console.log(response.data)
                history.goBack();
            })
            .catch(error => {
                console.error(error)
            });
    }
    //  Top bar elements for this page
    const backButton = <IconButton Icon={ArrowBack} iconSize="md" color="var(--twitter-blue)" onClick={() => history.goBack()} />;
    const submitButton = <Button onClick={handleSubmit}>Tweet</Button>;

    return (
        <>
            <TopBar firstElement={backButton} thirdElement={submitButton} />
            <Wrapper>
                <LeftWrapper>
                    <Avatar size="md" />
                </LeftWrapper>
                <RightWrapper>
                    <TextArea name="tweetText" id="tweetText" cols={30} rows={4} placeholder="What's happening?" maxLength={300} value={postInput} onChange={handleInputChange} />
                </RightWrapper>
            </Wrapper>
            {/* <div className="who-reply-info">
                <PublicOutlined id="publicIcon" />
                <span>Everyone can reply</span>
            </div> */}
        </>
    )
}

export default ComposeTweetPage;
