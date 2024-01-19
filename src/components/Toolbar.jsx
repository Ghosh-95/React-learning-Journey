import Button from './Button';

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

export default function Toolbar() {
    return (
        <div onClick={() => alert('Toolbar got clicked')}>
            <PlayingButton onPlay={() => alert('Playing')} />
            <UploadButton onUpload={() => alert('Uploading')} />
        </div>
    );
};