const Welcome = () => {
    return (
        <div className="Welcome">
            <div>
            <h1>
                Welcome to WiseWallet!
                </h1>
                <p>
                    Take the first step to unlocking your financial flexibility.
                    </p>
                    <Form method="post">
                        <input
                        type="text"
                        name="userName"
                        placeholder="Enter your name"
                        />
                        <button type="submit" className="btn btn--dark">
                            <span>Join</span>
                            </button>
                            </Form>
            </div>
        </div>

        
    )
}