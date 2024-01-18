import generateImage from "../utils/generateImg";

export default function Avatar({ person: { personName, imageId }, size = 100 }) {

    return (
        <img
            className="avatar"
            src={generateImage(imageId)}
            alt={personName}
            width={size}
            height={size}
        />
    );
}