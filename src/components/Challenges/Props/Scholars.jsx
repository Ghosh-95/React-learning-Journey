import generateImage from "../../../utils/generateImg";

/**Challenge is to create a data structure that can be passed as props and therefore reducing the amount of code. */

const data = [
    {
        fullName: "Maria Skłodowska-Curie",
        imageId: "szV5sdG",
        size: 70,
        profession: "physicist and chemist",
        awards: [
            "Nobel Prize in Physics", "Nobel Prize in Chemistry", "Davy Medal", "Matteucci Medal"
        ],
        discovery: "poloniumx (chemical element)",
    },
    {
        fullName: "Katsuko Saruhashi",
        imageId: "YfeOqp2",
        size: 70,
        profession: "geochemist",
        awards: [
            "Miyake Prize for geochemistry", "Tanaka Prize",
        ],
        discovery: "a method for measuring carbon dioxide in seawater",
    }
]

function Profile({ props }) {
    const { fullName, imageId, size, profession, awards, discovery, typeOfDiscovery } = props;
    return (
        <section className="profile">
            <h2>{fullName}</h2>
            <img
                className="avatar"
                src={generateImage(imageId)}
                alt={fullName}
                width={size}
                height={size}
            />
            <ul>
                <li>
                    <b>Profession: </b>
                    {profession}
                </li>
                <li>
                    <b>Awards: {awards.length}</b>
                    ({awards.join(', ')})
                </li>
                <li>
                    <b>Discovered: </b>
                    {discovery} ({typeOfDiscovery})
                </li>
            </ul>
        </section>
    )
};

export default function ScholarsGallery() {
    return (
        <div>
            <h1>Notable Scientists</h1>
            <Profile props={data[0]} />
            <Profile props={data[1]} />

        </div>
    );
}