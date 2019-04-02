import React from 'react';
import { Link } from 'react-router-dom';
import styles from './TCPchatRoom.css';
import serverPic from '../../../../assets/tcpchatroom/tcpchatroom-server.png';
import client1Pic from '../../../../assets/tcpchatroom/tcpchatroom-client1.png';
import client2Pic from '../../../../assets/tcpchatroom/tcpchatroom-client2.png';
import client3Pic from '../../../../assets/tcpchatroom/tcpchatroom-client3.png';

const TCPchatRoom = () => {
  return (
    <>

      <main className={styles.TCPchatRoom}>
        <section>
          <h1>TCP Chat Room</h1>
          <span>
            <a href="https://github.com/caripizza/tcp-server"
              target="_blank" rel="noopener noreferrer"
            >
              https://github.com/caripizza/tcp-server
            </a>
          </span>
          <br/>
          <p>Featuring a chat server for the command line, which displays a welcome message upon start up and states how many users are connected:</p>
          <img src={serverPic} alt="chat-server-pic"/>
          <p>Allowing multiple users to connect and chat using short commands (@dm, @nick, @all):</p>
          <img src={client1Pic} alt="chat-client1-pic"/>
          <p>Here we see chat client 2:</p>
          <img src={client2Pic} alt="chat-client2-pic"/>
          <p>and chat client 3:</p>
          <img src={client3Pic} alt="chat-client3-pic"/>

          <Link to="/projects">Back</Link>
          <br/>

        </section>
      </main>

    </>
  );
};

export default TCPchatRoom;
