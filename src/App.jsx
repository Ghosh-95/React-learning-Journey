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

function Toolbar({ children }) {
  return (
    <div onClick={() => alert('Toolbar got clicked')}>{children}</div>
  )
}

function App() {
  return (
    <Toolbar>
      <PlayingButton onPlay={() => alert('Playing')} />
      <UploadButton onUpload={() => alert('Uploading')} />
    </Toolbar>
  )
}

export default App
