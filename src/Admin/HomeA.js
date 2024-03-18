
import React, { useState, useEffect } from 'react';
import 
{ BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill}
 from 'react-icons/bs'

 import './HomeA.css';
 import Header from './Header';
 import NavigationMenu from './NavigationMenu';
 import axios from 'axios';

 const HomeA = () => {
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const toggleSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };
    const [viewsCount, setViewsCount] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:3003/api/getViewsLength')
            .then(response => {
                setViewsCount(response.data.totalViewsLength);
            })
            .catch(error => {
                console.error('Error fetching views count:', error);
            });
    }, []);

    const [personalQuotesCount, setPersonalQuotesCount] = useState(null);

    useEffect(() => {
        // Axios request to fetch the personal quotes count
        axios.get('http://localhost:3003/api/getAllInsuranceCount')
            .then(response => {
                setPersonalQuotesCount(response.data.totalCount);
            })
            .catch(error => {
                console.error('Error fetching personal quotes count:', error);
                // Handle error
            });
    }, []);
    const [sumOfQuotes, setSumOfQuotes] = useState(null);

useEffect(() => {
    // Axios request to fetch the sum
    axios.get('http://localhost:3003/api/getsumbusinessquote')
        .then(response => {
            setSumOfQuotes(response.data.totalCount);
        })
        .catch(error => {
            console.error('Error fetching sum:', error);
            // Handle error
        });
}, []);
const [messageCount, setMessageCount] = useState(null);

useEffect(() => {
    // Axios request to fetch the message count
    axios.get('http://localhost:3003/api/engthmessages')
        .then(response => {
            setMessageCount(response.data.messageLength);
        })
        .catch(error => {
            console.error('Error fetching message count:', error);
            // Handle error
        });
}, []);

  return (
    <div className='grid-containerhom'>
  <Header toggleSidebar={toggleSidebar} /> {/* Pass toggleSidebar function */}
      <NavigationMenu openSidebarToggle={openSidebarToggle} toggleSidebar={toggleSidebar} />
    <main className='main-containerhom'>
       

        <div className='main-cards'>
            <div className='cardee'>
                <div className='card-inner'>
                    <h3>Personal Quotes</h3>
                    <BsFillArchiveFill className='card_icon'/>
                </div>
                <h1>{personalQuotesCount !== null ? personalQuotesCount : 'Loading...'}</h1>
            </div>
            <div className='cardee'>
                <div className='card-inner'>
                    <h3>Business Quotes</h3>
                    <BsFillGrid3X3GapFill className='card_icon'/>
                </div>
                <h1>{sumOfQuotes !== null ? sumOfQuotes : 'Loading...'}</h1>
            </div>
            <div className='cardee'>
                <div className='card-inner'>
                    <h3>Views</h3>
                    <BsPeopleFill className='card_icon'/>
                </div>
                <h1>{viewsCount !== null ? viewsCount : 'Loading...'}</h1>
            </div>
            <div className='cardee'>
                <div className='card-inner'>
                    <h3>Messages</h3>
                    <BsFillBellFill className='card_icon'/>
                </div>
                <h1>{messageCount !== null ? messageCount : 'Loading...'}</h1>
            </div>
        </div>

        <div className='charts'>

            {/* <ResponsiveContainer width="100%" height="100%">
            <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="pv" fill="#8884d8" />
                <Bar dataKey="uv" fill="#82ca9d" />
                </BarChart>
            </ResponsiveContainer>

            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                </LineChart>
            </ResponsiveContainer> */}

        </div>
    </main>
    </div>
  )
}

export default HomeA