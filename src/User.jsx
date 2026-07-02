// function User({ name, age, email }) {

// for object
function User({ user }) {

    return (
        <>
            <h1>User component ....USer</h1>
            <h2>Welcome Userrrrr</h2>


            {/* <div>
                <h2>Name: {name}</h2>
                <h2>Age: {age}</h2>
                <h2>Email: {email}</h2>
            </div> */}

            {/* for Object */}
            <div>
                <h2>Name: {user.name}</h2>
                <h2>Age: {user.age}</h2>
                <h2>Email: {user.email}</h2>
            </div>
        </>
    );

}

export default User;