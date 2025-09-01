import { SearchParams } from "next/dist/server/request/search-params";
import { FC } from "react";
import { IUser } from "@/models/IUser";
import { retrieveSearchParams } from "@/services/api.service";

type UserPageProps = {
    searchParams: Promise<SearchParams>;
};

const UserPage: FC<UserPageProps> = async ({ searchParams }) => {
    const user = await retrieveSearchParams<IUser>(searchParams, "user");

    if (!user) {
        return <div style={{ marginTop: 100 }}>No user data found</div>;
    }

    return (
        <div
            style={{
                marginTop: 144,
                padding: "20px",
                border: "1px solid #ccc",
                borderRadius: "12px",
                maxWidth: "600px",
                marginInline: "auto",
                background: "#fafafa",
            }}
        >
            <h2>User #{user.id}</h2>
            <p>
                <strong>Name:</strong> {user.name}
            </p>
            <p>
                <strong>Username:</strong> {user.username}
            </p>
            <p>
                <strong>Email:</strong> {user.email}
            </p>

            <h3>Address</h3>
            <p>
                {user.address.street}, {user.address.suite}
            </p>
            <p>
                {user.address.city}, {user.address.zipcode}
            </p>
            <p>
                <strong>Geo:</strong> lat {user.address.geo.lat}, lng{" "}
                {user.address.geo.lng}
            </p>

            <h3>Contact</h3>
            <p>
                <strong>Phone:</strong> {user.phone}
            </p>
            <p>
                <strong>Website:</strong> {user.website}
            </p>

            <h3>Company</h3>
            <p>
                <strong>Name:</strong> {user.company.name}
            </p>
            <p>
                <strong>Catch phrase:</strong> {user.company.catchPhrase}
            </p>
            <p>
                <strong>BS:</strong> {user.company.bs}
            </p>
        </div>
    );
};

export default UserPage;
