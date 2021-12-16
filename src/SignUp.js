import withAuthenticator  from '@aws-amplify/ui-react';
import React from 'react'

function SignUp() {
    return (
        <div>
            <withAuthenticator />
        </div>
    )
}
export default withAuthenticator(SignUp);