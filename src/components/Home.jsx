import { Grid } from "@mui/material"
import SkpImg from '../assets/SarathKP.jpg'

const Home = () => {
    return <Grid container spacing={2} style={{ backgroundColor: '#db8679' }} >
        <Grid item xs={12} md={8} lg={6}>
            <div style={{ height: '100vh', alignItems: 'center', display: 'flex', justifyContent: 'center' }}>
                <div > <h1>Sarath KP</h1>
                    <p>Responsible and proactive software developer
                        with 2+ years of experience in both backend and
                        frontend development.</p></div>
            </div>
        </Grid>
        <Grid item xs={12} md={8} lg={6}>
            <div style={{ height: '100vh', alignItems: 'center', display: 'flex', justifyContent: 'center' }}>

                <img src={SkpImg} alt="Girl in a jacket" width="500" height="600" />
            </div>
        </Grid>

    </Grid>
}
export default Home