import React from "react"
import { Button } from 'antd';
import { NextPage } from 'next';
import Image from 'next/image';

const FirstPost: NextPage = () => {
  return (
    <>
      <Image
        src="/pika.jpg"
        alt="Picture of the author"
        width={100}
        height={100}
      // layout="responsive"
      />
      <Button type="primary">GoldCoast</Button>
      <div>First Post</div>
    </>
  )
}
export default FirstPost;