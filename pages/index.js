import { 
    Paper,
    Card,
    CardMedia,
    CardContent,
    Button, 
    Container, 
    IconButton, 
    InputBase, 
    Typography } from '@material-ui/core'

import SearchIcon from '@material-ui/icons/search'
import { ThemeConsumer } from 'styled-components'

import TemplateDeafault from '../src/templates/Default'


const useStyles = makeStyles((theme) => ({
    searchContainer: {
        padding:theme.spacing(8, 10, 6)
    },
    searchBox: {
        display: 'flex',
        justifyContent: 'center',
        padding: themespacing(0, 2),
        marginTop: 20,
    },
    CardMedia: {
        paddingTop: '56%' 
    },
    


}))

const Home = () => {
    const classes= useStyles()

    return (
        <TemplateDeafault>
            <Container maxWidth="md" className={classes.searchContainer}>
                <Typography component="h1" variant="h3" align="center" color="textPrimary">
                    O que deseja pesquisar?
                </Typography>
                <Paper className={classes.searchBox}>
                    <InputBase
                        placeholder="Ex. Ashoka"
                        fullWidth
                    />
                    <IconButton>
                        <SearchIcon/>
                    </IconButton>
                </Paper>
            </Container>

            <Container maxWidth="md" className={classes.cardGrid}>
                <Typography component="h2" variant="h4" align="center" color="textPrimary">
                    Destaques
                </Typography>
                <br />
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card>
                            <CardMedia
                                className={classes.CardMedia}
                                image={'https://source.unsplash.com/random'}
                                title="ESG - Instituição"
                            />
                            <CardContent>
                                <Typography variant='h5' component="h2">
                                Ashoka
                                </Typography>
                                <Typography>A Ashoka é uma organização global que atua focando no setor cidadão, promovendo as missões e valores que constituem o campo do empreendedorismo social.
                                .</Typography>
                                </CardContent>
                            
                        </Card>
                </Grid>  

                <Grid item xs={12} sm={6} md={4}>
                        <Card>
                            <CardMedia
                                className={classes.CardMedia}
                                image={'https://source.unsplash.com/random'}
                                title="ESG - Instituição"
                        />
                            <CardContent>
                                <Typography variant='h5' component="h2">
                                    Grow2Impact
                                </Typography>
                                <Typography>
                                    Capacita líderes, gestores e equipes para estruturar protótipos de modelos de negócios.
                                </Typography>
                            </CardContent>
                        </Card>
                </Grid>  
            </Grid> 
            </Container>
        </TemplateDeafault>
    )


}

export default Home