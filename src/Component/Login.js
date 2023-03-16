import React from "react";

export const Login = () => {
    return (
        <div>
            <h2>Sign In</h2>
            <form>

                <label>
                    Email:
                    <input type="email" placeholder="enter your email" />
                </label>

                <label>
                    Password:
                    <input type="password" placeholder="enter password" />
                </label>
                <button type="submit">Sign Up</button>
            </form>
            <button type="submit">Don't have an account? Create here</button>

        </div>

    );
}
