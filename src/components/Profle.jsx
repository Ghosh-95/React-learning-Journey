import Avatar from "./Avatar";

function Card({ children }) {
    return (
        <div className="card">
            {children}
        </div>
    );
};

export default function Profile() {
    return (
        <Card>
            <Avatar
                person={{
                    personName: 'Katsuko Saruhashi',
                    imageId: 'YfeOqp2'
                }}
            />

            <Avatar
                size={80}
                person={{
                    personName: 'Aklilu Lemma',
                    imageId: 'OKS67lh'
                }}
            />
            <Avatar
                size={50}
                person={{
                    personName: 'Lin Lanying',
                    imageId: '1bX5QH6'
                }}
            />
        </Card>
    );
}