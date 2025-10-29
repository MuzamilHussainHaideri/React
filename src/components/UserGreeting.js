export const UserGreeting = () => {
    const isLoggedIn = false;
    return <div>
        {isLoggedIn ? <h1>Welcome back</h1> : <h1>Please login</h1>}
    </div>
}