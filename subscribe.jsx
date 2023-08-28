import React from 'react';
import './subscribe.css';

function subscribe() {
    return (
<div>
          <h1>Sign Up Form</h1>
            <form class="signup-form" action="/" method="post">
            <label for="email">Email:</label>
        <input type="email" id="email" name="email" required/>
        <br/>
        <button type="submit">Sign Up</button>
            </form>
        </div>

    );
}
export default subscribe;