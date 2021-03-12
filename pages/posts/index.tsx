import React from "react"
import { Button } from 'antd';
import { NextPage } from 'next';
import Image from 'next/image';
import { useEffect } from 'react'
import { useRouter } from 'next/router'

const FirstPost: NextPage = () => {

  const router = useRouter()

  useEffect(() => {
    // Always do navigations after the first render
    router.push('/?counter=10', undefined, { shallow: true })
  }, [])

  useEffect(() => {
    // The counter changed!
  }, [router.query.counter]);

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