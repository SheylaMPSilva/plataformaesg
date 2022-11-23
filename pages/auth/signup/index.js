import { Formik } from 'Formik'
import TemplatesDefault from '../../../src/templates/Default'
import {
    Box,
    Container,
    Typography,
    InputLabel,
    FormControl,
    InputLabel,
    Button,
} from 'material-ui/core'

import { initialValues, validationSchema } from './formValues'
import useStyles from './styles'
import { useDebugValue } from 'react'

const Signup = () => {
    const Classes = useStyles ()

    return (

        <TemplatesDefault>
            <Container maxWidth="sm" component="main" className={classes.container}>
                <Typography component="h1" variant="h2" align="center" color="textPrimary">
                    Crie sua conta
                </Typography>
                <Typography component="h1" variant="h2" align="center" color="textPrimary">
                    E anuncie suas ações ESG para todo o mundo
                </Typography>   
            </Container>

            <Container maxWidth="md">
                <Box className={Classes.box}>
                    <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubimit={(values) => {
                        console.log('ok, form enviado', values)
                    
            }}
            >
                            
                            {
                            ({
                                touched,
                                values,
                                errors,
                                handleChange,
                            }) => {
                                return (
                                    <form onSubmit={handleSubmit}>
                                        <FormControl fullWidth error={errors.name && touched.name} classname={classes.formControl}>
                                        <InputLabel classname={classes.inputLabel}>Nome</InputLabel>
                                        <Input
                                            name="name"
                                            value={values.name}
                                            onChange={handleChange}
                                        />
                                        <FormHelperText>
                                            {errors.name && touched.name? errors.name : null}
                                        </FormHelperText>
                                        </FormControl>

                                        <FormControl fullWidth error={errors.name && touched.name} classname={classes.formControl}>
                                        <InputLabel classname={classes.inputLabel}>E-mail</InputLabel>
                                        <Input
                                            name="email"
                                            type="email"
                                            value={values.email}
                                            onChange={handleChange}
                                        />
                                        <FormHelperText>
                                            {errors.email && touched.email? errors.email : null}
                                        </FormHelperText>
                                        </FormControl>

                                        <FormControl fullWidth error={errors.password && touched.password} classname={classes.formControl}>
                                        <InputLabel classname={classes.inputLabel}>Senha</InputLabel>
                                        <Input
                                            name="password"
                                            type="password"
                                            value={values.password}
                                            onChange={handleChange}
                                        />
                                        <FormHelperText>
                                            {errors.password && touched.password? errors.password : null}
                                        </FormHelperText>
                                        </FormControl>

                                        <FormControl fullWidth error={errors.passwordConf && touched.passwordConf} classname={classes.formControl}>
                                        <InputLabel classname={classes.inputLabel}>Confirmação de senha</InputLabel>
                                        <Input
                                            name="passwordConf"
                                            type="password"
                                            value={values.passwordConf}
                                            onChange={handleChange}
                                        />
                                        <FormHelperText>
                                            {errors.passwordConf && touched.passwordConf? errors.passwordConf : null}
                                        </FormHelperText>
                                        </FormControl>

                                        <Button
                                        type="submit"
                                        fullWidth
                                        variant="contained"
                                        color="primary"
                                        className={classes.submit}                         
                                        >
                                            Cadastrar
                                        </Button>
                                    </form>
                                )
                            }
                        }
                    </Formik>
                </Box>
            </Container>  
        </TemplatesDefault>
    )
}

export default Signup