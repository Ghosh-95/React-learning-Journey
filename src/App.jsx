import { useState } from 'react'
import Profile from './components/Profle';
import Button from './components/Button';
import './App.css'

function PlayingButton({ onPlay }) {
  return (
    <Button eventHandler={onPlay}>Play</Button>
  )
};

function UploadButton({ onUpload }) {
  return (
    <Button eventHandler={onUpload}>Upload</Button>
  )
};

function App() {
  return (
    <>
      <PlayingButton onPlay={() => alert('Playing')} />
      <UploadButton onUpload={() => alert('Uploading')} />
    </>
  )
}

export default App
