import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import TopBar from '../../components/TopBar/TopBar';
import { ArrowBack, PagesRounded } from '@material-ui/icons';
import IconButton from '../../components/IconButton/IconButton';
import axios from 'axios';
import ProfileHeader from '../../components/ProfileHeader/ProfileHeader';

interface Params {
	username: string;
}

interface UserProfile {
	username: string;
	user_handle: string;
	description: string;
	date_of_birth: string;
	location: string;
}

interface GetUserProfileRes extends Array<UserProfile> {}

interface Props {}

const UserProfile: React.FC<Props> = ({}) => {
	const { username } = useParams<Params>();
	const history = useHistory();
	const [userHandle, setUserHandle] = useState('');
	const [description, setDescription] = useState('');
	const [dateOfBirth, setDateOfBirth] = useState('');
	const [location, setLocation] = useState('');

	useEffect(() => {
		axios.get<GetUserProfileRes>('/users/' + username).then((res) => {
			const data = res.data[0];
			setUserHandle(data.user_handle);
			setDescription(data.description);
			setDateOfBirth(data.date_of_birth);
			setLocation(data.location);
		});
	});

	const backButton = (
		<IconButton
			Icon={ArrowBack}
			iconSize="md"
			color="var(--twitter-blue)"
			onClick={() => history.goBack()}
		/>
	);

	const pageName = (
		<h2>
			<span>{username}</span>
		</h2>
	);

	return (
		<>
			<TopBar firstElement={backButton} secondElement={pageName} />
			<ProfileHeader
				username={username}
				userHandle={userHandle}
				description={description}
				dateOfBirth={dateOfBirth}
				location={location}
			/>
		</>
	);
};

export default UserProfile;
