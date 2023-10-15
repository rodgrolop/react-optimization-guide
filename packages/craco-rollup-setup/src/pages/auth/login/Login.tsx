import { default as Grid } from '@mui/material/Unstable_Grid2'

import { Helmet } from 'react-helmet-async'
import { LoginForm, AuthPageContainer } from '@components'

import { styles } from './styles'

import type { ReactElement } from 'react'

const Login = (): ReactElement => {
    return (
        <AuthPageContainer>
            <Helmet>
                <title>🔓 Login</title>
            </Helmet>
            <Grid
                container={true}
                direction="column"
                justifyContent="center"
                alignItems="center"
                sx={styles.formContainer}
                spacing={2}
            >
                <LoginForm />
            </Grid>
        </AuthPageContainer>
    )
}

export default Login
