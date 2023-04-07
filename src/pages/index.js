import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import FileForm from './fileForm'
import Base64Form from './base64Form'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <FileForm></FileForm>
      <Base64Form></Base64Form>
    </>
  )
}
