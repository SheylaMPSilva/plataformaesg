import { Button, TextField, Typography } from '@mui/material'
import { Container } from '@mui/material'
import { makeStyles } from '@material-ui/core/styles'
import { Box } from '@mui/material'

import TemplateDefault from '../../src/templates/Default'



const useStyles = makeStyles((theme) => ({
    container: {
        padding: theme.spacing(8, 0, 6)
    },
    boxContainer: {
        paddingBottom: theme.spacing(3),
    },
    box: {
        backgroundColor: theme.palette.background.white,
        padding: theme.spacing(3),
    },

}))

const Publish = () => {
    const classes = useStyles()

    return (
        <TemplateDefault>
            <Container maxWidth="sm" className={classes.container}>
                <Typography component="h1" variant="h2" align='center' color='textPrimary'>
                    Publicar Ação
                </Typography>
                <Typography component="h5" variant="h5" align='center' color='textPrimary'>
                    Quanto mais detalhado, melhor!
                </Typography>
            </Container>

            <Container maxWidth="md" className={classes.boxContainer}>
                <Box className={classes.box}>
                <Typography component="h6" variant="h6" color='textPrimary'>
                    Título Ação
                </Typography>
                <TextField
                    label="ex.: Reúso"
                    size="small"
                    fullWidth
                
                />

                </Box>

            </Container>
            <Container maxWidth="md" className={classes.boxContainer}>
            <Box className={classes.box}>
                <Typography component="h6" variant="h6" color='textPrimary'>
                    Imagens
                </Typography>
                <Typography component="div" variant="body2" color='textPrimary'>
                    A primeira imagem é a foto principal da sua ação.
                </Typography>
            </Box>

            </Container>

            <Container maxWidth="md" className={classes.boxContainer}>
            <Box className={classes.box}>
                <Typography component="h6" variant="h6" color='textPrimary'>
                   Descrição
                </Typography>
                <Typography component="div" variant="body2" color='textPrimary'>
                   Escreva os detalhes da ação.
                </Typography>
                <TextField
                    multiline
                    rows={6}
                    variant="outlined"
                    fullWidth
                
                />
            </Box>
            </Container>

            <Container maxWidth="md" className={classes.boxContainer}>
            <Box className={classes.box}>
                <Typography component="h6" variant="h6" color='textPrimary' gutterBottom>
                   Dados de Contato
                </Typography>
                <TextField
                    label="Nome"
                    variant="outlined"
                    size="small"
                    fullWidth               
                />
                <br /><br />
                <TextField
                    label="E-mail"
                    variant="outlined"
                    size="small"
                    fullWidth               
                />
                <br /><br />
                <TextField
                    label="Telefone"
                    variant="outlined"
                    size="small"
                    fullWidth               
                />
                <br /><br />
            </Box>
            </Container>
           <Container maxWidth="md" className={classes.boxContainer}>
            <Box textAlign="right">
                <Button variant="contained" color="primary">
                    Publicar Ação
                </Button>

            </Box>
            </Container>   
        </TemplateDefault>
    )
}

export default Publish