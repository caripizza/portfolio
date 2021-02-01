import React from 'react';
import styles from './TCPchatRoom.css';
import serverPic from '../../../../assets/tcpchatroom/tcpchatroom-server.png';
import client1Pic from '../../../../assets/tcpchatroom/tcpchatroom-client1.png';
import client2Pic from '../../../../assets/tcpchatroom/tcpchatroom-client2.png';
import client3Pic from '../../../../assets/tcpchatroom/tcpchatroom-client3.png';
import ProjectTemplate from '../ProjectTemplate';
import ImageWrapper from '../../ImageWrapper';
import { tcpChatroomDescription } from '../Projects';

const TCPchatRoom = () => {
  return (
    <ProjectTemplate
      name="TCP Chat Room"
      projectSiteUrl=""
      projectGitHub="https://github.com/caripizza/tcp-server"
      projectStyles={styles.TCPchatRoom}
      projectDescription={tcpChatroomDescription}
    >

      <p>Featuring a chat server for the command line, displaying a welcome message with how many users are connected:</p>
      <ImageWrapper
        alt="chat-server-pic"
        width="auto" height="auto"
        src={serverPic}
      />

      <p>Allowing multiple users to connect and chat using short commands (@dm, @nick, @all). Here we see chat client 1:</p>
      <ImageWrapper
        alt="chat-client-pic-1"
        width="auto" height="auto"
        src={client1Pic}
      />

      <p>and chat client 2:</p>
      <ImageWrapper
        alt="chat-client-pic-2"
        width="auto" height="auto"
        src={client2Pic}
      />

      <p>and chat client 3:</p>
      <ImageWrapper
        alt="chat-client-pic-3"
        width="auto" height="auto"
        src={client3Pic}
      />

    </ProjectTemplate>
  );
};

export default TCPchatRoom;
