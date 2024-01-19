import { useState } from 'react'
import Profile from './components/Profle';
import Button from './components/Button';
import './App.css'

function PlayingButton() {
  return (
    <Button eventHandler={() => alert('Playing')}>Play</Button>
  )
};

function UploadButton() {
  return (
    <Button eventHandler={() => alert('Uploading')}>Upload</Button>
  )
};

function App() {
  return (
    <>
      <PlayingButton />
      <UploadButton />
    </>
  )
}

export default App
