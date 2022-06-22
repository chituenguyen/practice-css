import Image from 'next/image'
import { Button, Modal } from 'antd';
import React, { useState } from 'react';

interface Props {
  movie:{};  
}

function Thubnails({movie}:Props) {
  console.log(movie) 
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div className='relative h-28 w-28 min-w-[180px] cursor-pointer transition
    duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105'>
      <Image className='rounded-sm object-cover md:rounded'
      src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
      layout='fill'
      onClick={showModal}></Image> 

      {/* <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal> */}
    </div>
  )
}

export default Thubnails